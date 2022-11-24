import { useState } from "react"
import { dataQuali } from '../data/data'
import { QualiTypes } from '../types/qualiType'


export const Quali = () => {
    const [quali, setQuali] = useState<QualiTypes[]>(dataQuali);
    return (
        <div id="quali" className="min-h[680px] bg-gray-100 dark:bg-gray-700  h-full sm:h-screen  sm:w-full flex flex-col justify-center items-center py-20  sm:py-0 p-10 w-full  ">
            <div className='text-green font-bold text-3xl  mb-14'>Qualificações</div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 '>
                {quali && quali.map((item, index) => (
                    <div key={index} className="flex flex-col p-2  items-center justify-center dark:text-white border border-green rounded h-24 shadow-md">

                        <div className=' dark:text-green   w-auto sm:text-lg text-center text-base font-bold mb-1 '>{item.name}</div>
                        <span className='text-center text-xs sm:text-base'>{item.escola} | Conclusão: {item.data}</span>

                    </div>
                ))}
            </div>
        </div>
    )
}