import { ProjectGrid } from './ProjectGrid';
import { SectionTitle } from './SectionTitle';
import { projects } from '../constant/const';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen max-w-7xl mx-auto py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
};