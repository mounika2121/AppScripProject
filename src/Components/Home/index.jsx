import { useState,useEffect } from 'react';
import ProductCard from '../ProductCard';
import Header from '../Header';
import { FaAngleDown } from "react-icons/fa";
import './index.css';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [occasion, setOccasion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabric, setFabric] = useState(false);
    const [segment, setSegment] = useState(false);
    const [suitable, setSuitable] = useState(false);
    const [raw, setRaw] = useState(false);
    const [pattern,setPattern] = useState(false);
    const [hideFilters, setHideFilters] = useState(false);

    const onClickHideFilters =() => {
        setHideFilters(prev=> !prev);
    }

    const OnClickArrow = () =>{
        setShowFilters(prev=> !prev);
    }

    const OnClickOccasion = () => {
        setOccasion(prev => !prev);
    }
    
    const OnClickWork = () => {
        setWork(prev => !prev);
    }

    const OnClickFabric = () => {
        setFabric(prev => !prev);
    }

    const OnClickSegment = () => {
        setSegment(prev => !prev);
    }

    const OnClickSuitable = () => {
        setSuitable(prev => !prev);
    }

    const OnClickRaw = () => {
        setRaw(prev => !prev);
    }

    const OnClickPattern = () => {
        setPattern(prev => !prev);
    }


    const totalItems = products.length;



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

    return(
        <div>
            <Header />
            <hr className='hr-line'/>
        <div className='banner-content'>
            <h1 className='banner-heading'>DISCOVER OUR PRODUCTS</h1>
            <p className='banner-paragraph'>Lorem ipsum dolor sit amet consectetur.Amet est posuere rhoncus scelerisque. Dolor interger scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
        <div className='filter-products-container'>
            <hr className='hr-line-filters'/>
            <div className='filter-hide-show-container'>
                <div className='total-items-hide-container'>
                    <p className='total-items'>{totalItems} ITEMS</p>
                    <div>
                        <button type='button' className='hide-filters' onClick={onClickHideFilters}>HIDE FILTERS</button>
                    </div>
                </div>
                <div>
                    <select className='select-options'>
                        <option>RECOMMENDED</option>
                        <option>NEWEST FIRST</option>
                        <option>POPULAR</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>PRICE: LOW TO HIGH</option>
                    </select>
                </div>
            </div>
            <hr className='hr-line-filters'/>
        </div>
        <div className='filter-products-container-md'>
            <hr className='hr-line-filters-md'/>
            <div className='filters-buttons-in-md'>
                <button className='filter-btn'>FILTER</button>
                <hr className='hr-line-md'/>
                <select className='select-options'>
                    <option>RECOMMENDED</option>
                    <option>NEWEST FIRST</option>
                    <option>POPULAR</option>
                    <option>PRICE: HIGH TO LOW</option>
                    <option>PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <hr className='hr-line-filters-md'/>
        </div>
        <div className='products-and-filter-container'>
            <div className='products-and-filters'>
                {hideFilters && (
                <div className='filters-bar'>
                    <input type='checkbox' className='checkbox-input' id="customize" />
                    <label htmlFor='customize' className='customize-label'>CUSTOMIZBLE</label>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>IDEAL FOR</b></p>
                            <button className='arrow-btn' onClick={OnClickArrow}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {showFilters && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>OCCASION</b></p>
                            <button className='arrow-btn' onClick={OnClickOccasion}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {occasion && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>WORK</b></p>
                            <button className='arrow-btn' onClick={OnClickWork}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {work && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>FABRIC</b></p>
                            <button className='arrow-btn' onClick={OnClickFabric}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {fabric && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>SEGMENT</b></p>
                            <button className='arrow-btn' onClick={OnClickSegment}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {segment && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>SUITABLE FOR</b></p>
                            <button className='arrow-btn' onClick={OnClickSuitable}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {suitable && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>RAW MATERIALS</b></p>
                            <button className='arrow-btn' onClick={OnClickRaw}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {raw && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                    <div>
                        <div className='ideal-for-container'>
                            <p><b>PATTERN</b></p>
                            <button className='arrow-btn' onClick={OnClickPattern}>
                                <FaAngleDown size={20} color='gray' />
                            </button>
                        </div>
                        <span>All</span>
                        {pattern && (
                            <div>
                            <p className='unselect-all'>Unselect all</p>
                            <input type='checkbox' className='checkbox-input' id="men" />
                            <label htmlFor='men'>Men</label><br />
                            <input type='checkbox' className='checkbox-input' id="women" />
                            <label htmlFor='women'>Women</label><br />
                            <input type='checkbox' className='checkbox-input' id="kids" />
                            <label htmlFor='kids'>Baby & Kids</label>
                        </div>
                        )}
                    </div>
                </div>
                )}
                {/* hide */}
                <div className='products-container'>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home