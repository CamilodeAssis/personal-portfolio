import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Switch } from '@headlessui/react';



export const MenuHeader = () => {


    const [theme, setTheme] = useState("dark")
    const [enabled, setEnabled] = useState(true)

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

    }, [theme])

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    console.log(theme);
    return (
        <div className=' flex fixed justify-between  items-center  sm:h-auto h-16 sm:pb-3 sm:pt-3 bg-gray-700 w-full ' >

            <Link  to="home" smooth={true} offset={-200} duration={500}>
            <div className=' sm:ml-7 ml-2 flex flex-col justify-center items-center '>
                <div className='cursor-pointer bg-green  rounded text-black p-1 w-18 flex items-center justify-center text-base font-bold sm:text-base sm:font-bold flex-1 '>
                    Camilo
                </div>
                <span className='hidden md:flex text-white text-xs sm:text-base mt-1 text-center cursor-pointer'>Desenvolvedor Full Stack</span>
            </div>
            </Link>
            <div className='hidden sm:flex justify-center items-center text-white mr-7 cursor-pointer'>
                <Switch
                    onClick={handleThemeChange}
                    checked={enabled}
                    onChange={setEnabled}
                    className={` ${enabled ? 'bg-green' : 'bg-gray-400'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
                <Link className='ml-6 hover:text-green active:text-green ' to="home" smooth={true} offset={-200} duration={500} >Home</Link>
                <Link className='ml-6 hover:text-green active:text-green ' to="sobre" smooth={true} offset={0} duration={500}>Sobre</Link>
                <Link className='ml-6 hover:text-green active:text-green ' to='skills' smooth={true} offset={0} duration={500}>Skills</Link>
                <Link className='ml-6 hover:text-green active:text-green ' to='quali' smooth={true} offset={0} duration={500}>Qualificações</Link>
                <Link className='ml-6 hover:text-green active:text-green ' to='projetos' smooth={true} offset={0} duration={500}>Projetos</Link>
                <Link className='ml-6 hover:text-green active:text-green ' to='contato' smooth={true} offset={0} duration={500}>Contato</Link>
            </div>
            {/* MOBILE BUTTON  v*/}
            <Switch
                onClick={handleThemeChange}
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-green' : 'bg-gray-400'
                    } sm:hidden relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
            <Menu as="div" className='relative sm:hidden flex justify-center items-center mr-2 bg-green rounded  font-bold text-black p-1 w-24 sm:w-auto  text-lg text-bold'>

                <Menu.Button
                    className=' flex justify-center items-center w-full text-lg '
                >Menu
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </Menu.Button>
                <Menu.Items className='origin-top-right absolute right-0 mt-[190px] w-40  text-black bg-green text-lg  rounded'>
                    <div className=' py-1 flex flex-col justify-center items-center cursor-pointer' >
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="home" smooth={true} offset={-200} duration={500}>Home</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="sobre" smooth={true} offset={0} duration={500}>Sobre</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="skills" smooth={true} offset={0} duration={500}>Skills</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="quali" smooth={true} offset={0} duration={500}>Qualificações</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="projetos" smooth={true} offset={0} duration={500}>Projetos</Link>
                        <Link className='hover:bg-black hover:text-white  block w-full text-center' to="contato" smooth={true} offset={0} duration={500}>Contato</Link>
                    </div>

                </Menu.Items>
            </Menu>
        </div>
    );
}