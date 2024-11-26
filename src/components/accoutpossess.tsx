import Link from 'next/link'
import React from 'react'

function AccountPossess() {
    return (
        <div className="bg-black min-h-screen md:max-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
            <div className="text-xl lg:text-2xl text-white text-center px-4">
                Alright, you’ve made it this far—let’s talk about what really matters. <br /><br />
                If you’re here to buy a template, head over to our **Templates** section and find exactly what you need. <br /><br />
                But if you’ve got bigger ideas—like selling your own templates—we’ve got a place for you too. <br />
                Join us, and we’ll guide you every step of the way to bring your vision to life.
            </div>
            <button className="backdrop-blur-md border-2 border-white rounded-full bg-white text-black px-6 py-3 mt-6 hover:bg-gray-200 transition duration-300">
                <Link href="/signin">Join Us</Link>
            </button>
        </div>
    )
}

export default AccountPossess
