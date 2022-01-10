/**
 * MDTab component.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '../Container';
import ImageRenderer from '../MDImg/image-renderer';
import remarkGfm from 'remark-gfm';
import styles from './styles';

export interface MDTabProps {
  fileName: string;
}

const useResize = (myRef: React.RefObject<HTMLDivElement>) => {
  const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);

  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
      const handleResize = () => {
          setWidth(getWidth());
      };

      if (myRef.current) {
          setWidth(getWidth());
      }

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [myRef, getWidth]);

  return width && width > 25 ? width - 25 : width;
};

const renderers = {
  //This custom renderer changes how images are rendered
  //we use it to constrain the max width of an image to its container
  image: ({
      alt,
      src,
      title,
  }: {
      alt?: string;
      src?: string;
      title?: string;
  }) => (
      <img 
          alt={alt} 
          src={src} 
          title={title} 
          style={{ maxWidth: 500 }}  />
  ),
};

const MDTab: React.FC<MDTabProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>('');

  useEffect(() => {
    const loadFile = async () => {
      const file = await import(`../../data/tabs/${fileName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setContents(text);
    };
    loadFile();
  }, [fileName]);

  return (
    <Container seo={{ title: fileName }}>
      <ReactMarkdown  source={contents} renderers={renderers} escapeHtml={false} plugins={[remarkGfm]}/>
    </Container>
  );
};

export default MDTab;
