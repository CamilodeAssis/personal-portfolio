import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MenuHeader } from "./components/Menu";
import { Sobre } from "./components/Sobre.tsx";
import { GlobalRoutes } from "./routes/GlobalRoutes";

export const App = () => {
  return (
    <div>
      <MenuHeader />
      <GlobalRoutes/>
      <Footer />
    </div>

  );
}
