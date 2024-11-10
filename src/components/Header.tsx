'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';

const Header = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow (!show)
  }

  return (
    <div>
      <nav className='headerContainer'>
      <div className={'logo'}>
      <span className='text-white'>GHULAM </span>AKBER
      </div>
        <ul className={`navItems ${show ? "showNav" : "hideNav"}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/contactUs">Contact Us</Link></li>
        </ul>
        <div className='hambtn'>
        <Image 
          src={"/images/svg/bars-solid.svg"}
          alt='Ham'
          width={30}
          height={1}
          onClick={handleToggle}
          className={show ? "hidden": "block"}
          />
           <Image 
          src={"/images/svg/xmark-solid.svg"}
          alt='cross'
          width={30}
          height={1}
          onClick={handleToggle}
          className={show ? "block": "hidden"}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header
