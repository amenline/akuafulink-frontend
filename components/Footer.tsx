import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import facebookIcon from '../public/icons/facebook.svg';
import instagramIcon from '../public/icons/instagram.svg';
import twitterIcon from '../public/icons/twitter.svg';
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
                  <div className='pr-2 inline-block'>
                    <Image src={facebookIcon} alt='Facebook' />
                  </div>
                  Facebook
                </a>
              </Link>
              <Link href='#'>
                <a
                  className='block py-1 hover:text-primary-400'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='pr-2 inline-block'>
                    <Image src={twitterIcon} alt='Twitter' />
                  </div>
                  Twitter
                </a>
              </Link>
              <Link href='#'>
                <a
                  className='block py-1 hover:text-primary-400'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='pr-2 inline-block'>
                    <Image src={instagramIcon} alt='Instagram' />
                  </div>
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
              <Link href='/shop/foods'>
                <a className='block py-1 hover:text-primary-400'>Foods</a>
              </Link>
              <Link href='/shop/meal-box'>
                <a className='block py-1 hover:text-primary-400'>City Market</a>
              </Link>
              <Link href='/contact'>
                <a className='block py-1 hover:text-primary-400'>Contact Us</a>
              </Link>
              <Link href='/login?signup'>
                <a className='block py-1 hover:text-primary-400'>Signup</a>
              </Link>
            </nav>
          </section>
          <section>
            <h2 className={`uppercase font-bold mb-3 ${styles.heading}`}>
              Top Selling
            </h2>
            <nav className={`${styles.nav} text-sm`}>
              <Link href='/shop/foods?vegetables'>
                <a className='block py-1 hover:text-primary-400'>Vegetables</a>
              </Link>
              <Link href='/shop/foods?fruits'>
                <a className='block py-1 hover:text-primary-400'>Fruits</a>
              </Link>
              <Link href='/shop/foods?grains'>
                <a className='block py-1 hover:text-primary-400'>Grains</a>
              </Link>
            </nav>
          </section>
        </div>
        <section className={`${styles.nav} text-center py-4`}>
          <nav className='flex justify-center md:hidden'>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/facebook.svg' alt='Facebook' /> */}
                {/* <Image src={facebookIcon} alt='Facebook icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                    stroke='#34613E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/instagram.svg' alt='Instagram' /> */}
                {/* <Image src={instagramIcon} alt='Instagram icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z'
                    stroke='#34613E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16 12.4133C16.1234 13.2455 15.9813 14.0955 15.5938 14.8423C15.2063 15.5891 14.5932 16.1947 13.8416 16.5729C13.0901 16.9512 12.2385 17.0829 11.4078 16.9492C10.5771 16.8155 9.80977 16.4234 9.21485 15.8284C8.61993 15.2335 8.22774 14.4661 8.09408 13.6355C7.96042 12.8048 8.09208 11.9532 8.47034 11.2016C8.8486 10.4501 9.4542 9.83701 10.201 9.44951C10.9478 9.06201 11.7978 8.91986 12.63 9.04327C13.4789 9.16915 14.2649 9.56473 14.8717 10.1716C15.4785 10.7784 15.8741 11.5643 16 12.4133Z'
                    stroke='#34613E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.5 6.5H17.51'
                    stroke='#34613E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
            <Link href='#'>
              <a className='p-2 m-1' target='_blank' rel='noopener noreferrer'>
                {/* <img src='/icons/twitter.svg' alt='Twitter' /> */}
                {/* <Image src={twitterIcon} alt='Twitter icon' /> */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z'
                    stroke='#34613E'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
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
