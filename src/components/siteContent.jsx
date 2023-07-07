import { Intro, ProjectsList, Technos, Contact } from "./_compsIndex";

const SiteContent = () => {
  return (
    <main className="site-content">
      <ProjectsList />
      <Intro />
      <Technos />
      <Contact />
    </main>
  );
};

export default SiteContent;
