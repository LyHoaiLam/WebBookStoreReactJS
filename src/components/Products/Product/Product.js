
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import anh1 from '../../../assets/3tHrxL1JReWwXWUv_3.jpg'
import { Routes, Route} from 'react'
import HomePage from '../../pages/Home';





const arrayBook = [
    {
        id: 1,
        title: "The Jungle Book",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 2,
        title: "The Story of My Life",
        img: '../../assets/9Nro9JJzjAoTTO5R_5.jpg',
    },
    {
        id: 3,
        title: "Three Men in a Boat",
        img: '../../assets/cvLwYNXyje5f45bW_2.jpg',
    },
    {
        id: 4,
        title: "Othello",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 5,
        title: "The Origin of Species",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 6,
        title: "Nationalism",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 7,
        title: "As a Man Thinketh",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 8,
        title: "The Sherlock Holmes",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 9,
        title: "Relativity",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 10,
        title: "The Art of War",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 11,
        title: "A Little Princess",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',
    },
    {
        id: 12,
        title: "A Passage To India",
        img: '../../assets/3tHrxL1JReWwXWUv_3.jpg',

    }
];


function Product({title, img, price}) {
// console.log(img)

    

    return (
        // <div className='products'>
        //     <div className='ul-product'>

        //             <div className='pointer-product'>
        //                 <img className='img-product' src={img} />
        //                 <h3 className='title-product'>Thao Túng Tâm Lý</h3>
        //                 <h4 className='price-product'>50.000 VNĐ</h4>
        //                 <h4 className='button-product' onClick={() => {
        //                     alert("Đã thêm vào giỏ hàng")
        //                 }}>ADD TO CART <FontAwesomeIcon icon={faCartFlatbed} /></h4>           
        //             </div>             
        //     </div>
        // </div>

        <div>
           
            <div className='product'>
                <div>
                    <img className='img-product' style={{width: "350px", height: "420px"}} src={img} />
                </div>

                <div className='product-infor'>
                    <div className='product-title'>
                        <h6>{title}</h6>
                    </div>
                    <div className='product-price'>
                        <h6>{price}.000 VNĐ</h6>
                    </div>
                </div>

                <div>
                    <button className='product-button'>
                        <span>
                            ADD TO CART
                            <span className='product-icon-button'><FontAwesomeIcon icon={faCartFlatbed} /></span>
                        </span>           
                    </button>
                </div>
            </div>
           

            {/* <Routes>
                <Route path="/ProductView" element={<HomePage />} />

            </Routes> */}
        </div>
    )
}

export default Product;

