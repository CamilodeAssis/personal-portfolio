import img from '../assets/images/eureal.jpg'

export const Sobre = () => {
    return (
        <div id="sobre" className="dark:bg-gray-700 bg-gray-100 min-h-[680px] h-full sm:h-screen flex flex-col justify-center items-center p-10 pt-20 ">
            <div className="flex flex-col justify-center items-center mb-7">
                <div>
                    
                </div>
                <h1 className="text-3xl font-extrabold text-green ">Sobre mim</h1>
                <h2 className="font-bold dark:text-white">Introdução</h2>
            </div>
            
                <div className="flex flex-col lg:flex-row  w-auto lg:w-[931px] items-center">
                    <p className="flex-1 dark:text-white text-center sm:mr-8 text-sm sm:text-base ">Sou Desenvolvedor Full Stack em formação, a mais de 09 meses focado em estudar as principais técnologias que compõem o desenvolvimento web como por exemplo: HTML & CSS, Javascript, ReactJs, Typescript e NodeJs. <br /><br />
                        Me considero uma pessoa muito focada e comprometida, sempre entregando meu 100% para cumprir prazos ou desbravar novos desafios. No momento estou totalmente focado em adquirir habilidades e experiencia para ingressar no mundo de desenvolvimento de software, seja no Backend ou Frontend.</p>
                    <img className=" w-48 h-60 rounded-[2rem] mt-8 border dark:border-green shadow-md shadow-gray-400 dark:shadow-gray-900" src={img} alt="Camilo de Assis" />

                </div>
            
        </div>
    );
}