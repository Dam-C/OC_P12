import { About, ProjectsList, Contact } from "./_compsIndex";

const SiteContent = () => {
  return (
    <main className="site-content">
      <ProjectsList />
      <About />
      <Contact />
    </main>
  );
};

export default SiteContent;
