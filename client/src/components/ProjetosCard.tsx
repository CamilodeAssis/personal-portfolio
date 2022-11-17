import { useEffect, useState, useRef, MouseEvent } from 'react';
import { dataProjetos } from '../data/data'
import { ProjetosType } from '../types/projetosType'



export const ProjetoCard = () => {
    const [projetos, setProjetos] = useState<ProjetosType[]>(dataProjetos)
    const carousel = useRef<HTMLDivElement>(null);

    let totalSlides= projetos.length;
    
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
        if (carousel && currentSlide > (totalSlides-1)) {
            currentSlide = 0; 
        }
        updateMargin();
    } 

    const updateMargin = (): void => {
        let newMargin: string;
        let maxMargin: string;
        if (carousel.current?.offsetWidth){
            newMargin = (currentSlide * 550).toString();
            maxMargin = (currentSlide * 100).toString();
           if ( carousel.current.style.marginLeft > '1650') {
            carousel.current.style.marginLeft = `-${maxMargin}px`;
           }else{
            carousel.current.style.marginLeft = `-${newMargin}px`;
           }
        }
    }
    useEffect(() => {

    }, [projetos, handleLeftClick, handleRightClick]);
    return (
        <div >
            <div className=' p-10 w-[80vw] overflow-hidden'>
                <div id='slider' className={`sm:ml-[-1175px] ml-[-1145px] flex sm:h-full h-auto transition-all w-[${200 * totalSlides}px] sm:w-[${600 * totalSlides}px] p-3`}  ref={carousel} >
                    {projetos && projetos.map((item, index) => {
                        return (

                            <div key={index} className="ml-5 sm:w-[600px] w-[200px] flex-none  bg-gray-400 border border-green rounded">

                                <div className=''>
                                    <img className="w-full h-full object-cover rounded" src={item.src} alt="" />
                                </div>
                                <div className="flex flex-col h-36 justify-between border border-green bg-green  items-center text-black p-2 text-center">
                                    <span className='font-bold text-sm sm:text-lg ' >{item.name}</span>
                                    <span className='font-semibold text-xs sm:text-sm'>{item.description}</span>
                                    <div className="flex">
                                        <img src={item.icons[0]} alt=""  className='w-5 h-5 sm:w-10 sm:h-10' />
                                        <img src={item.icons[1]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                        <img src={item.icons[2]} alt=""  className='w-5 h-5 sm:w-10 sm:h-10'/>
                                        {item.icons[3] &&
                                            <img src={item.icons[3]} alt="" className='w-5 h-5 sm:w-10 sm:h-10' />
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="cursor-pointer w-full text-center mt-5 ">
                <button onClick={handleLeftClick}>
                    <svg className="w-12 h-12 mr-7" fill="none" stroke="#37CFA2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onClick={handleRightClick}>
                    <svg className="w-12 h-12" fill="none" stroke="#37CFA2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
            </div>
        </div>

    );
}