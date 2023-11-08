import React from "react";
import Navbar from "../components/navbar";
import FooterNavbar from "../components/footer-nav";
import foto_profile from '../assets/dimas_fix.jpeg'
import TechStackCard from "../components/tech_stack";

const AboutPage = () => {
  return(
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="md:px-20 lg:px-32 px-5 text-white flex flex-col md:mt-8 gap-y-7 mb-5">
          <div className="bg-secondaryBlack p-3 w-full rounded-lg flex flex-col gap-y-3">
            <div className="font-bold text-xl md:text-2xl lg:text-xl">About Me</div>
            <div className="md:flex-row md:items-center md:pl-8 md:my-5 flex flex-col items-center">
              <div className="">
                  <img src={foto_profile} alt="foto dimas" className="w-48 h-48 md:w-40 md:h-40 object-cover object-top 
                  rounded-full"/>
              </div>
              <div className="mt-3 md:mt-0 text-justify md:w-3/4 md:ml-5 md:text-lg lg:text-sm">
                Hello World! This is my website profile. I'm I Gusti Ketut Dimas Pramantya and a full-stack web 
                developer with a passion for backend development. MERN (Mongo, Express, React, 
                Node) is my go-to tech stack, and I'm always eager to explore new possibilities.
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold md:text-2xl lg:text-xl">Tech Stack</div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-3 gap-3">
              <TechStackCard url="logos:javascript" text="Javascript"/>
              <TechStackCard url="vscode-icons:file-type-node" text="Node JS"/>
              <TechStackCard url="skill-icons:expressjs-light" text="Express JS"/>
              <TechStackCard url="vscode-icons:file-type-mongo" text="Mongo DB"/>
              <TechStackCard url="logos:mysql" text="MySQL"/>
              <TechStackCard url="skill-icons:gcp-light" text="Google Cloud"/>
              <TechStackCard url="vscode-icons:file-type-html" text="HTML"/>
              <TechStackCard url="vscode-icons:file-type-css" text="CSS"/>
              <TechStackCard url="logos:react" text="React"/>
            </div>
          </div>
        </main>
        <FooterNavbar/>
      </div>
    </>
  )
}

export default AboutPage;