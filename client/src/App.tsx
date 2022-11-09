import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MenuHeader } from "./components/Menu";
import { Projetos } from "./components/Projetos";
import { Skills } from "./components/Skills.tsx";
import { Sobre } from "./components/Sobre.tsx";


export const App = () => {
  return (
      <>
      <MenuHeader />
      <Home />
      <Sobre />
      <Skills />
      <Projetos />
      <Footer />
      </>

  );
}
