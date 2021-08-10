import Head from 'next/head';
import Image from 'next/image';
import ShopLayout from '../../components/ShopLayout';
import styles from './Shop.module.css';
import Button from '../../components/Button';

const Foods = () => {
  return (
    <ShopLayout>
      <Head>
        <title>Foods - AkuafuLink</title>
      </Head>
      <div>
        <input type='text' className='border border-primary-500' />
      </div>
      <div></div>
    </ShopLayout>
  );
};

export default Foods;
