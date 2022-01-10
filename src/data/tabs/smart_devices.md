<h3 style="color: #56b6c2">Smart Devices</h3>

SUPERVIZOR: JÉRÉMIE GRISOLIA

<p style="text-indent: 2%; text-align: justify;">
    Smart devices based on sensors are everywhere in our daily life. In this course, we will follow the complete creation process of a smart gas sensor, from the nano-particle deposition to the signal acquisition on a microcontroller and the LoRa communication.
</p>

<details>
    <summary style="color: #56b6c2">Description</summary>
    <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
        The Smart Devices course or module gathers five classes that go over the different steps to produce a smart sensor, in our case a gas detector.
        First, we had theoretical classes about sensors in general and optical sensors, as an introduction or reminder to the concepts of real-life physical values measurement. Then, we tackled the actual sensor creation at the AIME lab, and all the post treatment of the measurement produced.
        You can find a quick summary of the courses content in the table below. The next subsection will focus on the most relevent experiences in more detail: the nano-particle deposition to create the sensor, and the MOSH mini-project.
    </p>
    <table style="border-collapse: collapse; border: 1px #56b6c2 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #56b6c2 solid; background-color: #56b6c2; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #56b6c2 solid;">Class name</th>
       <th style="border: 1px #56b6c2 solid;">Context & Mission</th>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid; font-weight: bold;">Introduction to sensors</td>
       <td style="border: 1px #56b6c2 solid;">Theoretical lectures and practical works about the physical concepts of different types of sensors and how to create a sensor datasheet. This would help us build the datasheet for our gas sensor.</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid; font-weight: bold;">KiCad and AIME nano-sensor</td>
       <td style="border: 1px #56b6c2 solid;">This class regroups two main experiences. First, the realization of the chemical process of our sensor, with the deposition of nano-particles on a silicium board that react with certain gases. Then, with the design of a custom PCB for our sensor, using KiCad.</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid; font-weight: bold;">Analog Electronics Labs</td>
       <td style="border: 1px #56b6c2 solid;">Practical works destined to help us design the analog circuit that would transform the output value of our sensor (in the form of a resistance variation) to a usable signal going from 1V to 5V.</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid; font-weight: bold;">Microcontroller & Open-source Hardware (MOSH)</td>
       <td style="border: 1px #56b6c2 solid;">Mini-project conducted in a group of three, consisting in using all the components we built previously: the gas sensor and the PCB with the signal treatment circuit. We then added a communication module with a LoRa chip and an Arduino Uno to turn our sensor into a smart sensor, sending data to the cloud.</td>
    </tr>
    </table>
    <br>
    <details style="text-indent: 10%;">
        <summary style="color: #56b6c2">Deposition of nano-particles to create a gas sensor</summary>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The first experience we had in the Smart Devices module was the internship in the AIME cleanroom. It lasted for a week, consisting in different half-day modules where we could oversee and manipulate the different processes involved in the manufacturing of a nano-particle sensor. The end goal was to make a gas sensor from Tungsten nano-particles, that expresses a variation of resistance when detecting specific gases (in our case Ethanol & Ammonia).
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            The different steps we followed to make the sensor were the following: TECHNICAL
            Exposing the sensor circuit by photolithography: without going into too much detail about the process of photolithography, we used it to engrave based on a mask on a silicium wafer. As you can see on the adjacent picture, it is a pretty complex mask containing a heating resistance, a temperature sensor, and two interdigitated combs where we will make the deposition.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Making and deposing the nano-particles: the next step was to create the Tungstene nano-particles and deposit them on the engraved wafer. To do so, we followed an extremely precise chemical process, using pipettes going to a 0.05 milliliter precision.
            Once we obtained the particles, we deposited them using a process called Dielectrophoresis. What we did was we put a drop of our very diluted solution containing the nano-particles on the entire sensor circuit, and then put an electrical field only on the intergititated combs part. This resulsted in the particles only "sticking" to the desired part when we rinced the solution in water.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Caraterising the sensor for the datasheet: now that we had our sensor, we tried to caracterise it by generating some I/V curves, so that all the groups could use their data to create a datasheet.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Once the AIME internship was finished for all the groups, we gathered the data from all the sensors created by the students to obtain a good database for the datasheet. Using the concepts we learned during the "Introduction to sensors" class, we were able to redact a datasheet that tries to be as close as possible to the ones you can find in the industry, made by professional mnufacturers.
            You can find the datasheet made by my group in the link below:
        </p>
    </details>
    <br>
    <details style="text-indent: 10%;">
        <summary style="color: #56b6c2">Microcontroller Mini-Project</summary>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Once we successfully build our gas sensor, we could start the main part of this course. We had a lot of freedom, as we could choose between following directed labs, or starting a mini-project directly related to our gas sensor. With my computer science background, I hesitated going for this electronics-heavy project, but I teamed up with a friend from AE and TBS and decided to do it.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            What we did was we built a processing circuit for our sensor, mainly using an Arduino Uno. The output of our sensor is a variation of resistance, so we used the KiCad software to design a PCB to convert it to a tension variation. We implemented the analog circuit we created during the Analog Electronics labs.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            Then, we created an interrupt-based system to have the Arduino send a LoRa packet only when the sensor value exceeds a certain threshold. This was done by using a Schmitt trigger to send a 0 or a 1 depending on if we are below or above the threshold. We would then use this signal as input into the digital port 2 or 3 of the Arduino Uno we used, triggering an interrupt when we needed it.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            With all that done, we only needed to send the LoRa message and we would be good to go. To do so, we used a RN2483 LoRa chip, that we welded ourselves. Once it was ready to use, we tried to send data to The Things Network using the antenna on the roof of the GEI, and got successful results. We were then able to vizualise our data in the cloud on The Things Network.
            To improve the use of our data, we used the Node-red to help us create a dashboard where we could exploit the data and visualize it in an appealing way.
        </p>
        <p style="text-indent: 10%; margin-left: 10%; text-align: justify;">
            As a delierable for the project, we redacted a quick report in the form of a README file, follow the link below to consult it:
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #56b6c2">Technical challenges</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">Microcontroller and Open Source Hardware (MOSH)</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Because it involved many different skillsets, the MOSH mini-project had different challenges:
        </p>
        <ul style="text-align: justify;">
            <li>First off, we had to weld the RN2483 LoRa chip we wanted to use, and no one in the group had much experience in that aspect. It required some trial and error, as the tools at our disposal were not optimal for precision welding, but we got a hang of it eventually and managed to weld the chip.</li>
            <br>
            <li>We had to get used to using an Arduino and especially an Arduino Uno, as no one in the group had experience with it either. Fortunately for us, there is a lot of documentation online that goes over the main concepts of programming on Arduino, and we were even able to find examples of code for LoRa communication, which helped us accelerate the process a lot. We then had to connect the RN2483 to our Arduino, which even though it seems easy, took us a lot of time because we had some issues with connecting the wrong pins and it was really time consuming to realize that.</li>
            <br>
            <li>The project also involved some Electronics notion which we had not practised for a while, even though they are pretty basic. We implemented a non-inverser Schmitt Trigger using a LTC1050 Operational Amplifier. We needed to convert an analogical value ranging from 1V to 5V to a digital 0 or 1 if the analogical value exceeds a certain threshold. We chose a Schmitt Trigger over a simpler Comparator circuit because it works better with oscillation of the analog signal, and the gas sensor behave with a lot of oscillations.</li>
        </ul>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">Analog electronics labs</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The Analog electronics labs were here to help us design the analog signal treatment part to exploit the values coming from our gas sensor. As said previously, the sensor's output is a resistance variation, which can be expressed as a current variation by imposing V (the tension). However, this current is really small, at about 100 nA, and we cannot measure it directly. So, we had to create a signal processing circuit to move the signal in a tension 1.1V to 5V, which corresponds to the range of the ADC of the Arduino Uno.
            Designing the circuit was pretty challenging, involving signal processing notions and filters that we had not used in a long time. Fortunately, we used the tool LTSpice, an electronics circuits simulator, to help us iterate over prototypes and test our results.
            All the information about this class and the labs subjects can be found here.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">CAD, manufacturing and integration of nano-technology sensors</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Once we had followed the Analog Electronics labs, this class was here to help us design a shield for Arduino Uno, implementing the circuit we created before. Timing issues made so that we had to start this process before having the circuits designed, so part of it was handed out to us so we could begin.
            The main challenge here was to get used to the PCB editing software KiCad, which is a pretty complex and complete tool that takes a while to get used to. There are different steps in the process of designing a PCB: creating the footprints, linking the components, but the most challenging is the routing.
            Routing consists in placing every component you wish to have on your shield in a limited space without any wires crossing. It was a pretty big challenge to try and place everything in the best way possible to avoid wire crosses as much as possible. Fortunately, we had at our disposal components like "vias" that helped us cross sometimes in certain conditions.
            In the end, we submitted our KiCad PCB proposal to all the students, so that the best ones could be elected and printed. However, do to a timing error, it was not possible to print the PCBs this year.
        </p>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">Sensors introduction & Optical sensors</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I chose to group the technical challenges of the last two classes together, because they served a similar purpose. In the introduction to sensors class, we had some theoretical lectures about the general physics principles of sensors, along with some physics practicals that brought back notions that we had not used for three years. It also gave us critical notions on how to design a good datasheet, what metrics to use, what errors to avoid.
            The Optical sensors class was supposed to be similar, with a few theoretical lectures going deeper into the specificities of laser-based sensors. Unfortunately, it was cancelled after one session because of low student attendance.
        </p>
    </details>
