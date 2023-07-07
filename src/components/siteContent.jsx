import { Intro, ProjectsList, Contact } from "./_compsIndex";

const SiteContent = () => {
  return (
    <main className="site-content">
      <ProjectsList />
      <Intro />
      <Contact />
    </main>
  );
};

export default SiteContent;
