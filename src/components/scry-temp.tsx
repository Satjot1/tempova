import React from 'react'
import { SparklesCore } from './ui/sparkles'

function ScaryTemp() {
    return (
        <div className="bg-black min-h-screen md:max-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
            {/* Background Animation */}
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={150}
                    className="w-full h-full"
                    particleColor="#FF0000" // Adjusted for a more ominous red hue
                />
            </div>
            
            {/* Content */}
            <div className="md:text-xl text-lg lg:text-3xl font-serif text-center text-white relative z-20 px-10 md:px-20">
                <span className="text-red-600 font-bold">We’ve seen your desires...</span> <br /><br />
                This isn’t just a template—it’s the beginning of something far beyond your control. <br /><br />
                The path ahead is treacherous, twisting into shadows darker than you dare imagine. Every choice you make pulls you deeper, every step etches your fate into the unknown. <br /><br />
                Our tools don’t just help you create; they reveal the truths you’ve hidden from yourself. Once you begin, there is no turning back. <br />
                <span className="text-red-600 font-bold">Do you dare continue?</span> Or will you be consumed by what you’ve unleashed?
            </div>
        </div>
    )
}

export default ScaryTemp
