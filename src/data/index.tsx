import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, red, darkOrange, lbIconColor, cyan, purple } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import cvData from './json/cv.json';
import msgData from './json/msg.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'CV',
    url: '/cv',
    icon: 'file-pdf',
    isInternal: true,
    badge: '',
    comp: () => <Diploma diplomaData={cvData} />,
  },
  {
    name: 'Contact',
    url: '/contact',
    icon: 'comments',
    isInternal: true,
    badge: '',
    comp: () => <Diploma diplomaData={msgData} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'info.html',
    url: '/info',
    icon: ['fab', 'html5'],
    color: darkOrange,
    mdFileName: 'info',
  },
  {
    name: 'smartdevices.ino',
    url: '/smart_devices',
    icon: 'microchip',
    color: cyan,
    mdFileName: 'smart_devices',
  },
  {
    name: '.comm',
    url: '/communication',
    icon: 'satellite-dish',
    color: lbIconColor,
    mdFileName: 'communication',
  },
  {
    name: 'middleware.js',
    url: '/middleware_service',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'middleware_service',
  },
  {
    name: 'data.py',
    url: '/analysis',
    icon: ['fab', 'python'],
    color: green,
    mdFileName: 'analysis',
  },
  {
    name: 'hackathon.js',
    url: '/hackathon',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'hackathon',
  },
  {
    name: '.innovation',
    url: '/innovation',
    icon: 'lightbulb',
    color: purple,
    mdFileName: 'innovation_humanity',
  },{
    name: 'projects.io',
    url: '/projects',
    icon: 'code-branch',
    color: midBlue,
    mdFileName: 'projects_portfolio',
  },
  {
    name: 'cv.pdf',
    url: '/cv',
    icon: 'file-pdf',
    color: red,
    mdFileName: 'cv',
  },
  {
    name: 'contact.md',
    url: '/contact',
    icon: ['fab', 'markdown'],
    color: lbIconColor,
    mdFileName: 'contact',
  }
];
