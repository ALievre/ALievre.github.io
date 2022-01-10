<h3 style="color: #9599a0">Communication</h3>

SUPERVIZOR: DANIELA DRAGOMIRESCU

<p style="text-indent: 2%; text-align: justify;">
    Connected objects rely on communication protocols. Standards like 5G are what dictate innovation, so it is important for us to be aware of the main technologies used today. In this course, we will study protocols (LoRa, Zigbee, Sigfox, ...) but also energy problematics or wireless radio methods and security.
</p>

<details>
    <summary style="color: #9599a0">Description</summary>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        The communication course or module officially gathers five classes, but it actually regrouped about eight. It is a very dense module with a lot of different subjects approached, having the domain of Internet of Things in common. The main problematics of IoT, like battery usage, wireless communication, or security are what dictates the syllabus of this module. A complete picture of communication for IoT is depicted, studying present of future technologies.
        You can find a quick summary of the courses content in the adjacent table. The next subsection will focus on one of the most relevent experiences in more detail: the Software Defined Radio (SDR) hands-on we did during the labs.
    </p>
    <table style="border-collapse: collapse; border: 1px #9599a0 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #9599a0 solid; background-color: #9599a0; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #9599a0 solid;">Class name</th>
       <th style="border: 1px #9599a0 solid;">Context & Mission</th>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid; font-weight: bold;">Protocols for connected objects</td>
       <td style="border: 1px #9599a0 solid;">General lectures about key protocols for IoT, based on student presentations and discussion around the main characteristics of said protocols. Deep study of the bottom two layers, especially the MAC layer for IoT. Coupled with a class about the evolution from 2G to 6G, and key future problematics IoT can create or solve.</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid; font-weight: bold;">Digital wireless communication for connected objects</td>
       <td style="border: 1px #9599a0 solid;">Lectures about modulation techniques and other characteristics of wireless protocols.</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid; font-weight: bold;">Energy for connected objects</td>
       <td style="border: 1px #9599a0 solid;">Two different classes going first about how to store energy for IoT or embedded devices, and then how to harvest it from different sources.</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid; font-weight: bold;">Security for network of connected objects</td>
       <td style="border: 1px #9599a0 solid;">General presentations about security on connected devices, but also functionning security for such devices. Special problematics linked to embedded devices are approched during the class.</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid; font-weight: bold;">Emerging networks</td>
       <td style="border: 1px #9599a0 solid;">Presentation of emergin networks technologies and standards, aiming to change the way networks are built in the future. Main focus on Software Defined Networks and routing techniques.</td>
    </tr>
    </table>
    <br>
    <details style="text-indent: 10%;">
        <summary style="color: #9599a0">Experimentation with Software Defined Radio</summary>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The main experience I retained from this module is also the first one we encountered. Before having any theoretical lectures about protocols, wireless modulation, or constraints for IoT, we jumped into this series of labs that focused on Softare Defined Radios (abbreviated SDR).
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The point of SDR is to replace the use of hardware components for frequency shift, demodulation, and other key operations to receive a FM signal. All these tasks are made by a single device, and all the decoding part of the signal is done through software.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            In the three labs, we first looked at the theory behind decoding a FM signal, and then used Gnuradio, a well-known tool for SDR, to exploit an incoming radio signal.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The idea was to take as input a real music radio signal (actually, it was not live radio signal but rather a previously recorded sample) and try to get the audio from the source.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            To do so, we implemented different treatment elements, like a frequency shifter, band-pass filters to deal with noise, or even frequency demodulators. Everything is done through software, by inputting the correct parameters and variables for pre-defined Gnuradio blocks that you just have to link together in the correct way to decode the signal.
            After multiple treatment steps, we were able to retrieve a clean audio signal that we could listen to. You can consult the entire technical report, with a first part about the mathematical theory between FM demodulation & decoding, and then the practical part and the detailed work on gnuradio. Just click on the link below to view the report.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #9599a0">Technical challenges</summary>
     <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            As two classes fom this module were purely informative lectures: Energy for IoT & Security in IoT, I decided to not include them in this technical part, as it was difficult for me to find good technical challenges to write about them.
        </p>
    <details style="text-indent: 2%;">
        <summary style="color: #9599a0">Protocols for connected objects</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            There were a lot of assignments and deliverables in the protocols for connected objects: we conducted a deep study of the MAC layer options for IoT, I presented a research presentation about the conflict between Donald Trump and Huawai over the Android Operating System, but I chose to retain an assignment that also made me reasearch security for IoT, as I would not be mentionning the problematic here otherwise, and it feels like a really important one to me.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
           As part of a group of three students, I had to conduct a deep study of the Zigbee protocol. The idea was that the whole class would present different protocols, notably Zigbee, BLE, Sigfox, Lora and NB-IoT, and then we would do a big comparison on these to try and sort them in different categories. 
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            This task was challenging for me, because I do not really have a huge affinity and ease with communication and networking. However, there are a lot of resources available online that help to understand the core concepts of the standard, but also some deeper constraints like energy consumption or security details.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Speaking of security, I was in charge of this subject for the presentation. I had to explain in a simple, understandable way, the complex concepts of cryptography or symmetric-based key authentification, but also some network security notions that I was less at-ease with. In the end, watching the presentation of other protocols helped me understand the one I was working on a bit more, as there are a lot of similarities that make the choices made by one standard easier to understand and identify.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #9599a0">Digital wireless communication for connected objects</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The assignment and technical difficulty of the Wireless communicaton class felt pretty similar to the previous one. After folling the six lectures on the topic, we had to conduct a quick study followed by a report on one of two protocols: Sigfox or Bluetooth Low Energy (BLE). I chose to work on Sigfox with my group. We mainly studied wireless communication problematics, such as modulation, range of emission or datarate.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            It was difficult to find some of the information we were looking for. For certain elements, the official Sigfox documentation was really clear and helped us understand clearly what the protocol was offering. However, when we had to find some key characteristics such as a precise value of the radio range in a real environment, we had to do a lot of research and ended up estimating it ourselves using modelisation laws.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #9599a0">Emerging networks</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Emerging networks class was the only class apart from SDR that proposed laboratories in this module. The theme of the class was mostly to present and explain how Software Defined Networks (SDN) worked and have us manipulate them. During the lab, the challenge was to actually use SDN technologies, notably Openflow switchs. It consisted in using a networking application that would dynamically and automatically write rules in switches routing tables depending on the topology of the network, its current state and the traffic going through nodes.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            There was also a real technical challenge during the last two lecture sessions, where we had to study a scientific paper about a protocol implementing SDN over the 6LoWPAN technology. It was really technical, going deep in the functioning and different functionalities of the protocol, but I feel that the work previously accomplished during the lectures and the labs helped me understand it well enough.
            We had to write a report about this article, however the deadline for this assignment is later than the one of this portfolio, so I am unable to add it to this page at the moment. It may be added after it is delivered depending on INSA politics on deliverables.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #9599a0">Analysis</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #9599a0">Self-evaluation with the skills matrix</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            As I expressed in the previous sections, the Communication module was really dense. It contained a lot of classes, with a huge amount of information and assignments. The skills in the matrix are separated into two sub-sections, and the first one of the two is heavily loaded, which represents well the amount that was presented and needed to be acquired in the few weeks that this module took place in.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            For the Protocols of communication classes, I feel like I reached the expected level, but did not have enough time to go over it and reach a comfortable level in all subjects presented. Having already had quite a lot of network classes in third and fourth year at INSA, I feel like my previous training prepared me quite well to the classes. I feel like I really understand the current state of IoT standards, the direction where they are going and how the domain is going to evolve in the upcoming years. I felt a little bit less at ease with purely techincal skills, wether they are energy constraints, or complex RF reception techniques. However, I think that almost all students except those who followed Network and Communication in fourth year were in the same situation than I was in, so a lot of peer exchance made it possible for everyone to understand the main concepts approached.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            As for the Security for IoT class, it focused on a subject that I really like and research on my own personal free-time, so I had no real difficulty understanding the main concepts. Also, I think that the class, with only 6 lectures staying at a relatively surface level, did not go as far as it was maybe intended, so it can be harder tu judge the skills acquired during the lectures. Overall, I think that the initial training, along with my previous knowledge, helped me reach the required level.
        </p>
        <br>
        <table style="border-collapse: collapse; border: 1px #9599a0 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #9599a0 solid; background-color: #9599a0; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #9599a0 solid;">Skill</th>
       <th style="border: 1px #9599a0 solid;">Required level</th>
       <th style="border: 1px #9599a0 solid;">Self-evaluation</th>
       <th style="border: 1px #9599a0 solid;">Learning mode</th>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Protocols & Communication</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Understand the major development phases for mobile communications and development of the associated technology</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Understand the impact of new mobile technology</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Be able to analyse and evaluate optimal wireless network technologies</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Be able to suggest optimal technological solutions for IoT networks</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Understand and master optimisation of communication protocols for IoT with respect to energy limitations</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Understand and master optimisation of communication protocols with respect to security concerns</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Know the main processing techniques used for digital communication and know how to explain the basic structure of digital RF transmitter-receiver</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Mastering the architecture of an energy management system, simple storage, energy recovery, know how to size the storage element according to the specifications</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr style="border: 1px #9599a0 solid; background-color: #9599a0;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Security for IoT Networks</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Understand the fundamentals of security</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT + ST</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Be able to identify security weaknesses in an IoT architecture</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Be able to assess the impact of exploiting a security vulnerability in an IoT architecture</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">3</td>
       <td style="border: 1px #9599a0 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #9599a0 solid;">Be able to propose adequate security counter-measures</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">4</td>
       <td style="border: 1px #9599a0 solid;">IT + ST</td>
    </tr>
    </table>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #9599a0">General review and feedback on the course</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Overall, this course was the last one of the year for me and everyone else. It came at the very end of the semester, where we were already rushed by projects and deliverables deadlines. So, it was not the best environment to start a new class, and I feel like maybe it missed the mark on some points for me. The chosen way of teaching was through student presentations. This was really interesting because it is pretty rare to use the tecnique that much in such a technical module. As we've discussed in the data analysis of ISS, there were 8 deliverables on the form of reports and presentations. This was a lot, and at this late time period, I believe too much for me and the other students to fully invest in them.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Indeed, I had the feeling that I had to rush most assignments, and maybe not spend as much time as needed to fully understand the concepts and technologies that I was studying.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Along with that, the Energy and Security classes felt disconnected from the rest, being just isolated lectures that did not resonate with everything else. I know the schedule of ISS is pretty full already, but I feel like adding tutorials or laboratories, at least for the security class, would be a huge improvement for the class.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Still, what I really enjoyed about this module is that it approached IoT through a variety of angles, both technical and non-techincals, to give us a clear and pretty exhaustive picture of the state of Internet of Thing today. Prior to this module, I did not have a clear understanding and knowledge of IoT, its possibilites and limitations. Even if we did not go too far in technical details for some domains, I still retained a lot of information that will be critical to stay on par with the evolution of the industry in the upcoming years.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I did not choose ISS because of its focus on IoT, to be frank I was pretty indifferent about the domain before going into this module. However, we have seen a lot of possibilities that the domain seems to offer for the future, and it is pretty fascinating to explore all the possible outcomes.
        </P>
        <br>
    </details>
</details>

<p>-Communication courses-</p>