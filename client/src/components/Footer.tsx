import insta from '../assets/images/instagram.png';
import face from '../assets/images/facebook.png';
import goog from '../assets/images/google.png';
import linkd from '../assets/images/linkedin.png';
import gith from '../assets/images/github.png';


export const Footer = () => {
    return (
        <div id='footer' className='w-full place-self-end '>
            <div className='flex flex-col sm:flex-row  justify-between items-center bg-green p-1 sm:py-3'>
                <div className='flex  justify-center items-center sm:ml-7 mb-2 sm:mb-0 text-xs sm:text-base  font-bold '>
                    Me encontre em todas as redes sociais:
                </div>
                <div className='flex justify-between gap-2 items-center  sm:mr-7'>
                    <img src={insta} alt="Instagram" className=' w-5 h-5 sm:w-6 sm:h-6 ' />
                    <img src={face} alt="Facebook" className=' w-5 h-5 sm:w-6 sm:h-6' />
                    <img src={goog} alt="Google" className=' w-5 h-5 sm:w-6 sm:h-6' />
                    <img src={linkd} alt="Linkedin" className=' w-5 h-5 sm:w-6 sm:h-6' />
                    <img src={gith} alt="GitHub" className='w-5 h-5 sm:w-6 sm:h-6' />
                </div>
            </div>

            <div className='bg-black h-auto flex flex-col sm:flex-row justify-center items-center  p-3 sm:p-5'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='bg-green font-bold w-16 text-center mb-1 rounded'>Camilo</div>
                    <span className='text-white text-xs text-center'>Desenvolvedor Full Stack</span>
                </div>

                <div className='bg-white w-48 h-[1px] sm:h-20 sm:w-[1px] mb-4 mt-2 sm:my-0 sm:mx-16'></div>

                <div className='text-white flex flex-col items-center justify-center '>
                    <h1 className='text-sm '>CONTATO</h1>

                    <div className='bg-white w-20 h-[1px] flex '></div>

                    <ul className='sm:text-xs text-[10px] mt-2'>
                        <li className='flex'>
                            <svg className="w-4 h-4" fill="black" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                            Araucária - PR
                        </li>
                        <li className='flex'>
                            <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                            </svg>
                            camilo.kotecki10@gmail.com
                        </li>
                        <li className='flex'>
                            <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            +55 (41) 98732-3946
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-black flex  justify-center items-center'>
                <span className='text-white text-[10px] mb-1'>2022-2022 - Todos direitos reservados - Camilo de Assis</span>
            </div>
        </div>
    );
}