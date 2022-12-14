import { ProjetoCard } from '../components/ProjetosCard'
import { ProjetosTable } from '../components/ProjetosTable'

export const Projetos = () => {
    return (
        <div id="projetos" className="bg-white dark:bg-gray-400  h-full sm:h-screen flex flex-col justify-center items-center  sm:pt-0 p-10 w-full ">
            <div className='text-green font-bold text-3xl mb-20'>Meus Projetos</div>
            <ProjetoCard />
            
        </div>
    );
}
