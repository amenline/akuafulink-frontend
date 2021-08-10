import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/Layout';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import bellPepper from '../public/images/bell-pepper.jpg';
import meal from '../public/meal.svg';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${styles.hero}`}>
        <div className='bg-black bg-opacity-50 sm:p-36 py-36 px-2'>
          <div className='grid md:grid-cols-3 gap-2 place-content-center h-48'>
            <div className='hidden sm:block'></div>
            <h1 className='text-3xl text-center max-w-sm text-white font-semibold'>
              Digitally transforming the food supply chain.
            </h1>
            <div className='hidden sm:block'></div>
          </div>
          <div className='grid md:grid-cols-3 gap-2 place-content-center h-16'>
            <div className='hidden md:block'></div>
            <div className='text-center max-w-sm'>
              <Button
                secondary
                link='products'
                text='Products and Services'
                extraStyles='px-6 text-white'
              />
            </div>
            <div className='hidden md:block'></div>
          </div>
          <div className='grid md:grid-cols-3 gap-2 place-content-center h-16'>
            <div className='hidden md:block'></div>
            <div className='text-center max-w-sm'>
              <Button
                link='shop'
                text='Start Ordering'
                extraStyles='px-14 text-white'
              />
            </div>
            <div className='hidden md:block'></div>
          </div>
        </div>
      </section>
      <section className={`${styles.about} p-20`}>
        <div className='grid md:grid-cols-2 gap-8 place-content-center'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
            <div></div>
            <div className={`${styles.basket}  md:col-start-2 md:col-span-2`}>
              <Image src={bellPepper} alt='Image of green pepper in a basket' />
            </div>
          </div>
          <div>
            <h2 className='text-3xl text-primary-400 font-semibold mb-5'>
              Giving value to the smallholder farmers
            </h2>
            <p className='mb-10'>
              Akuafulink aims to provide smallholder farmers with a ready market
              at fair market prices while supplying the needs of our customers
            </p>
            <div className='max-w-sm'>
              <Button
                secondary
                link='about'
                text='About AkuafuLink'
                extraStyles='px-6 text-black'
              />
            </div>
          </div>
        </div>
      </section>
      <svg
        width='100%'
        viewBox='0 0 1152 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M308.534 73.177C364.214 67.7903 418.128 58.135 473.654 52.2789C552.749 43.9316 635.117 43.4274 714.086 52.0842C790.829 60.4764 870.403 80.9452 946.234 91.3443C1013.48 100.57 1086.9 104.369 1152 92.8421V0H0V58.6542C98.367 78.0517 205.069 83.0742 308.534 73.177Z'
          fill='#EAE7E7'
        />
      </svg>
      <section className={`${styles.order} bg-white p-30`}>
        <div className='grid md:grid-cols-2 gap-8 place-content-center'>
          <div className='grid md:grid-cols-4 gap-2 place-content-center'>
            <div className='md:col-start-2 md:col-span-3'>
              <h2 className='text-3xl text-primary-400 font-bold sm:mb-8 mb-16 pt-5 text-center'>
                Place your order now
              </h2>
            </div>
            <div className='md:col-start-2 md:col-span-3 text-center'>
              <Button
                link='login'
                text='Login / Signup'
                extraStyles='px-10 text-white'
              />
            </div>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
            <div></div>
            <div className={`${styles.basket}  md:col-start-1 md:col-span-2`}>
              <Image
                src={meal}
                alt='An illustration of multiple ordered meals'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
