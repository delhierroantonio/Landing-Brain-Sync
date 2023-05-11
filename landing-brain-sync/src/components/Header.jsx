import { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const sections = ['Features', 'Pricing', 'Contact'];
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 text-slate-200">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold p-1 bg-secondary">
          Brain Sync<span className="text-primary text-5xl">.</span>{" "}
        </a>
      </div>
      <nav className={`fixed text-slate-300 bg-secondary w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 bg-opacity-95 transition-all duration-500 z-50`}>
        <ul className=' xl:flex justify-between items-center gap-10'>
          {sections.map((section, index) => (
            <li key={index} className='hover:text-slate-50 py-6 text-center'>
              <a href={`#${section}`} className="uppercase font-mono">{section}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  )
}

export default Header