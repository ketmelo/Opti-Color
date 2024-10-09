import { useState } from 'react';
import { List } from "@phosphor-icons/react";
import Logo from '../assets/logo.svg';

export default function Header() {
  const [abrirMenu, setabrirMenu] = useState(false);

  const handleMenu = () => {
    setabrirMenu(!abrirMenu);
  };

  return (
    <header className=" relative w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 xl:mt-6 z-10">
      <div className="flex items-center w-full md:w-auto">
        <img src={Logo} alt="Logo" className="h-8 relative md:h-10 xl:h-14 " />
      </div>
      <button onClick={handleMenu} className="block md:hidden text-white absolute right-4 top-2">
        <List size={32} /> 
      </button>
      <nav className={`w-full md:w-auto ${abrirMenu ? 'block' : 'hidden'} md:flex md:space-x-2.5 mt-4 md:mt-2 absolute mt-8 mb-10`}>
        <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 bg-bgverde  xl:bg-opacity-0 font-zen-dots text-xs lg:text-3xl lg:mt-6 xl:ml-48">
          <li><a href="/" className="block text-white py-2 px-4 ">HOME</a></li>
          <li><a href="/Guia" className="block text-white py-2 px-4 xl:ml-20">GUIA</a></li>
          <li><a href="/Materiais" className="block text-white py-2 px-4 xl:ml-20">MATERIAIS</a></li>
          <li><a href="/Participantes" className="block text-white py-2 px-4 xl:ml-20">PARTICIPANTES</a></li>
          <li><a href="/Ref" className="block text-white py-2 px-4 xl:ml-20">REF</a></li>
        </ul>
      </nav>
    </header>
  );
}
