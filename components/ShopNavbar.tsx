import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import ShopMobileNav from './ShopMobileNav';

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

const ShopNavbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [textColor, setTextColor] = useState('#000');
  const [navBgColor, setNavBgColor] = useState('#eae7e7');

  return (
    <>
      <nav className='bg-primary-300 items-center nav-bg'>
        <div className='container mx-auto flex px-3 justify-center'>
          <Link href='/'>
            <a className='pt-2'>
              {/* <img src='/logo.svg' alt='Logo' className='hover:shadow-lg' /> */}
              <div className='hover:shadow-lg'>
                <Image src={logo} alt='Akuafulink logo' />
              </div>
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
              <span className='inline-block'>CART</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-shopping-cart inline-block'
              >
                <circle cx='9' cy='21' r='1'></circle>
                <circle cx='20' cy='21' r='1'></circle>
                <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
              </svg>
            </NavItem>
            <NavItem
              link='login'
              textColor={'#fff'}
              extraClasses={'bg-primary-500 hover:bg-primary-800'}
            >
              LOGIN
            </NavItem>
          </ul>
          <ShopMobileNav
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

export default ShopNavbar;
