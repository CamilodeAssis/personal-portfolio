import { ProjetoCard } from '../components/ProjetosCard'


export const Projetos = () => {
    return (
        <div id="projetos" className="h-full sm:h-screen w-full bg-gray-700 flex  justify-center flex-col  items-center p-10 ">
            <div className='text-green font-bold text-3xl'>Meus Projetos</div>
            <ProjetoCard />
        </div>
    );
}
