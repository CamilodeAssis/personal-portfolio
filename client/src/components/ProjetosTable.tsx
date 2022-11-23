import { Fragment, useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { ProjetosType } from '../types/projetosType'
import { dataProjetos } from '../data/data'


export const ProjetosTable = () => {
    const [data, setData] = useState<ProjetosType[]>(dataProjetos)
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className='bg-gray-100 dark:bg-gray-700  h-full sm:h-screen flex flex-col justify-center items-center  sm:pt-0 p-10 w-full'>

            <Tab.Group>
                <Tab.List className='flex gap-4 mb-2  '>
                    <Tab as={Fragment} >
                        {({ selected }) => (

                            <button
                                className={
                                    selected ? 'bg-green  rounded text-2xl w-72 py-1 font-bold focus:outline-none ' : 'bg-green  rounded text-2xl w-72 py-1 font-bold focus:outline-none  '
                                }
                            >
                                Javascript
                            </button>
                        )}
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) => (

                            <button
                                className={
                                    selected ? 'bg-green  rounded text-2xl w-72 py-1 font-bold focus:outline-none' : 'bg-green  rounded text-2xl w-72 py-1 font-bold focus:outline-none  '
                                }
                            >
                                ReactJs
                            </button>
                        )}
                    </Tab>

                </Tab.List>
                <Tab.Panels className='  rounded p-2 gap-3 w-[680px] h-[522px] '>

                    <Tab.Panel className='flex flex-col gap-2 '>
                        {data && data.map((item, index) => item.type === "Javascript" && (
                            <div key={index} className='flex flex-col gap-3 border border-black rounded p-1 text-white bg-green'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-8 h-8' src={item.icons[0]} alt="" />
                                    <h1 className='text-black font-bold text-xl'>{item.name}</h1>

                                </div>
                                <div className=' mb-4 text-lg'>{item.description}</div>
                            </div>
                        ))}
                    </Tab.Panel>
                    <Tab.Panel className='flex flex-col gap-2'>
                        {data && data.map((item, index) => item.type === "ReactJs" && (
                            <div key={index} className='flex flex-col gap-3 border border-black rounded p-1 text-white bg-green'>
                                <div className='flex gap-2 items-center'>
                                    <img className='w-10 h-10' src={item.icons[0]} alt="" />
                                    <h1 className='text-black font-bold text-xl'>{item.name}</h1>

                                </div>
                                <div className=' mb-4 text-lg '>{item.description}</div>
                            </div>
                        ))}
                    </Tab.Panel>


                </Tab.Panels>
            </Tab.Group>


        </div>
    );
}