import { backSkill, frontSkill, softSkill } from '../data/data'
import { SkillCard } from '../components/SkillCard';
import { SkillType } from '../types/test';
import back from '../assets/images/back.png';
import front from '../assets/images/front.png';
import soft from '../assets/images/soft.png';



export const Skills = () => {


    return (
        <div id='skills' className="min-h-[680px] h-full sm:h-screen w-full  dark:bg-gray-400 flex  justify-center flex-col  items-center p-10 ">
            <div>
                <h1 className="text-3xl text-green dark:font-bold font-extrabold">Skills & Techs</h1>
            </div>
            <div className='flex justify-between items-center gap-1 my-12'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" className='w-7 h-7 sm:w-10 sm:h-10' />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" className='w-7 h-7 sm:w-10 sm:h-10'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='w-7 h-7 sm:w-10 sm:h-10'/>

            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-3 mt-4'>
                <SkillCard icon={back} title={"Backend Skills"} data={backSkill} />
                <SkillCard icon={front} title={"Frontend Skills"} data={frontSkill} />
                <SkillCard icon={soft} title={"Soft Skills"} data={softSkill} />
            </div>

        </div>

    );
}