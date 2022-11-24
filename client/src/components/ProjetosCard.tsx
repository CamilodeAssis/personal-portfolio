import { useEffect, useState, useRef, MouseEvent } from 'react';
import { dataProjetos } from '../data/data'
import { ProjetosType } from '../types/projetosType'



export const ProjetoCard = () => {
    const [projetos, setProjetos] = useState<ProjetosType[]>(dataProjetos)
    const carousel = useRef<HTMLDivElement>(null);

    let totalSlides = projetos.length;

    let currentSlide = 0;

    const handleLeftClick = (e: MouseEvent): void => {
        currentSlide--;
        e.preventDefault();
        if (carousel && currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateMargin();
    }

    const handleRightClick = (e: MouseEvent): void => {
        currentSlide++;
        e.preventDefault();
        if (carousel && currentSlide > (totalSlides - 1)) {
            currentSlide = 0;
        }
        updateMargin();
    }

    const updateMargin = (): void => {
        let newMargin: string;
        let maxMargin: string;
        if (carousel.current?.offsetWidth) {
            newMargin = (currentSlide * 608).toString();
            maxMargin = (currentSlide * 200).toString();
            if (carousel.current.style.marginLeft > '1650px') {
                carousel.current.style.marginLeft = `-${maxMargin}px`;
            } else {
                carousel.current.style.marginLeft = `-${newMargin}px`;
            }
        }
    }
    useEffect(() => {

    }, [projetos, handleLeftClick, handleRightClick]);
    return (
        <div >

            <div className=' w-[75vw] xl:w-[1208px] overflow-hidden'>
                <div id='slider' className={` flex sm:h-full h-auto transition-all duration-300 w-[100px] sm:w-[${600 * totalSlides}px] `} ref={carousel} >
                    {projetos && projetos.map((item, index) => {
                        return (
                            <a href={item.link} target={"_blank"}>
                                <div key={index} className="flex flex-col md:w-[600px]  w-[200px] flex-none  bg-gray-400 border dark:border-green rounded mr-2 shadow-md dark:shadow-gray-700">

                                    <div className=''>
                                        <img className="w-full h-full object-cover rounded" src={item.src} alt="" />
                                    </div>

                                    <div className="flex flex-col h-36 justify-between dark:bg-green bg-white items-center rounded-b text-black p-2 text-center">
                                        <span className='font-bold text-sm sm:text-lg ' >{item.name}</span>
                                        <span className='font-semibold text-xs sm:text-sm dark:text-white'>{item.description}</span>
                                        <div className="flex gap-2">
                                            <img src={item.icons[0]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                            <img src={item.icons[1]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                            <img src={item.icons[2]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                            {item.icons[3] &&
                                                <img src={item.icons[3]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                            }
                                        </div>
                                    </div>

                                </div>
                            </a>
                        )
                    })}
                </div>
                <div className="cursor-pointer w-full mt-10 flex items-center justify-center ">
                    <span className='dark:text-white font-bold'>Anterior</span>
                    <button className='' onClick={handleLeftClick}>
                        <svg className="w-12 h-12 sm:w-14 sm:h-14 sm:mr-20 " fill="black" stroke="#37CFA2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onClick={handleRightClick}>
                        <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="black" stroke="#37CFA2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    <span className='dark:text-white font-bold'>Próximo</span>
                </div>
            </div>
        </div>

    );
}