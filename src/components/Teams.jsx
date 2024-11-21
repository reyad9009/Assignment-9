import React from 'react';
import Angelynn from "../assets/Angelynn Lim.webp"
import JamesChoong from "../assets/James-Choong.webp"
import Samantha from "../assets/Samantha Lim.webp"
import Vivien from "../assets/Vivien Joshua.webp"
import YeeDan  from "../assets/Yee Dan Low.webp"
import YeeHuei from "../assets/Yee Huei Lim.webp"

const Teams = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl mb-16 mt-16'>Meet Our Counselor</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div className='flex flex-col gap-2 justify-center items-center rounded-2xl px-28'>
                    <img className='w-[15rem]' src={Angelynn} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center  rounded-2xl'>
                    <img className='w-[15rem]' src={JamesChoong} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center rounded-2xl'>
                    <img className='w-[15rem]' src={Samantha} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center rounded-2xl'>
                    <img className='w-[15rem]' src={Vivien} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center rounded-2xl'>
                    <img className='w-[15rem]' src={YeeDan} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center rounded-2xl'>
                    <img className='w-[15rem]' src={YeeHuei} alt=""/>
                    <h1 className='font-bold text-2xl'>Angelynn Lim</h1>
                    <p className='text-lg font-semibold'>Career Transition Support</p>
                </div>
            </div>
        </div>
    );
};

export default Teams;