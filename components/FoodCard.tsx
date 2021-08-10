// import Link from 'next/link';

interface Props {
  name: string;
  category: string[];
  price: string;
  quantity: string;
  picture: string;
}

const FoodCard: React.FC<Props> = ({
  name,
  category,
  price,
  quantity,
  picture,
}) => {
  return (
    <div className='container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
      <img className='rounded-xl' src={picture} alt={name} />
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='mt-5 text-2xl font-semibold'>Aloe Cactus</h1>
          <p className='mt-2'>GHC {price}</p>
        </div>
        <div>
          <button className='text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 '>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;