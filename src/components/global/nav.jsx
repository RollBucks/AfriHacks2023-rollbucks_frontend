import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

export const Nav = () => {
    const desktopMenu = <nav className='font-body flex items-center text-sm justify-between px-[32px] py-[20px] border-b-[2px] border-white-500 bg-white-400 z-[1000] fixed w-full'>
        <img src={logo} alt='logo icon' width={'102px'} />

        <ul className='flex items-center gap-8 pl-10'>
            <li><a href='/#home' className='hover:text-blue-300'>Home</a></li>
            <li><a href='/#about' className='hover:text-blue-300'>About</a></li>
            <li><a href='/#features' className='hover:text-blue-300'>Features</a></li>
            {/* <li><a href='/#faq' className='hover:text-blue-300'>FAQ</a></li>
            <li><a href='/#contact' className='hover:text-blue-300'>Contact</a></li> */}
        </ul>

        <span className='space-x-2'>
            <Link to='login' className='font-medium text-white-400 rounded-xl py-4 px-3 text-sm bg-black-400 hover:bg-yellow hover:text-black-400'>Log in</Link>
            <Link to='register' className='font-medium text-black-400 rounded-xl py-4 px-3 text-sm border-[1px] border-black-400 hover:bg-yellow hover:border-yellow'>Create free account</Link>
        </span>
    </nav>

    return (
        <>
            {desktopMenu}
        </>
    )
}