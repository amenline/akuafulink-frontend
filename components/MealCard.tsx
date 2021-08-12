// import Link from 'next/link';
import { WholeFoods } from '../Types/FoodProducts';
import { useCart } from '../context/CartContext';

const MealCard: React.FC<WholeFoods> = ({
  id,
  name,
  category,
  price,
  quantity,
  picture,
}) => {
  const { cart, addItem, removeItem } = useCart();
  const handleCart = () => {
    addItem({ id, name, category, price, quantity, picture });
  };
  const handleRemoveItem = () => {
    removeItem(id);
  };

  const buttonToShow = (id: string) => {
    if (cart.some((item) => item.id === id)) {
      return (
        <button
          onClick={handleRemoveItem}
          className='text-white text-xs font-normal bg-green-500 py-1 px-2 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110'
        >
          Remove from Cart
        </button>
      );
    } else {
      return (
        <button
          onClick={handleCart}
          className='text-white text-xs font-normal bg-green-500 py-2 px-2 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110'
        >
          Add to Cart
        </button>
      );
    }
  };

  return (
    <div className='container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
      <img className='rounded-xl' src={picture} alt={name} />
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='mt-5 text-2xl font-semibold'>{name}</h1>
          <p className='mt-2'>GHC {price}</p>
        </div>
        <div>{buttonToShow(id)}</div>
      </div>
    </div>
  );
};

export default MealCard;
