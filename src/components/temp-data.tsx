import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

function TempData() {

    return (
        <div className='h-auto md:max-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto'>
            <BackgroundGradientAnimation>
                <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-serif px-10 pointer-events-none text-xl text-center md:text-xl lg:text-3xl">
                    We understand your vision, and we’re here to turn it into reality. <br />
                    With the right template, the path to success becomes clear. It’s not just about having a structure, it’s about empowering you to explore new ideas and express yourself with confidence. Our tools are crafted to support your creativity and make every step of your journey smoother, faster, and more meaningful.
                </div>
            </BackgroundGradientAnimation>
        </div>
    )
}

export default TempData
