import { useState } from "react"
import { dataQuali } from '../data/data'
import { QualiTypes } from '../types/qualiType'


export const Quali = () => {
    const [quali, setQuali] = useState<QualiTypes[]>(dataQuali);
    return (
        <div id="quali" className="bg-gray-100 dark:bg-gray-700  h-full sm:h-screen  sm:w-screen flex flex-col justify-center items-center p-10 w-full  pt-24">
            <div className='text-green font-bold text-3xl mb-20'>Qualificações</div>
            <div className='grid grid-cols-3 gap-6'>
                {quali && quali.map((item, index) => (                  
                            <div key={index} className="flex flex-col  items-center p-2 dark:text-white ">
                                
                                    <li className='dark:text-green'><span  className='text-center dark:text-green text-lg font-bold '>{item.name}</span></li>
                                    <span className='text-center'>{item.escola} | Conclusão: {item.data}</span>
                                                                                  
                            </div>
                ))}
            </div>
        </div>
    )
}