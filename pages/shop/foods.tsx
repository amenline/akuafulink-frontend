import { useState, useEffect } from 'react';
import Head from 'next/head';
import ShopLayout from '../../components/ShopLayout';
import FoodCard from '../../components/FoodCard';
import {
  shopVeges,
  shopFruits,
  shopGrains,
  shopHerbs,
} from '../../components/foodList';
import Button from '../../components/Button';
import { WholeFoods } from '../../Types/FoodProducts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// export const MyButton = ({
//   text,
//   extraStyles,
// }: {
//   text: string;
//   extraStyles?: string;
// }) => {
//   return (
//     <a
//       className={`border-2 p-2 rounded-lg border-primary-500 hover:border-primary-100 ${extraStyles}`}
//     >
//       <button>{text}</button>
//     </a>
//   );
// };

const Foods: React.FC<{}> = ({
  vegetables,
  fruits,
  grains,
  herbs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<WholeFoods[] | []>([]);

  const handleClick = (value: string) => {
    if (value == 'vegetables') {
      setCategory(vegetables);
      setCurrentCategory('vegetables');
    } else if (value == 'fruits') {
      setCategory(fruits);
      setCurrentCategory('fruits');
    } else if (value == 'herbs') {
      setCategory(herbs);
      setCurrentCategory('herbs');
    } else {
      setCategory(grains);
      setCurrentCategory('grains');
    }
  };

  useEffect(() => {
    setCategory(vegetables);
    setCurrentCategory('vegetables');
  }, [vegetables]);

  return (
    <ShopLayout>
      <Head>
        <title>Foods - AkuafuLink</title>
      </Head>
      <div className='grid md:grid-cols-3 gap-4 place-content-center p-10'>
        <div className='md:col-start-2 md:col-span-1'>
          <div className='flex justify-center'>
            <div className='mb-4 relative'>
              <input
                className='input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-primary-900 focus:outline-none active:outline-none active:border-indigo-600'
                id='search'
                type='text'
              />
              <label
                htmlFor='search'
                className='label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text'
              >
                Search
              </label>
            </div>
          </div>
        </div>
        <div className='md:col-start-2 md:col-span-1'>
          <div className='flex justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center'>
              <a
                onClick={() => handleClick('vegetables')}
                className={`border-2 p-2 rounded-lg border-primary-500 hover:border-primary-100 text-center hover:bg-gray-100 ${
                  currentCategory == 'vegetables' ? 'bg-gray-200' : null
                }`}
              >
                <button>Vegetables</button>
              </a>
              <a
                onClick={() => handleClick('fruits')}
                className={`border-2 p-2 rounded-lg border-primary-500 hover:border-primary-100 text-center hover:bg-gray-100 ${
                  currentCategory == 'fruits' ? 'bg-gray-200' : null
                }`}
              >
                <button>Fruits</button>
              </a>
              <a
                onClick={() => handleClick('herbs')}
                className={`border-2 p-2 rounded-lg border-primary-500 hover:border-primary-100 text-center hover:bg-gray-100 ${
                  currentCategory == 'herbs' ? 'bg-gray-200' : null
                }`}
              >
                <button>Herbs</button>
              </a>
              <a
                onClick={() => handleClick('grains')}
                className={`border-2 p-2 rounded-lg border-primary-500 hover:border-primary-100 text-center hover:bg-gray-100 ${
                  currentCategory == 'grains' ? 'bg-gray-200' : null
                }`}
              >
                <button>Grains</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center p-10'>
        {category.length > 0
          ? category.map((food, x) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                category={food.category}
                quantity={food.quantity}
                picture={food.picture}
                price={food.price}
              />
            ))
          : 'Loading'}
      </div>
      <style jsx>{`
        .input {
          transition: border 0.2s ease-in-out;
          min-width: 280px;
        }

        .input:focus + .label,
        .input:active + .label,
        .input.filled + .label {
          font-size: 0.75rem;
          transition: all 0.2s ease-out;
          top: -0.1rem;
          color: #64ae74;
        }

        .label {
          transition: all 0.2s ease-out;
          top: 0.4rem;
          left: 0;
        }
      `}</style>
    </ShopLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const vegetables: WholeFoods[] = shopVeges;
  const fruits: WholeFoods[] = shopFruits;
  const grains: WholeFoods[] = shopGrains;
  const herbs: WholeFoods[] = shopHerbs;
  return {
    props: { vegetables, fruits, grains, herbs },
  };
};

export default Foods;
