<h3 style="color: #98c379">Analysis & Data Processing</h3>

SUPERVIZOR: NAWAL GUERMOUCHE

<p style="text-indent: 2%; text-align: justify;">
    With more and more connected objects and smart systems come a hug amount of data. Working on exploiting data and bringing value to it is a key problematic to this course. In it, we will study big data and plotting methods, as well as semantic web for connected objects, using web technologies to enrich data coming from sensors.
</p>

<details>
    <summary style="color: #98c379">Description</summary>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        The Analysis & Data processing module gathers three classes. Two of them study different fields using data in an innovative way, with big data analysis and semantic web for IoT. The third one does not directly apply to data, but it is a more general course about Software Engineering practice.
    </p>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        You can find a quick summary of the courses content in the adjacent table. The next subsection will focus on one experiences in more detail: the data analysis project made using the R language.
    </p>
    <table style="border-collapse: collapse; border: 1px #98c379 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #98c379 solid; background-color: #98c379; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #98c379 solid;">Class name</th>
       <th style="border: 1px #98c379 solid;">Context & Mission</th>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid; font-weight: bold;">Semantic data</td>
       <td style="border: 1px #98c379 solid;">Short class composed of one lecture followed by two laboratories. It quickly goes over the main concepts of semantic web and especially the notion of ontology, then we get to build our own ontology and apply it to an IoT-based example.</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid; font-weight: bold;">Big data</td>
       <td style="border: 1px #98c379 solid;">Lectures, tutorials and a project about big data, data analysis and how to plot it. This class does not go into too much technical details about big data, but rather focuses on good practice and general advice on how to approach big data.</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid; font-weight: bold;">Software Engineering</td>
       <td style="border: 1px #98c379 solid;">This class consists of only one lecture, then a project. In the lecture, we go over the main development phases and project management method in software engineering. This class is then linked to the Service Oriented Architecture Project, as we used the Agile method in it, following the concepts learned in this class.</td>
    </tr>
    </table>
    <br>
    <details style="text-indent: 10%;">
        <summary style="color: #98c379">Data processing and clustering project</summary>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The main project of this module was the Data processing and clustering project. 
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #98c379">Technical challenges</summary>
     <br>
    <details style="text-indent: 2%;">
        <summary style="color: #98c379">Semantic data</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Having followed the Semantic Web class last year in 4IR-I, I was already familiar with most of the concepts overseen during this class. The content of the lecture and the first lab, going over the definition of an Ontology, a Knowledge-base and some conventions like RDFS, were elements I already knew and used. However, it still served as a resfresher, and prepared me for the second lab, which focused on how to semantic web methods in IoT.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
           The context of the lab was simple: taking as an input sensor data from a smart city in Denmark, we were supposed to "enrich" the raw data using an ontology we created. That way, we could add meaning to the data, allowing to reason and exploit it more easily.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
           To do so, I had to create an MVC based architecture in Java that would parse the CSV data and transform it to an exploitable knowledge-base. It mostly required skills in Java programming, which I had acquired in my previous years and from personal projects. Overall, this and the knowledge about Semantic web I acquired last year and this year helped me to succeed for this lab.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #98c379">Big data</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            While the Big Data lectures focused more on general data analysis concepts and good practice, the tutorials were mostly focused on learning the R language and its plotting tool: ggplot2. However, it was important to know about what is relevent to plot and what is the correct chart to show it before going into how to implement it.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            When wanting to exploit a dataset to plot data using R, there are two main difficulties.
        </p>
        <ul style="text-align: justify;">
            <li>First, you need to transform the data from its original form in the dataset, to the way you want it in order to build your plot. It may involve sorting, grouping values by year, computing average values. These are standard operations I was used to use in other languages, notably in Python. However, the particularity of R (and the python package Pandas for example) is that it does not rely on classic iterative loops.
            There are no for or while loop in R. Fortunately, there are mapping functions, and especially the method ddply, which helps us do what we ususally do using for loops. It still was challenging to have to think of another way to accomplish a task you have done many times.</li>
            <br>
            <li>Second, you need to plot the data, choosing the right type of chart with correct parameters. It is key to have a chart that is readable, clear, and does not imply a meaning that differs from the dataset. For example, choosing an incorrect scale or ignoring values can allow to reach conclusions from a chart that are not true if you look to the dataset in detail. Here, it is important to remember the theoretical concepts of plotting, and also use some common sense to know what choice to make and how to make the best of the data you have. Learning this through the tutorials helped me a lot movinf forward with the project.</li>
        </ul>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            In the end, this class involved theoretical skills learned during the lecture, but also technical skills gaine from the tutorials and some self-teaching in order to master the R language. Basic knowledge of the Pandas python library was definitely helpful to me, especially when using data frames and iteration with ddply.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #98c379">Software engineering</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The aim of this class was to give us an overview of the phases in software development, along with the main project management methods. Learning it through the lecture was one thing, but the real task was to apply it for the different projects we would have during the year. The main method we were tasked to apply is the Agile method. It is the most popular management method in software development and is widely used today. Personally, I used it in 4th Year at INSA for my research project and in my 4th Year summer internship, in a startup of 17 employees. Using the Agile method was something I was familiar with, but during this class I used tools I had never used before, especially Icescrum.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        We used this tool as part of the Service Oriented Architecture project (in a group of three students). It is really complete and full of options for task annotation and sprint planning. The main challenge was taking the time to discover all the features of the tool and how to use them properly. In the end, we managed to make the most of it and the planning for the SOA project was respected. It is also important to note that we also used the Agile method for our Innovative Project during all semester, using Trello to manage tickets and tasks. However, this was not taken into account into this course.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #98c379">Analysis</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #98c379">Self-evaluation with the skills matrix</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            This module had very separate classes involving different skillsets. It was very oriented towards skills I already acquired in my fourth year in IR-I, so it was a way for me to confirm and reinforce some skills, while acquiring new ones.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            For the Processing Semantic Data skillset, most of the requirements were already met in last year's class or with the general IR formation. The main new thing that I appreciated today was to actually use Semantic Web to enrich real-life sensor data, something that I did not have the chance to do last year.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            For the Data Processing and Analysis: Big Data class, I really invested myself in learning the R language as a new tool for data analysis. With the experience I had with the Pandas Python library, it was a pretty easy process to learn the specific techniques of dataframe manipulation. However, I do not feel that I had enough time to master completely the possibilities regarding datasets and how to eploit them, while still getting to an acceptable level.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            For Software Engineering, I already knew most of the methods introduced and had a lot of experience with the Agile method. My INSA training and professional experience helped reach all the requirements.
        </p>
        <br>
        <table style="border-collapse: collapse; border: 1px #98c379 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #98c379 solid; background-color: #98c379; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #98c379 solid;">Skill</th>
       <th style="border: 1px #98c379 solid;">Required level</th>
       <th style="border: 1px #98c379 solid;">Self-evaluation</th>
       <th style="border: 1px #98c379 solid;">Learning mode</th>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Processing Semantic Data</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Design and understand a model for an application</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Know how to infer new knowlegde from a knowledge base</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Be able to enrich data with semantic meta-data</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT</td>
    </tr>
    <tr style="border: 1px #98c379 solid; background-color: #98c379;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Data Processing and Analysis: Big Data</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Know how to explore and represent data sets</td>
       <td style="border: 1px #98c379 solid;">3</td>
       <td style="border: 1px #98c379 solid;">3</td>
       <td style="border: 1px #98c379 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Master Rk</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT + ST</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Master complexity associated to statistical data processing and know the techniques to be used to minimise them</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT</td>
    </tr>
    <tr style="border: 1px #98c379 solid; background-color: #98c379;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Software Engineering</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Define the different phases in software development</td>
       <td style="border: 1px #98c379 solid;">3</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT + PP</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">know the different project management methods</td>
       <td style="border: 1px #98c379 solid;">3</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #98c379 solid;">Apply one of these methods to a project</td>
       <td style="border: 1px #98c379 solid;">3</td>
       <td style="border: 1px #98c379 solid;">4</td>
       <td style="border: 1px #98c379 solid;">IT + PP</td>
    </tr>
    </table>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #98c379">General review and feedback on the course</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            This course was constituted of three classes that did not have much in common, especially the Software Engineering class which was linked to a project outside of this module, Service Oriented Architecture. There were not many links between the classes, so I find it best to analyse each class separately.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The semantic web for IoT class was pretty short and did not go too deep into the technical concepts. It is to be expected in ISS, but maybe IR-I students could have been dispensed at least for the lecture and first lab, as it was done for AE students in the Energy for IoT class. Having seen most of the material last year, I wish we would have gone further with maybe more hours put into the class, or its integration in one of the projects (like SOA for example). However, despite the duration of the class, the difficulty of the second lab seemed really too much for non IR-I students, and I found myself spending the majority of my time helping others who were having a hard time with Java programming. Maybe it would be a good idea to split the laboratory and give more guidance in it, as there were only a few lines of instructions. Overall, I still enjoyed the class because of my affinity to the subject, but I wish I could have done more in it.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The big data class felt refreshing, trying to teach the concepts and practices in a fun and non-formal way. After the lectures, the tutorials were well-guided and I appreciated that we were given space to look for solutions ourselves and take our time. The only grip I have would be the project, where we did not have any time associated with it in our schedule, so we had to work on it entirely on our free time. Fortunately, the project was pretty small, but we still had to rush it a little bit during the christmas vacation, which took away the possible maximum implication we could hacve gotten. Adding maybe 2 hours at the start for brainstorming and conception would have been a nice addition.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            As for the Software Engineering class, its placement in this module rather than the SOA module it is associated to is strange but purely administrative and does not bother anything. However, as its objective was to validate our application of the Agile method, I did not like that we were forced to apply it to the Service Oriented Architecture project. Indeed, the project was done in group of two or three students, which, even though is enough to use the method, is not ideal. In my case, I used the method in a group over a four month project for our main ISS project, and I would have very much preferred to validate this class through it.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            In the end, this module reinforced my knowledge in Semantic Web technologies while building new skills in Big data analysis. While perfectible, the classes were interesting and easy to follow, at least for me as an IR student.
        </P>
        <br>
    </details>
</details>

<p>-Analysis & Data processing courses-</p>