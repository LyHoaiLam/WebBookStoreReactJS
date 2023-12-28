import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import { faCab, faCake, faEnvelope, faGun, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
       <div>
             <div className='container'>
            <div className="item">
                <h2 style={{marginLeft: "15px"}} className='padding-bottom'>Book-IT</h2>
                <p className='padding-top'> Book-IT is an online React web application where the customer can
              purchase books online. Through this book store the users can
              search for a book by its title and later can add to the shopping
              cart and finally purchase using credit card transaction.</p>
            </div>
            <div className="item">
                <h2 className='padding-bottom'><span className='hover-content p15px'>PRODUCTS</span></h2>
                <p className='padding-top'><span className='hover-content'>Book IT</span></p>
                <p className='padding-top'><span className='hover-content'>Profile: Lý Hoài Lâm</span></p>

            </div>
            <div className="item">
                <h2 className='padding-bottom'><span className='hover-content p15px'>CONTACTS</span></h2>               
                <div style={{display: "flex"}} className=' hover-content'>
                    <FontAwesomeIcon className='padding-top' icon={faEnvelope} />
                    <p className='padding-top'>hoailam03999.com</p>
                </div>
               
                <div style={{display: "flex"}} className=' hover-content'>
                    <FontAwesomeIcon className='padding-top' icon={faPhone} />
                    <p className='padding-top'>0362685068</p>
                </div>
            </div>

        </div>
        <div className='border-1' style={{display: "flex", justifyContent: "space-around"}}>
            <div>
                <p>2023 Made by BookStore</p>
            </div>
            <div>
            <FontAwesomeIcon className='icon-3' icon={faMedal} />
            <FontAwesomeIcon className='icon-3' icon={faCake} />
            <FontAwesomeIcon className='icon-3' icon={faCab} />
            </div>

        </div>
       </div>
    );
}

export default Footer;