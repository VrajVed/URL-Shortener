import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-16  bg-purple-700 flex justify-between px-3 items-center text-white ">
        <div className="logo font-bold text-lg">
            BitLinks
        </div>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/generate"}><li>Shorten</li></Link>
            <Link href={"/contact"}><li>Contact Us</li></Link>
            <li>
                  <Link href={"/generate"}><button>Try Now</button></Link>
                  <Link href={"/github"}><button>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar