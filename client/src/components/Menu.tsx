import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Menu, Switch } from '@headlessui/react';


export const MenuHeader = () => {

    const [enabled, setEnabled] = useState<boolean>(false)

    return (
        <div className=' flex justify-between  items-center  sm:h-auto h-16 sm:pb-3 sm:pt-3  bg-gray-700 w-screen ' >
            <div className=' sm:ml-7 ml-2 flex flex-col justify-center items-center '>
                <div className=' bg-green rounded text-black p-1 w-18 flex items-center justify-center text-xs font-bold sm:text-base sm:font-bold flex-1 '>
                    Camilo
                </div>
                <span className='text-white text-xs sm:text-base mt-1'>Desenvolvedor Full Stack</span>
            </div>
            <div className='hidden sm:flex justify-center items-center text-white mr-7 '>
                <button className='rounded-full bg-green flex justify-center items-center w-8 h-8 '>
                    <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                </button>
                <Link className='ml-6' to='/'>Home</Link>
                <Link className='ml-6' to='/sobre'>Sobre</Link>
                <Link className='ml-6' to='/skills'>Skills</Link>
                <Link className='ml-6' to='/projetos'>Projetos</Link>
                <Link className='ml-6' to='/contato'>Contato</Link>
            </div>
            {/* MOBILE BUTTON  v*/}
            <button className='sm:hidden rounded-full bg-green flex justify-center items-center w-8 h-8 '>
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>
            <Menu as="div" className='relative sm:hidden flex justify-center items-center mr-2 bg-green rounded  font-bold text-black p-1 w-24 sm:w-auto  text-lg text-bold'>

                <Menu.Button
                    className=' flex justify-center items-center w-full text-lg '
                >Menu
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </Menu.Button>
                <Menu.Items className='origin-top-right absolute right-0 mt-[190px] w-40  text-black bg-green text-lg  rounded'>
                    <div className=' py-1 flex flex-col justify-center items-center cursor-pointer' >
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="">Home</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="sobre">Sobre</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="skills">Skills</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="projetos">Projetos</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="contato">Contato</Link>
                    </div>

                </Menu.Items>
            </Menu>
        </div>
    );
}