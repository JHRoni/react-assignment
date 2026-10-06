import Logo from './assets/logo-text.png';
import { useState } from 'react';
const Nav = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="flex flex-col p-2.5 gap-4 md:flex-row md:justify-around md:items-center">
           <div className="relative flex justify-between items-center">
    <button className="text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
    </button>

    <img src={Logo} alt="Logo"/>
    <div className={"flex gap-3 md:hidden"}>
                <button className={"rounded-4xl w-20 h-8 text-bold"}>Sign In</button>
                <button className={"rounded-4xl bg-fuchsia-600 w-24 h-8"}>Sign Up</button>
            </div>
          </div>
                <div>
                    <ul className={"hidden md:flex gap-10"}>
                        <li className={"text-black hover:text-fuchsia-600"}><a href="#home">Home</a></li>
                        <li><a href="#Technologies">Technologies</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
            </div>
            <div className={"hidden md:flex gap-3"}>
                <button className={"rounded-4xl w-20 h-8 text-bold"}>Sign In</button>
                <button className={"rounded-4xl bg-fuchsia-600 w-24 h-8"}>Sign Up</button>
            </div>
            {menuOpen && (
                <ul className="flex flex-col gap-4 md:hidden absolute top-16 left-0 w-full bg-white p-4 shadow-md">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Technologies">Technologies</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;