import { BsHeart } from "react-icons/bs";
import './index.css'

const ProductCard = ({ image, title, price }) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} className='product-image' />
        <h3 className='product-title'>{title}</h3>
        <div className="amount-like-container">
          <p className='amount'>${price}</p>
          <BsHeart />
        </div>
      </div>
    );
  };

  export default ProductCard