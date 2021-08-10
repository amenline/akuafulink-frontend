import Link from 'next/link';
import Image from 'next/image';
import miniLogo from '../public/mini-logo.svg';

interface LinkProps {
  link: string;
  extraClasses?: string;
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  textColor: string;
  bgColor: string;
}

const NavItem: React.FC<LinkProps> = ({ children, link, extraClasses }) => {
  return (
    <>
      <hr />
      <li
        className={`p-2 m-1 rounded-md focus:bg-primary-100 text-lg ${extraClasses}`}
      >
        <Link href={`/${link}`}>
          <a>{children}</a>
        </Link>
      </li>
    </>
  );
};

const ShopMobileNav: React.FC<Props> = ({
  open,
  setOpen,
  textColor,
  bgColor,
}) => {
  return (
    <div className={`${!open && 'hidden'}`}>
      <div
        className='md:hidden fixed top-0 right-0 h-full w-full bg-gray-500 bg-opacity-50 transition-all ease-linear duration-500'
        onClick={() => {
          setOpen(false);
        }}
      />
      <div className='md:hidden fixed top-0 right-0 h-full w-3/4 xs:w-4/6 sm:w-1/2 bg-white shadow-2xl transition-all ease-linear duration-500'>
        <div className='flex p-3 bg-primary-100 items-center nav-bg'>
          <Link href='/'>
            <a>
              <Image src={miniLogo} alt='An alternative logo' />
              {/* <img src='/mini-logo.svg' alt='mini logo' /> */}
            </a>
          </Link>
          <span className='flex-1' />
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              setOpen(false);
            }}
          >
            <path
              d='M20.197 2.837L21.064 3.704L12.854 11.995L21.162 20.197L20.296 21.064L12.004 12.854L3.774 21.165L2.934 20.325L11.147 12.005L2.835 3.774L3.675 2.934L11.994 11.146L20.197 2.837V2.837ZM20.188 0L11.976 8.318L3.666 0.114L0 3.781L8.321 12.021L0.114 20.334L3.781 24L12.018 15.682L20.303 23.886L24 20.188L15.685 11.979L23.886 3.697L20.188 0V0Z'
              fill={textColor}
            />
          </svg>
        </div>
        <div>
          <ul className='mt-5'>
            <NavItem link='products'>PRODUCTS</NavItem>
            <NavItem link='about'>ABOUT</NavItem>
            <NavItem link='cart'>
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
            <NavItem link='login' extraClasses='bg-primary-400 color-white'>
              LOGIN
            </NavItem>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .nav-bg {
          background-color: ${bgColor};
        }
      `}</style>
    </div>
  );
};

export default ShopMobileNav;
