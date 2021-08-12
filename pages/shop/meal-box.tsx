import Head from 'next/head';
import Image from 'next/image';
import ShopLayout from '../../components/ShopLayout';
import styles from './Shop.module.css';
import Button from '../../components/Button';

const MealBox = () => {
  return (
    <ShopLayout back>
      <Head>
        <title>Meal Box - AkuafuLink</title>
      </Head>
      <div>
        <input type='text' />
      </div>
    </ShopLayout>
  );
};

export default MealBox;
