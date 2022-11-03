import { Footer } from "./components/Footer";
import { MenuHeader } from "./components/Menu";
import { GlobalRoutes } from "./routes/GlobalRoutes";

export const App = () => {
  return (
    <div>
      <MenuHeader />
      <GlobalRoutes />
      <Footer />
    </div>

  );
}
