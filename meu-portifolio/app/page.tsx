import Navbar from "./componentes/navbar";
import Homepage from "./pagina/home";
import SkillsPage from "./componentes/card";
import Contato from "./componentes/contato";
import ProjectCarousel3 from "./componentes/carousel";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#2B2D27] font-sans">
      <Navbar/>
      <Homepage/>
      <SkillsPage/>
      <ProjectCarousel3 />
      <Contato/>
    </div>
  );
}