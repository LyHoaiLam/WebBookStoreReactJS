// import React from 'react';
// import Product from './Product/Product';

// function Products() {
//     return (
//         <div>
//             <h2 style={{paddingTop: "20px", textAlign: "center", color: "red"}} className='feature'>FEATURE</h2>



//             <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around" }}>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"The Jungle Book"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product  title={"Three Mean in a Boat"}/>
                 
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"The Story of My Life"}/>
//                 </li>
//             </ul>

            
//             <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around" }}>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"The Othello"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product  title={"The Origin of Species"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"Notionalism"}/>
//                 </li>
//             </ul>
//             <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around" }}>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"As a Main Thinketh"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product  title={"The Serlock Holmes"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"Realativity"}/>
//                 </li>
//             </ul>
//             <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around" }}>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"The Art of War"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product  title={"A Little Princess"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"A Passage To India"}/>
//                 </li>
//             </ul>

//             <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around" }}>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"Ghosts of The Silent Hills"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product  title={"Journey the Centre of Earth"}/>
//                 </li>
//                 <li style={{boxSizing: 'border-box', padding: '10px' }}>
//                     <Product title={"Treasure island"}/>
//                 </li>
//             </ul>
        
//            </div>
            
       
//     );
// }

// export default Products;


import React from 'react';
import Product from './Product/Product';
import anh1 from  '../../assets/3tHrxL1JReWwXWUv_3.jpg';
import anh2 from '../../assets/9Nro9JJzjAoTTO5R_5.jpg';
import anh3 from '../../assets/HqU0EVvijKqWdorm_1.jpg';
import anh4 from '../../assets/L2Cj334oBGjdbHmK_1.jpg';
import anh5 from '../../assets/OeHGkKjbw76Fu6li_71gkdmrYTrL.jpg';
import anh6 from '../../assets/QShoIhh4WPwnKb82_71cH7dI2kIS.jpg';
import anh7 from '../../assets/pihstQgqSOde2WFB_1.jpg';
import anh8 from '../../assets/pJbSH5L3KUwFl7Tf_1.jpg';
import anh9 from '../../assets/rpXLx3xlXM1iWs5h_71NUqTiGrOL.jpg';
import anh10 from '../../assets/jmHrbyaTb3c6aRym_book1.jpg';
import anh11 from '../../assets/il0F5AytRzE9fdoO_1.jpg';
import anh12 from '../../assets/cvLwYNXyje5f45bW_2.jpg';

import './Products.css'



// The Jungle Book
 

const arrayBook = [
    {
        id: 1,
        title: "The Story of My Life",
        img: anh1,
        price: 70.000

    },
    {
        id: 2,
        title: "Three Men in a Boat",
        img: anh2,
        price: 50.000

    },
    {
        id: 3,
        title: "The Art of War",
        img: anh3,
        price: 129.000

    },
    {
        id: 4,
        title: "Sherlock Holmes",
        img: anh4,
        price: 90.000

    },
    {
        id: 5,
        title: "A Little Princess",
        img: anh5,
        price: 75.000

    },
    {
        id: 6,
        title: "Othello",
        img: anh6,
        price: 55.000

    },
    {
        id: 7,
        title: "The Origin of Species ",
        img: anh7,
        price: 170.000

    },
    {
        id: 8,
        title: "Nationalism",
        img: anh8,
        price: 222.000

    },
    {
        id: 9,
        title: "Relativity",
        img: anh9,
        price: 79.000

    },
    {
        id: 10,
        title: "As a Man Thinketh",
        img: anh10,
        price: 70.000

    },
    {
        id: 11,
        title: "Relativity",
        img: anh11,
        price: 39.000

    },
    {
        id: 12,
        title: "A Passage To India",
        img: anh12,
        price: 300.000

    }
];

function Products() {
    const productComponents = arrayBook.slice(0, 12).map(book => (
        <li key={book.id} style={{ boxSizing: 'border-box', padding: '10px', marginBottom: "60px" }}>
            <Product title={book.title} img={book.img.toString()} price={book.price} />
        </li>
    ));

    return (
        <div>
            <h2 style={{ paddingTop: "20px", textAlign: "center", color: "red" }} className='feature'>FEATURE</h2>

            <ul className='product-ul' style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 40, justifyContent: "space-around"}}>
                {productComponents}
            </ul>
        </div>
    );
}

export default Products;

