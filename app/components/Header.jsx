import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white text-center p-4 rounded-full md:rounded-xl lg:rounded-2xl'>
      <div className='bg-white'>
        <h1 className='text-2xl font-serif p-4 pb-4'>AUTÓMATAS FINITOS DETERMINISTAS</h1>
      </div>

      <div className='bg-violet-400 p-8 rounded-lg'>
        <nav>
          <ul className="flex flex-wrap justify-center">
            <li className="inline-block p-4 text-center font-serif text-lg hover:bg-violet-950 border-2 m-2 rounded-lg text-white">
              <Link href={'/inicio'}>
                <div className="flex items-center justify-center m-5">Inicio</div>
              </Link>
            </li>
            <li className="inline-block p-4 text-center font-serif text-lg hover:bg-violet-950 border-2 m-2 rounded-lg text-white">
              <Link href={'/ejercicio01'}>
                <div className="flex items-center justify-center m-5">Ejercicio 1</div>
              </Link>
            </li>
            <li className="inline-block p-4 text-center font-serif text-lg hover:bg-violet-950 border-2 m-2 rounded-lg text-white">
              <Link href={'/ejercicio02'}>
                <div className="flex items-center justify-center m-5">Ejercicio 2</div>
              </Link>
            </li>
            <li className="inline-block p-4 text-center font-serif text-lg hover:bg-violet-950 border-2 m-2 rounded-lg text-white">
              <Link href={'/ejercicio03'}>
                <div className="flex items-center justify-center m-5">Ejercicio 3</div>
              </Link>
            </li>
            <li className="inline-block p-4 text-center font-serif text-lg hover:bg-violet-950 border-2 m-2 rounded-lg text-white">
              <Link href={'/ejercicio04'}>
                <div className="flex items-center justify-center m-5">Ejercicio 4</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


