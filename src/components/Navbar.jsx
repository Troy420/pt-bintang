import {useState} from 'react';
import {close, menu, logoBintang} from '../assets';
import {navLinks} from '../constants';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const { t, i18n } = useTranslation();

  function clickLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex justify-between items-center navbar'>
      <img src={logoBintang} alt="Bintang" className='h-[120px]'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-russianBlack`}
          >
            <a href={`#${nav.id}`}>
              {t(`${nav.title}`)}
            </a>
          </li>
        ))}
      </ul>

      <div className="lang-button px-10">
        <button 
          className='mr-5'
          onClick={() => {clickLanguage('en')}}
        >
          English
        </button>
        <button
          onClick={() => {clickLanguage('id')}}
        >
          Indonesian
        </button>
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div 
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-gradient-2 absolute top-[100px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  z-10`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar