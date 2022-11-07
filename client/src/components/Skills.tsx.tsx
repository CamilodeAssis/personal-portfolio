import back from '../assets/images/back.png';
import front from '../assets/images/front.png';
import soft from '../assets/images/soft.png';


export const Skills = () => {
    return (
        <div className="min-h-[680px] max-h-[100vh] w-screen bg-gray-400 flex flex-col justify-center items-center ">
            <div>
                <h1 className="text-2xl text-green font-bold">Skiils</h1>
            </div>
            <div className='flex justify-between gap-1'>
                <div>
                    <div className="flex justify-center items-center bg-green rounded p-1 w-96">
                    <img src={back} className="w-9 h-9" alt="Backend" />
                    <span className='font-bold'>Backend Skills</span> 
                    
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-green rounded p-1 w-96">
                    <img src={front} className="w-9 h-9" alt="Backend" />
                    <span className='font-bold'>Frontend Skills</span> 
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-green rounded p-1 w-96">
                    <img src={soft} className="w-9 h-9" alt="Backend" />
                    <span className='font-bold'>Soft Skills</span> 
                    </div>
                </div>


            </div>
        </div>
    );
}