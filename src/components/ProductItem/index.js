import './index.css';
import CircleImage from '../../images/Oval.png'

export const ProductItem = ({ product }) => {
    
    return (
        <div className='product-item'>
            <div className='image-container'><img alt='product' src={product.img}></img></div>
            <p className='product-tag'>{product.tags}</p>
            <h2 className='product-title'>{product.title}</h2>
            <span className='product-autor'>{product.autor}</span>
            <img alt='circle' src={CircleImage}></img>
            <span className='product-date'>{product.date}</span>
            <img alt='circle' src={CircleImage}></img>
            <span className='product-views'>{product.views}</span>
            <p className='product-text'>{product.text}</p>
        </div>
    )
}