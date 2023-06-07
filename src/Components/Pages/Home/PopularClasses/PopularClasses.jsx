import React from 'react';
import { GiAbstract119, GiHeavyThornyTriskelion, GiTigerHead } from 'react-icons/gi';
import { RiArtboardFill } from 'react-icons/ri'
import { TbChartRadar } from 'react-icons/tb'
import { BsBuildings } from 'react-icons/bs'


const PopularClasses = () => {
    return (
        <div className='bg-fuchsia-100 w-full h-60 mt-20'>
            <div className='w-full max-w-7xl h-60 mx-auto flex items-center justify-center overflow-x-scroll'>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>

                    <RiArtboardFill className='text-[40px] hover:text-orange-100'></RiArtboardFill>
                    <p className='font-playfair text-2xl font-bold '>Still Life</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>

                    <GiHeavyThornyTriskelion className='text- text-[40px] hover:text-orange-100'></GiHeavyThornyTriskelion>
                    <p className='font-playfair text-2xl font-bold '>Potraits</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>
                    <TbChartRadar className='text- text-[40px] hover:text-orange-100'></TbChartRadar>
                    <p className='font-playfair text-2xl font-bold '>Landscapes</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>

                    <GiTigerHead className='text- text-[40px] hover:text-orange-100'></GiTigerHead>
                    <p className='font-playfair text-2xl font-bold '>Animals</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>

                    <BsBuildings className='text- text-[40px] hover:text-orange-100'></BsBuildings>
                    <p className='font-playfair text-2xl font-bold '>Architecture</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
                <div className='w-full max-w-7xl flex flex-col h-40 items-center justify-center hover:text-orange-100'>

                    <GiAbstract119 className='text- text-[40px] hover: custom-hover'></GiAbstract119>
                    <p className='font-playfair text-2xl font-bold whitespace-nowrap'>Abstract Art</p>

                </div>
                <p className='h-20 border-2 border-zinc-400'></p>
            </div>
        </div>
    );
};

export default PopularClasses;