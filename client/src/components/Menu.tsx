import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '@headlessui/react';

export const MenuHeader = () => {

    return (
        <>
            <div className='flex justify-between items-center sm:h-24 h-16 bg-gray-700 w-screen ' >

                <div className=' sm:ml-7 ml-2 sm:text-white  bg-green rounded text-black p-1 w-24 flex items-center justify-center text-lg font-bold sm:text-2xl sm:font-extrabold '>
                    Camilo
                </div>






                {/* MOBILE BUTTON  v*/}
                <Menu as="div" className='relative sm:hidden flex justify-center items-center mr-2 bg-green rounded  font-bold text-black p-1 w-24 sm:w-auto  text-lg text-bold'>
                    <Menu.Button
                        className=' flex justify-center items-center w-full text-lg '
                    >Menu
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                    </Menu.Button>
                    <Menu.Items className='origin-top-right absolute right-0 mt-[190px] w-40  text-black bg-green text-lg  rounded'>
                        <div className=' py-1 flex flex-col justify-center items-center cursor-pointer ' >
                            
                                <Link className='hover:bg-black hover:text-white  block w-full text-center ' to="/">Home</Link>
                                
                                <Link className='hover:bg-black hover:text-white  block w-full text-center' to="/sobre">Sobre</Link>
                               
                                <Link className='hover:bg-black hover:text-white  block w-full text-center ' to="/skills">Skills</Link>
                           
                                <Link className='hover:bg-black hover:text-white  block w-full text-center' to="/projetos">Projetos</Link>
                              
                                <Link className='hover:bg-black hover:text-white  block w-full text-center ' to="/contato">Contato</Link>
                        </div>

                    </Menu.Items>
                </Menu>
                



            </div>


        </>

    );
}