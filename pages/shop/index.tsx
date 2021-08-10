import Head from 'next/head';
import ShopLayout from '../../components/ShopLayout';
import styles from './Shop.module.css';
import Button from '../../components/Button';

const Shop = () => {
  return (
    <ShopLayout>
      <Head>
        <title>Shop - AkuafuLink</title>
      </Head>
      <section className={`${styles.hero} sm:p-36 py-36 px-2`}>
        <div className='grid md:grid-cols-2 gap-4 place-content-center h-48 py-48 md:py-4'>
          <div className='border border-primary-500 text-center rounded-lg p-8 bg-gray-50 hover:shadow-xl'>
            <h2 className='text-3xl text-primary-400 font-semibold mb-5'>
              Fresh foods
            </h2>
            <div className='flex justify-center'>
              <p className='max-w-md mb-4 pb-4'>
                We work with local farmers to bring your desired seasonal fruits
                & vegetables from the farms right to your doorstep
              </p>
            </div>
            <Button
              link='shop/foods'
              text='Start Shopping'
              secondary
              extraStyles='px-8 text-primary-800'
            />
          </div>
          <div className='border border-primary-500 text-center rounded-lg p-8 bg-gray-50 hover:shadow-xl'>
            <h2 className='text-3xl text-primary-400 font-semibold mb-5'>
              Meal Box
            </h2>
            <div className='flex justify-center'>
              <p className='max-w-md mb-4 pb-4'>
                Order our meal box to get everything you need to prepare your
                favourite dish at a goal delivered at your doorstep
              </p>
            </div>
            <Button
              link='shop/foods'
              text='Shop a meal'
              secondary
              extraStyles='px-8 text-primary-800'
            />
          </div>
        </div>
      </section>
    </ShopLayout>
  );
};

export default Shop;
