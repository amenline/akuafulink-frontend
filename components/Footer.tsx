import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import styles from '../styles/Utilities.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <svg
        width='100%'
        viewBox='0 0 1152 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M843.466 26.823C787.786 32.2097 733.872 41.865 678.346 47.7211C599.251 56.0684 516.883 56.5726 437.914 47.9158C361.171 39.5236 281.597 19.0548 205.766 8.65565C138.518 -0.570279 65.0976 -4.36949 0 7.15794V63H1152V41.3458C1053.63 21.9483 946.931 16.9258 843.466 26.823Z'
          fill='#EAE7E7'
        />
      </svg>

      <footer className={`${styles.grayish} text-white text-fonts pt-`}>
        <div className='container m-auto py-4 flex justify-evenly'>
          <section className='hidden md:block'>
            {/* <h2 className='uppercase font-bold mb-3'></h2> */}
            <Image src={logo} alt='AkuafuLink logo' />
            <nav className={`${styles.nav} text-sm`}>
              <Link href='#'>
                <a
                  className='block py-1 hover:text-primary-400'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='pr-2 inline-block'
                    src='/icons/facebook.svg'
                    alt='Facebook'
                  />
                  Facebook
                </a>
              </Link>
              <Link href='#'>
                <a
                  className='block py-1 hover:text-primary-400'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='pr-2 inline-block'
                    src='/icons/twitter.svg'
                    alt='Twitter'
                  />
                  Twitter
                </a>
              </Link>
              <Link href='#'>
                <a
                  className='block py-1 hover:text-primary-400'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='pr-2 inline-block'
                    src='/icons/instagram.svg'
                    alt='Instagram'
                  />
                  Instagram
                </a>
              </Link>
            </nav>
          </section>
          <section>
            <h2 className={`uppercase font-bold mb-3 ${styles.heading}`}>
              Quick Links
            </h2>
            <nav className={`${styles.nav} text-sm`}>
              <Link href='#'>
                <a className='block py-1 hover:text-primary-400'>Wholesale</a>
              </Link>
              <Link href='#'>
                <a className='block py-1 hover:text-primary-400'>City Market</a>
              </Link>
              <Link href='#'>
                <a className='block py-1 hover:text-primary-400'>Contact Us</a>
              </Link>
              <Link href='#'>
                <a className='block py-1 hover:text-primary-400'>Signup</a>
              </Link>
            </nav>
          </section>
          <section>
            <h2 className={`uppercase font-bold mb-3 ${styles.heading}`}>
              Top Selling
            </h2>
            <nav className={`${styles.nav} text-sm`}>
              <Link href='/'>
                <a className='block py-1 hover:text-primary-400'>Vegetables</a>
              </Link>
              <Link href='/news'>
                <a className='block py-1 hover:text-primary-400'>Fruits</a>
              </Link>
              <Link href='/fixtures'>
                <a className='block py-1 hover:text-primary-400'>Grains</a>
              </Link>
            </nav>
          </section>
        </div>
        <section className={`${styles.nav} text-center py-4`}>
          <nav className='flex justify-center md:hidden'>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/facebook.svg' alt='Facebook' />
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/instagram.svg' alt='Instagram' />
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/twitter.svg' alt='Twitter' />
              </a>
            </Link>
          </nav>
          <p className='text-sm p-1'>
            &copy; {new Date().getFullYear()}{' '}
            <Link href='/'>
              <a className='hover:text-primary-400'>AkuafuLink.</a>
            </Link>{' '}
            All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};
export default Footer;
