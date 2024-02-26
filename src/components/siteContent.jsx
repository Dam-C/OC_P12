import * as comp from "./_compsIndex";

const SiteContent = () => {
  return (
    <main className="site-content">
      <comp.Folder />
      <comp.ProjectsList />
      <comp.About />
      <comp.Contact />
    </main>
  );
};

export default SiteContent;
