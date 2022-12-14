import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { SkillType } from '../types/test'




type Props = {
    icon: string;
    title: string;
    data: SkillType[];
}


export const SkillCard = ({ icon, title, data, }: Props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <Menu>
                <Menu.Button className="flex justify-center gap-2 items-center bg-green hover:bg-green-hover rounded p-1 w-72 shadow shadow-gray-400 dark:shadow-gray-700  " onClick={() => setIsShown(!isShown)}>
                    <img src={icon} className="w-9 h-9 " alt="Backend" />
                    <span className='font-bold text-xl text-white'>{title}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </Menu.Button>
                <Menu.Items className='border dark:border-green rounded h-auto mt-3 shadow shadow-gray-400 dark:shadow-gray-700'>
                    <div className='p-2 text-lg'>
                        <div>
                            {data.length > 0 && data.map((info, index) => info.type === "back" && (
                                <div key={index}>
                                    <div >
                                        <div className='flex justify-between items-center dark:text-white '>
                                            <div> <>{info.name} </> </div>
                                            <div> {info.porcent}</div>
                                        </div>
                                        <div className='w-auto h-2 dark:bg-white bg-gray-400 rounded'>
                                            <div className='bg-green rounded h-full ' style={{ width: info.porcent }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {data.length > 0 && data.map((info, index) => info.type === "front" && (
                                <div key={index}>
                                    <div >
                                        <div className='flex justify-between items-center dark:text-white '>
                                            <div> <>{info.name} </> </div>
                                            <div> {info.porcent}</div>
                                        </div>
                                        <div className='w-auto h-2 dark:bg-white bg-gray-400 rounded'>
                                            <div className='bg-green rounded h-full' style={{ width: info.porcent }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {data.length > 0 && data.map((info, index) => info.type === "soft" && (
                                <div key={index}>
                                    <div >
                                        <div className='flex justify-between items-center dark:text-white '>
                                            <div> <>{info.name} </> </div>
                                            <div> {info.porcent}</div>
                                        </div>
                                        <div className='w-auto h-2 dark:bg-white bg-gray-400 rounded mb-2'>
                                            <div className='bg-green rounded h-full' style={{ width: info.porcent }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );

}