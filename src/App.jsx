import "../public/styles/styles.css";
import { MainNav, SiteContent, Footer } from "./components/_compsIndex";

function App() {
  return (
    <>
      <div className="bg-gradient">
        <MainNav />
        <SiteContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
