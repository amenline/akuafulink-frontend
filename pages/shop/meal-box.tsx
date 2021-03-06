import { useState, useEffect } from 'react';
import Head from 'next/head';
import ShopLayout from '../../components/ShopLayout';
import MealCard from '../../components/MealCard';
import { shopMealBox } from '../../components/mealList';
import { WholeFoods } from '../../Types/FoodProducts';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const MealBox: React.FC<{}> = ({
  meals,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [boxes, setBoxes] = useState<WholeFoods[] | []>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setBoxes(meals);
  }, [meals]);

  return (
    <ShopLayout back>
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
                className='label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-xs cursor-text'
              >
                Search
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center p-10'>
        {boxes.length > 0
          ? boxes.map((food, x) => (
              <MealCard
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
  const meals: WholeFoods[] = shopMealBox;
  return {
    props: { meals },
  };
};

export default MealBox;
