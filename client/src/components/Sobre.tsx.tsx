

export const Sobre = () => {
    return (
        <div id="sobre" className="bg-gray-400 min-h-[680px] flex flex-col justify-center items-center p-10 w-screen">
            <div className="flex flex-col justify-center items-center mb-7">
                <div>
                    
                </div>
                <h1 className="text-3xl font-extrabold text-green ">Sobre mim</h1>
                <h2 className="font-bold text-white">Introdução</h2>
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col lg:flex-row sm:w-[900px] w-auto justify-between items-center">
                    <p className="flex-1 text-white text-center sm:mr-8 text-sm sm:text-base">Sou Desenvolvedor Full Stack em formação, a mais de 07 meses focado em estudar as principais técnologias que compõem o desenvolvimento web como por exemplo: HTML & CSS, Javascript, ReactJs, Typescript e NodeJs. <br /><br />
                        Me considero uma pessoa muito focada e comprometida, sempre entregando meu 100% para cumprir prazos ou desbravar novos desafios. No momento estou totalmente focado em adquirir habilidades e experiencia para ingressar no mundo de desenvolvimento de software, seja no Backend ou Frontend.</p>
                    <div className="bg-eureal bg-cover bg-center  w-44 h-60 rounded-[2rem] mt-4 border border-green  " />
                </div>
            </div>
        </div>
    );
}