</details>
<br>
<details>
    <summary style="color: #56b6c2">Analysis</summary>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">Self-evaluation with the skills matrix</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            The smart devices module was probably the course that required the widest array of technical skills from this year. Also, it was one of the least oriented towars software skills, relying more on electronics, signal processing and physics knowledge. Understandably, the requirements for my IR profile were a bit lower than in other classes. However, I still feel that I acquired the required skills and in some parts, maybe more.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            For the Introduction to sensors class, my physics and chemistry background from the first, more general years at INSA really helped me to alleviate any potential struggle. The initial formation was enough for me to follow the requirements. As for the datasheet redaction, I feel that working in a group of 9 people where we exchanged a lot of ideas made me reach a level of expertise that is above what I expected at first.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            As for the Microcontroller and Open-Source Hardware project, I felt really invested because microcontrollers and low-level applications are a domain that I really like. I already had some skills from previous INSA projects or personal projects on Raspberry Pi for example, so it was easy for me to translate these experiences and use them for this project. I would say the KiCad PCB conception was quite difficult to master as first and the analog acquisition circuit involved notions that were a little bit far away in my memory, but eventually I got the results I expected.
        </p>
        <br>
        <table style="border-collapse: collapse; border: 1px #56b6c2 solid; text-align: center; margin-left: 2%;">
    <tr style="border: 1px #56b6c2 solid; background-color: #56b6c2; color: #282c34; font-weight: bold;text-align: center; padding: 10px;">
       <th style="border: 1px #56b6c2 solid;">Skill</th>
       <th style="border: 1px #56b6c2 solid;">Required level</th>
       <th style="border: 1px #56b6c2 solid;">Self-evaluation</th>
       <th style="border: 1px #56b6c2 solid;">Learning mode</th>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid; background-color: #abb2bf; color: #282c34" colspan="4">Introduction to sensors</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Understand basic notions of sensors, data acquisition: physics, electronics and metrology point of view</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to manufacture a nano-particles sensor using micro-electronics tools: chemical synthesis, assembly, testing</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to design the datasheet of the sensor manufactured</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">IT + PE</td>
    </tr>
    <tr style="border: 1px #56b6c2 solid; background-color: #56b6c2;">
        <td colspan="4"></td>
    </tr>
    <tr>
       <td style="border: 1px #abb2bf solid;background-color: #abb2bf; color: #282c34" colspan="4">Microcontrollers and Open Source Hardware</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Understand microcontroller archictecture and how to use them</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT + ST</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to design data acquisition system (sensor, conditioner, microcontroller) with respect to the application</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT + ST</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to design the electronic circuit of a sensor’s signal conditioner (design + simulation)</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">IT + PE</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to design a shield to accommodate the gas sensor</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">IT</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be abe to design the sofware to use the gas sensor and its HMI</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT + ST</td>
    </tr>
    <tr>
       <td style="border: 1px #56b6c2 solid;">Be able to combine all of the above mentioned components into a smart device</td>
       <td style="border: 1px #56b6c2 solid;">3</td>
       <td style="border: 1px #56b6c2 solid;">4</td>
       <td style="border: 1px #56b6c2 solid;">IT</td>
    </tr>
    </table>
    </details>
    <br>
    <details style="text-indent: 2%;">
        <summary style="color: #56b6c2">General review and feedback on the course</summary>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Overall, this course if one of my favourites of the year, mainly because it was the chance to follow the entire process of creation of a sensor, from nano-particle deposition to analog circuit or PCB designing and finally LoRa communication. To me, it is the course that encaptures the spirit of ISS the most, and I really felt that I was acquiring a really wide array of skills, and even more being with peers having a different background than mine. I also really liked the level of freedom I had and how adapted the class seemed to be for every background. Notably, the ability to choose to go for a long project if we felt confident, or going through more guided laboratories if we were not was a really good idea. In retrospect, I'm really happy to have chosen the project, despite my computer science background, and having to decide and show confidence to choose it really is a bonus.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            I also really liked and benefited from all the complementary classes to the main project directly helping with everything. In most other courses, the classes are pretty disconnected from each other and we sometimes can't make the link as to why these classes are put together in the first place. In this module, I really felt like every class was useful to me in the realization of the required projects.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            However, everything was not perfect, and the flow of the different modules coming together was a little derailed by some timing issues with the placement of the classes. For example, we did not have the analogic electronic labs before starting to design our PCB which was directly based on the circuits we would develop in the labs. We ended by simply copying a circuit that was given to us. Also, the KiCad PCBS presentations occured too late in the semester for INSA to manufacture them, so we did not get the chance to use the LoRa module we developped with the sensor we created, and used an already existing sensor instead. Less of a problem but still to be noted, the Optical sensors class felt a little bit disconnected from everything else, even though I quite like it for scientific culture reasons.
        </p>
        <p style="text-indent: 2%; margin-left: 2%; text-align: justify;">
            Despite these problems, I feel like this module was one of the ones I felt the most invested in, and I can confidently say that I have learned a lot of skills that I would not have, had I chosen another orientation than ISS.
        </p>
        <br>
    </details>
</details>

<p>-Smart devices courses-</p>