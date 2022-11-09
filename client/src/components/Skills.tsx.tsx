import back from '../assets/images/back.png';
import front from '../assets/images/front.png';
import soft from '../assets/images/soft.png';
import { backSkill, frontSkill, softSkill } from '../data/data'
import { SkillCard } from '../components/SkillCard';
import { SkillType } from '../types/test';



export const Skills = () => {


    return (
        <div id='skills' className="min-h-[680px] h-full sm:h-screen w-full bg-gray-400 flex flex-col justify-center items-center ">
            <div>
                <h1 className="text-3xl text-green font-bold">Skills</h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-3 mt-4'>

                <SkillCard icon={back} title={"Backend Skills"} data={backSkill} />
                <SkillCard icon={front} title={"Frontend Skills"} data={frontSkill} />
                <SkillCard icon={soft} title={"Soft Skills"} data={softSkill} />

            </div>
        </div>



    );
}