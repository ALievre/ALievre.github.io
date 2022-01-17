<h3 style="color: #ffca28">Middleware & Service</h3>

SUPERVIZOR: THIERRY MONTEIL

<p style="text-indent: 2%; text-align: justify;">
    With the number of sensors and connected objects sharing data over the internet, it is important to study how they communicate and how they can work together even though they are different. That is what we will see in this module.
</p>

<details>
    <summary style="color: #ffca28">Description</summary>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        This module gathers three classes which study different technologies used in IoT. The first one, Middleware for IoT, presented the OM2M platform. This platform is used to ensure interoperability between all types of sensors and applications, a prominent problematic of IoT. Then, we had a Cloud computing class in which we learned to use VirtualBox, Docker and OpenStack to host virtual machines. Finally, the Service Oriented Architecture introduced the main standard used today to develop Web Services. I summarized these classes in the tab below:
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
            The main project of this module was the Service Oriented Architecture (SOA) project. It had an interesting premise, because it aimed to bring together the skills learned in both the SOA and OM2M classes into one big project. Unfortunately, we did not have time to use OM2M to simulate the sensors, so we directly simulated them in our Java application.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The goal of this project was to simulate a smart room management for the campus building. We had to think of sensors and actuators that would be relevant in the classrooms to detect danger or control the equipment of the rooms. Then, we had to think about scenarios to use these devices. To implement those scenarios, we created Web Services to perform them. 
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            With my team partner, we chose to implement window, blinds, door and light actuators and temperature, luminosity, ToF, noise, gas and presence sensors. The different Web services were controlled by a global service. It oversaw implementing the scenarios, meaning that it would check the value of a certain sensor by calling its service and then would activate a light or window in response.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            We also developed a dashboard using Node-RED to display the data and controls the devices. It allows the user to monitor the room and to modify the threshold if needed. It is by using this that we could verify that the scenarios were indeed working and that changing the value of a sensor above a fixed threshold triggered an actuator.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            This project was linked to the Software Engineering class of the Analysis & Data Processing module. We used the Agile method to plan the project, with three sprints of three weeks followed by a team of two students.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #ffca28">Technical challenges</summary>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Service Oriented Architecture</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The main challenge I had for this class was to implement the Continuous Integration in our project. I had a hard time to set up the software needed to use it. By mutual agreement in the group, we decided to change the tool from Jenkins to GitHub Actions and it was a good decision.
        </p>
    </details>
     <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Middleware for IoT</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The main challenge of this class was to understand the nomenclature of OM2M because there is not a lot of documentation online. Thankfully, the explanation given by the professors allowed me to use the platform.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
           Another challenge was when I had to learn how to use Node-RED. I took me some time to fully grasp how to configure every node but when I did, I realize how useful this graphic API software is.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Cloud & Autonomic management</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Cloud and Autonomic Management class consisted of studying mainly two elements: hosted virtual machines and containers using VirtualBox and Docker, and bare virtual machines using the Open stack platform.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Even if I already used VirtualBox to create Linux virtual machines on my Windows laptop, it was very different using them during the labs. But the main challenge for me was to understand the differences between hosted/bare virtual machines and containers. Moreover, OpenStack was a bit difficult at first for me to use. The creation of more complex network topologies was not easy to comprehend at first. It was interesting to change routes between virtual networks and see connectivity between machines that were not on a physical network but on a virtual one. We had to use this method to set up a calculator application, with the front-end of the app accessible from the outside world on a public network, and then all the back-end services hidden in another local network, linked with a virtual gateway.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #ffca28">Analysis</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">Self-evaluation with the skills matrix</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Since this module brought really new skills to me, it was really interesting to study. The different classes required a lot of computer science skills.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The SOA class was the biggest one with a vast project. I never use Web services before but the project really helped me acquire the skills expected. My knowledge of Java also helped to implement the services. The concepts presented that I did not know about were clear and well-documented online, so I feel like I will retain these skills and be able to reuse them easily in my career.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Middleware for IoT class was like the SOA class as I did not know anything about what we learned in this course before. I feel that the labs and the Hackathon really helped me to learn how to use the platform. 
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Cloud & Autonomic Management class had the more theoretical concepts that I also did not know before. However, I feel like the lab sessions were enough for me to understand the main skills expected. Of course, I do not think that my skills are the same as those of a student coming from Computer Science but thankfully, that is not what was expected of me.
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
       <td style="border: 1px #ffca28 solid;">Know how to situate the main standards for the IoT</td>
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
       <td style="border: 1px #ffca28 solid;">Integrate a new technology into the deployed architecture</td>
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
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Use a IaaS-type cloud service</td>
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #ffca28 solid;">Deploy and and adapt a cloud-based platform for IoT</td>
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">3</td>
       <td style="border: 1px #ffca28 solid;">IT</td>
    </tr>
    </table>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #ffca28">General review and feedback on the course</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I think that this module was really interesting. The two classes, SOA and Middleware, were linked together. Even though we could not do it, I saw how connected the two were. We can compare this module to the Smart Devices module. You can truly see how the skills learned in one class were directly used in the other. I could also see that with the third class, Cloud, but we did not really link it with the other two in a project. I think it would have been fun to regroup the three classes in a big project.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I appreciated the relation between the classes because they were pretty different in content but still echoed each other. They all rely on the same core concepts as Web services or server constraints for example. The classes did not overlap, so it did not feel like they repeated each other. It made me comfortable with all the concepts of these classes.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I loved the SOA project. As the one we did for the Smart Devices module, I think it was the kind of project I expected to do coming in ISS. It really showed us the link between all the different kinds of technologies and why they are used in the industry. It is often hard to really illustrate technologies and framework in a limited lab environment, but I feel like it succeeded here.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I would really have loved for the Middleware labs and the SOA project to be merged, so we would have a real long-term project with real sensors and actuators. In this way, we would have more hours of tutorials and labs to really go deeper into the project. I would have loved that to be honest. Moreover, this would have more justified the use of the Agile method and Continuous Integration.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            However, this project gave me the opportunity to work with a lot of autonomy. I felt really invested in the project and was happy to put time and effort into it. Seeing the final result was an exciting moment.
        </P>
        <br>
    </details>
</details>

<p>-Middleware & Service courses-</p>