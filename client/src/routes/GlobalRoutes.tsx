import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contato } from "../components/Contato.tsx";
import { Home } from "../components/Home";
import { Projetos } from "../components/Projetos.tsx";
import { Skills } from "../components/Skills.tsx";
import { Sobre } from "../components/Sobre.tsx";


export const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}