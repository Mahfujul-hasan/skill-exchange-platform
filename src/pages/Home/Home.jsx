import React, { useEffect } from 'react';
import useLoadData from '../../hooks/useLoadData';
import SkillCard from '../../components/skillCard';
import HeroSlider from './HeroSlider';
import TopProvider from './TopProvider';
import HowItWorks from './howItWorks';
const Home = () => {
    const {skillData, processData }=useLoadData()
    // console.log(processData);

    useEffect(()=>{
        document.title="Home | SkillSwap"
    })
    

    return (
        <div className='max-w-11/12 mx-auto'>
            <HeroSlider></HeroSlider>
            <h3 className="text-2xl font-bold text-black">Popular Skill</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-5'>
                {
                    skillData.map(skill=> <SkillCard key={skill.skillId} skill={skill}></SkillCard>)
                }
            </div>
            <section className=' my-10'>
                <h3 className='text-2xl font-bold mb-5'>Top Rated Providers</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    skillData.map(data=><TopProvider key={data.skillId} data={data}></TopProvider>)
                }
                </div>
            </section>
            <section>
                <h3 className='text-2xl font-bold mb-5'>How it works?</h3>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10'>
                    {
                        processData.map(data=> <HowItWorks key={data.id} data={data}></HowItWorks> )
                    }
                </div>
            </section>
            <section className='my-20 bg-[#f3fdfd] px-10 py-20 shadow-lg '>
                <h3 className='text-2xl font-bold mb-10 text-center'>Our SkillSwap Impact</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between items-center'>
                    <div className='bg-white p-10 rounded-lg space-y-3 hover:p-8 shadow-sm'>
                        <h5 className='text-4xl text-center font-bold text-[#70B2B2]'>500+</h5>
                        <p className='text-gray-400 font-medium text-center'>Skill Exchanged</p>
                    </div>
                    <div className='bg-white p-10 rounded-lg space-y-3 hover:p-8 shadow-sm'>
                        <h5 className='text-4xl text-center font-bold text-[#70B2B2]'>200+</h5>
                        <p className='text-gray-400 font-medium text-center'>Local Participants</p>
                    </div>
                    <div className='bg-white p-10 rounded-lg space-y-3  hover:p-8 shadow-sm'>
                        <h5 className='text-4xl text-center font-bold text-[#70B2B2]'>50+</h5>
                        <p className='text-gray-400 font-medium text-center'>Communities Reached</p>
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default Home;