import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import MobileNav from './MobileNav';

interface Props {
  link: string;
  textColor: string;
  extraClasses?: string;
}

export const NavItem: React.FC<Props> = ({
  children,
  link,
  textColor,
  extraClasses,
}) => {
  return (
    <li
      className={`p-2 m-1 border border-transparent rounded-lg hover:border-primary-100 hover:border-solid transition-all ease-linear duration-200 nav-text font-medium ${extraClasses}`}
    >
      <Link href={`/${link}`}>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        .nav-text {
          color: ${textColor};
        }
      `}</style>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [textColor, setTextColor] = useState('#000');
  const [navBgColor, setNavBgColor] = useState('#fff');

  return (
    <>
      <nav className='bg-primary-300 items-center nav-bg'>
        <div className='container mx-auto flex px-3 justify-center'>
          <Link href='/'>
            <a className='pt-3'>
              <img src='/logo.svg' alt='Logo' className='hover:shadow-lg' />
              {/* <div className='hover:shadow-md'>
                <Image src={logo} alt='Akuafulink logo' />
              </div> */}
            </a>
          </Link>
          <div className='flex-1'></div>
          <svg
            width='45'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`md:hidden pr-2 ${textColor}`}
            onClick={() => setOpenDrawer(true)}
          >
            <path
              d='M3 12H21'
              stroke={textColor}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3 6H21'
              stroke={textColor}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3 18H21'
              stroke={textColor}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <ul className='myul hidden md:flex m-1 text-sm'>
            <NavItem link='products' textColor={textColor}>
              PRODUCTS
            </NavItem>
            <NavItem link='about' textColor={textColor}>
              ABOUT
            </NavItem>
            <NavItem link='contact' textColor={textColor}>
              CONTACT
            </NavItem>
            <NavItem
              link='shop'
              textColor={'#fff'}
              extraClasses={'bg-primary-500 hover:bg-primary-800'}
            >
              SHOP
            </NavItem>
          </ul>
          <MobileNav
            open={openDrawer}
            setOpen={setOpenDrawer}
            textColor={textColor}
            bgColor={navBgColor}
          />
        </div>
        <style jsx>{`
          .nav-bg {
            background-color: ${navBgColor};
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
