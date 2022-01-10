<h3 style="color: #ffca28">Middleware & Service</h3>

SUPERVIZOR: THIERRY MONTEIL

<p style="text-indent: 2%; text-align: justify;">
    There are more and more sensors and connected objects everyday, sharing a lot of information over the internet. In this course, we will study how different devices communicate through the web, and how they can operate even though they are different.
</p>

<details>
    <summary style="color: #ffca28">Description</summary>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        The Middleware & Service course or module gathers three classes that study different technologies used today in IoT for different purposes. First, we had a class about Service Oriented Architecture, the main standard used today to develop Web Services, that are a prominent part of the web today. Then, we studied the middleware platform OM2M, which goal is to ensure interoperability between all types of sensors and applications, a crucial problematic of IoT. Finally, we tackled cloud computing techniques like virtualization in the last class.
    </p>
    <table style="border-collapse: collapse; border: 1px #ffca28 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #ffca28 solid; background-color: #ffca28; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #ffca28 solid;">Class name</th>
       <th style="border: 1px #ffca28 solid;">Context & Mission</th>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid; font-weight: bold;">Service Oriented Architecture</td>
       <td style="border: 1px #ffca28 solid;">Lectures, laboratories and a big project about the concepts of web services and Service Oriented Architecure (SOA). This class oversees a lot of technologies like SOAP, BPEL or REST.</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid; font-weight: bold;">Middleware for IoT</td>
       <td style="border: 1px #ffca28 solid;">Lectures and laboratories about middleware options for IoT sensors and applications, with a focus on the OM2M platform, based on the OneM2M standard and developed here in Toulouse. During the labs, we had the chance to work with real sensors and see the power of OM2M with real-life applications.</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid; font-weight: bold;">Cloud & autonomic management</td>
       <td style="border: 1px #ffca28 solid;">This class allows us to discover the main concepts of cloud based computing, mainly talking about classic techniques such as virtualization or fog computing. Lectures followed by laboratories to practice the concepts.</td>
    </tr>
    </table>
    <br>
    <details style="text-indent: 10%;">
        <summary style="color: #ffca28">Service Oriented Architecture & OM2M project</summary>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The main project of this module was the Service Oriented Architecture (SOA) project. It had a really interesting premise, because it aimed to bring together the skills learned in both the SOA and OM2M classes into one big project.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The objective for the project was to create a simulation of smart room management for INSA buildings. With IoT and 5G coming along, buildings start to include sensors and actuators that control many of the appliances present in the rooms. What we had to do was think of sensors and actuators that would be relevent in a classroom, and then create scenarios where we would pilot these devices.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The idea was to create Web services that would perform some key actions on our sensors or actuators. We chose to implement windows and lamps actuators, along with gas, light and temperature sensors. For each device, we associated a service, which would do key operations: get the device state or value, and act on it in the case of actuators.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The different Web services were controlled by a main entity, called the Controller. It was in charge of implementing the scenarios, meaning that it would check the value of a certain sensor by calling its service and then would activate a light or window in response.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Unfortunately, we could not actually use real-life sensors or actuators. This is where OM2M comes in, because we used it to simulate sensors, by creating Applicartion Entities and manually populating them with Content Instances.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            A web user interface was also developped to monitor and act directly on the devices of the system. It is a way for the administrator of the building to watch if any part is malfunctioning, or if some threshold values (for example max temperature at which we open the windows) need to be changed. In the context of the project, we could also directly put the value of a certain sensor or actuator, by sending a direct request to OM2M. It is by using this that we could verify that the scenarios were indeed working and that changing the value of a sensor above a fixed threshold triggered an actuator.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            It is important to note that this project was linked to the Software Engineering class, present in the data analysis module. Indeed, we did this project following the Agile method, with three sprints of three weeks followed by a team of three students. It is a bit of an extreme case of Agile method practise, but we still were able to use powerful management tools thanks to it. You can find detailed explanation of this part in the descriptive part of the data analysis module by clicking on this link.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #ffca28">Technical challenges</summary>
     <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Middleware for IoT</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The middleware class had its main technical challenges during the laboratories that preceded the SOA project. These labs were design to have us practice with the OM2M platform on real-life examples, and even with real devices. The main difficulty was understanding the nomenclature and the specificities of the OM2M standard. There is not a lot of documentation online yet, as the standard is pretty recent, so it was complicated to fully understand how OM2M functionned and what it could do.Thanks to the explanations of our lab tutors and a lot of exchange between peers, I was able to understand the platform well and use it accordingly.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
           There were four labs, but the main difficulty appeared in the third and fourth labs. In them, we were tasked to input real sensors and smart lights, a Philips Hue connected bulb and a Fibraro light sensor in our case. As you can see on the preceding schematic, our task was to use OM2M as the middleware which would get light intensity data and act on the Philips Hue accordingly. We also used the node-red tool, a really useful graphic API software which also proved useful in the Smart Devices module. 
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Service Oriented Architecture</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The technical challenges of SOA were mainly present in the project, but it mostly came from the many different technologies that the class had us manipulate even before the project started, with a lot of tutorials. The main idea was to be able to create and deploy Web services, but there exists many different frameworks to do that:
        </p>
        <ul style="text-align: justify;">
            <li>SOAP: it is probably the techonolgy we looked at the most during the lectures and the tutorials. The technical difficulty with it was mainly that it is a pretty ageing technology, so we were faced with a lot of compatibility problems to run it smoothly. We were using a downgraded version of Eclipse and still had some issues to run servers correctly.</li>
            <br>
            <li>BPEL: we did not view a lot of BPEL during the tutorials, but it is still worth mentionning. It is a graphical tool, which allows to design and create Web services and more importantly to orchestrate the communication between different Web services. It seemed to be pretty powerful, however there was a steep learning curve and it did not feel that it made the process easier than managing services in a more classical textual way.</li>
            <br>
            <li>REST: probably the most popular standard to build APIs and Web services, we used REST in the context of Java, using the Jersey library. It is a pretty familiar library, however the main technical challenges here came from the fact that it is pretty uncommon to use Java and Jersey for big projects involving many services. It is hard to juggle between java projects and work collaboratively with a team.</li>
            <br>
            <li>Microservices with Spring Boot: this is a framework that was covered during the last two tutorials, at about the same time that we started the SOA project. It helps with creating simple Web services and deploy them very easily. However, I chose not to focus on this technology and use the more widely used REST instead. Here, the technicak challenge might have been not using Spring Boot and have more difficulty with rest. I still managed to reach my objectives with REST, fortunately.</li>
        </ul>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Cloud & Autonomic management</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Cloud and Autonomic management class consisted of only two lectures, directly followed by five laboratories that were really important. We studied mainly two elements: hosted virtual machines and containers using VirtualBox, and bare virtual machines using the Openstack platform.
        </p>
        <ul style="text-align: justify;">
            <li>VirtualBox & Docker: The first technology we experimented was VirtualBox. I already used it to create Linux virtual machines on my Windows laptop, to use Linux-only applications. Using it for this lab was a pretty similar process, but it is what we did with it that was different and challenging. We started two VMs and started two containers on them using Docker. We tested the main operations on containers, mainly the creation of images and takins snapshots. We saw that containers are really useful to deploy large scale applications that run over multiple servers who all need the same OS and same configuration.</li>
            <br>
            <li>Openstack: Next, we used a different technology to study its different characteristics: Openstack. It is a bare hosted virtual machine service, meaning that it provides VMs that are running directly on the server's hardware, and you can administrate them through a web interface. Openstack also allows for Network virtualization, and it was the biggest challenge for me. As you can see on the adjacent image, we created complex network topologies with wirtual sub local networks, routers and virtual machines. It was really interesting to change routes between virtual networks and see connectivity between machines that were not on a physical network but on a virtual one. We had to use this method to set up a calculator application, with the front-end of the app accessible from the outside world on a public network, and then all the back-end services hidden in an other local network, linked with a virtual gateway.</li>
        </ul>
    </details>
</details>
<br>
<details>
    <summary style="color: #ffca28">Analysis</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Self-evaluation with the skills matrix</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The middleware & service module was the most oriented towards skills of IR students. Consequently, the expected level for all skills in the maxtrix is the maximum, mastery level.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Service Oriented Architecture class was the biggest of them all, with a lot of tutorials and then a big, time-consuming project. I already had experience with Web services in REST in my summer internship, and I am very fond of Java, which I practice at INSA and for personal projects. These two elements made it possible for me to understand and master all the technical skills of the class. The concepts presentend that I did not know about were clear and well-documented online, so I feel like I will retain these skills and be able to reuse them easily in my career.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Middleware for Internet of Things class was different, in that I did not know anything about it specifically prior to the class. However, I still knew of HTTP REST requests, which was a huge help since OM2M offers to use REST as its main API. I feel like during the labs, and especially during the project where I was the one in charge of OM2M, I really learned how to use and master the platform.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            As for the Cloud & Autonomic computing class, it was pretty disconnected from the other two, while still having a lot of technical similarities. Most of the teaching was learning of theoretical concepts that I partially knew from computer culture, and I feel like the five lab sessions were enough for me to take in the main skills of the class.
        </p>
        <br>
        <table style="border-collapse: collapse; border: 1px #ffca28 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #ffca28 solid; background-color: #ffca28; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #ffca28 solid;">Skill</th>
       <th style="border: 1px #ffca28 solid;">Required level</th>
       <th style="border: 1px #ffca28 solid;">Self-evaluation</th>
       <th style="border: 1px #ffca28 solid;">Learning mode</th>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Service Oriented Architecture</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Know how to define a Service Oriented Architecture</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT + PP</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy an SOA with web services</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT + PP</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy and configure an SOA using SOAP</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy and configure an SOA using REST</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT + PP</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Integrate a process manager in an SOA</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr style="border: 1px #ffca28 solid; background-color: #ffca28;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Middleware for the Internet of Things</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Know how to situate the main standards of IoT</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy an architecture compliant to an IoT standard and implement a sensor network</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy and configure an IoT architecture using OM2M</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Interact with the different resources of the architecture using REST services</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT + PP</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Integrate new technology into the deployed architecture</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr style="border: 1px #ffca28 solid; background-color: #ffca28;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Adaptability: Cloud and Autonomic Computing</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Understand the concept of cloud computing</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Use a IaaS-type cloud service</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy and and adapt a cloud-based platform for IoT</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">4</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    </table>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">General review and feedback on the course</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            This module was pretty interesting because it contained two classes, SOA and OM2M, that work really well together and really benefit from sharing a common project. Similarly to the Smart Devices module, you can really how the skills learned in one class matter and are directly use in the other. Sadly, the Cloud management class, which could have also benefitted from being linked to the other two, took place months after the others, and felt pretty disconnected from everything else. I assume this is because of timetable issues trying to fit all the classes, or mayne keeing the cloud class next to communication classes for the Network virtualization part, but I think I would have really enjoyed an even bigger project regrouping the three classes.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I really liked how the three classes were pretty different in overall content, but still echoed each other a lot, relying on the same core concepts, mainly Web services and server constraints and problematics. It did not feel like repetition, and really made me get comfortable with the theoretical concepts and technologies we used.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            On a personal level, maybe because of my background in IR and with my internship, I really liked the big project we had for SOA. It was heavily criticized by some of my peers, but to me personally it was the kind of large scale project that really allows to see the power of a technology and why it is used so widely in the industry. It is often hard to really illustrate technologies and framework in a limited lab environment, but I feel like it succeeded here.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I think that overall, merging the OM2M labs with the SOA project would have been really cool, as a way to implement real sensors and actuators into our project, and not just some simulated ones. It would also add more tutored hours for the project, as it had to be widely done on our free time and some maybe did not get prepared enough for the specific technical targets of the project.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            This was also the opportunity for me to work on a project with a lot of autonomy for team and time management. I was really invested in the project, and was happy to put in hours to work on it and see the results at the end.
        </P>
        <br>
    </details>
</details>

<p>-Middleware & Service courses-</p>