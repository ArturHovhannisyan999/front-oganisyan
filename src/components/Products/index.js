import './index.css';
import { ProductItem } from '../ProductItem';
import { useEffect, useState } from 'react';
import { handleSearch } from './logic';

export const Products = ({ products }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {
        setFilteredProducts(products);
    }, [products])

    const handleChangeValue = (value) => {
        handleSearch(products, setFilteredProducts, setInputValue, value);
    }

    return (
        <div className='wrapper'>
            <div className="products">
                <input className='search-input' onChange={(e) => handleChangeValue(e.target.value)} value={inputValue} placeholder='Type here to search'/>
                {filteredProducts && filteredProducts.length > 0 ? (
                    <div>
                        {filteredProducts.map((product, index) => (
                            <ProductItem key={index} product={product}/>
                        ))}
                    </div>
                ) : (
                    <h3>No Products</h3>
                )}
            </div>
        </div>
    )
}