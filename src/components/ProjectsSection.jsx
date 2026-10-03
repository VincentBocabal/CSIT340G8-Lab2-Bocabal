import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard 
          year="2026"
          title="Portfolio Web App"
          description="My personal portfolio website built with React, Vite, and Tailwind CSS."
          tech="React · Tailwind CSS"
          link="https://github.com/VincentBocabal/CSIT340G8-Lab2-Bocabal"
        />
        <ProjectCard 
          year="2025"
          title="CIT-U FIND"
          description="A web that allows Students to report lost & found items around the Campus. Dedicated for CIT-U."
          tech="myPhp · mySQL"
          link="https://github.com/VincentBocabal/IM"
        />
        <ProjectCard 
          year="2025"
          title="RPG GAME"
          description="A text based RPG Project game we made based on OOP1"
          tech="Java"
          link="https://github.com/VincentBocabal/RPG"
        />
        <ProjectCard 
          year="2025"
          title="Inventory Management System"
          description="An inventory management project group dedicated for Coffee Shops based on OOP2."
          tech="Java · mySQL"
          link="https://github.com/VincentBocabal/OOP2Project"
        />
      </div>
    </section>
  );
}