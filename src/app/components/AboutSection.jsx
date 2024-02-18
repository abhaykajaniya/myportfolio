"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>.Net</li>
          <li>Outsystems</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-8'>
        <Image src='/images/about-image4.avif' width={500} height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>I am a full stack web developer with a passion for creating
                interactive and responsive web appliation. I have experience
                working with javascript, React, Node.js, HTML, CSS, Django and Git.
                I have also wroked as Outsystems Developer for 2 years where i used
                .Net, react, c# and sql for data base management via SSM Studio.
                I am a quick learner and I am always looking to expand my knowledge
                and skill set. I am a team player and I am excited to work with others
                to create amazing applications.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton 
                    selectTab = {() => handleTabChange("skills")}
                    active = {tab === "skills"} >
                    {" "}Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab = {() => handleTabChange("education")}
                    active = {tab === "education"} >
                    {" "}Education{" "}
                </TabButton>
                <TabButton 
                    selectTab = {() => handleTabChange("experience")}
                    active = {tab === "experience"} >
                    {" "}Experience{" "}
                </TabButton>
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
        </div>
    </section>

  )
}

export default AboutSection