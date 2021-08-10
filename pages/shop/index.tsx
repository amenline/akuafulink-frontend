import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../../components/Layout';
import styles from '../styles/Home.module.css';
import Button from '../../components/Button';
import bellPepper from '../public/images/bell-pepper.jpg';
import meal from '../public/meal.svg';

const Shop = () => {
  return (
    <Layout>
      <Head>
        <title>Shop - AkuafuLink</title>
      </Head>
    </Layout>
  );
};

export default Shop;
