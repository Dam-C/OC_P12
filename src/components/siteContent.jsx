import { Intro, ProjectsList, Technos, Contact } from "./_compsIndex";

const SiteContent = () => {
  return (
    <main className="site-content">
      <Intro />
      <ProjectsList />
      <Technos />
      <Contact />
    </main>
  );
};

export default SiteContent;
