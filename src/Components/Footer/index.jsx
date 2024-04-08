import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import './index.css';

const Footer = () => (
    <div className='footer-container'>
        <div className="footer-for-lg-divices">
        <div className='footer-lg-first-part'>
            <div>
                <h3>BE THE FIRST TO KNOW</h3>
                <p>Sign up for updates from metta muse.</p>
                <div className="subscribe-input-button">
                    <input type="text" placeholder='Enter your e-mail...' className='footer-email-input' />
                    <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
                </div>
            </div>
            <div>
                <h3>CONTACT US</h3>
                <p>+442211335360</p>
                <p>customercare@metamuse.com</p>
                <h3>CURRENCY</h3>
                <div className='footer-usa-container'>
                    <img src= "https://res.cloudinary.com/djbs4yqbz/image/upload/v1712535260/United_States_of_America_US_va2im7.png" alt="footer-usa-logo" />
                    <h3> . USD</h3>
                </div>
                <p className="footer-transaction">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr className='hr-line-filters'/>
        <div className='footer-lg-first-part'>
            <div>
                <h3>metta muse</h3>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliancees Docs</p>
            </div>
            <div>
                <h3>QUICK LINKS</h3>
                <p>Orders & Shipping</p>
                <p>Join/Login as a Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div>
                <h3>FOLLOW US</h3>
                <button className="footer-icons" type="button" ><FaInstagram size={20} color="white"/></button>
                <button className="footer-icons" type="button"><FaLinkedin size={20} color="white"/></button>
                <h3>metta muse ACCEPTS</h3>
                <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712538064/Frame_136278_v7deuz.png" alt="cards" />
            </div>
        </div>
        <div>
            <div className="copyright-container">
                <p>Copyright</p>
                <MdOutlineCopyright />
                <p>2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
        </div>
        <div className="footer-for-md-divices">
            <div className="footer-lg-first-part">
            <div>
                <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from metta muse.</p>
                    <div>
                        <input type="text" placeholder='Enter your e-mail...' className='footer-email-input' />
                        <button type='button' className='subscribe-btn'>SUBSCRIBE</button>
                    </div>
            </div>
            <hr className='hr-line-footer'/>
            <div>
                <h3>CALL US</h3>
                <div>
                    <p>+442211335360</p>
                    <p>customercare@metamuse.com</p>
                </div>
            </div>
            <hr className='hr-line-footer'/>
            <div>
            <h3>CURRENCY</h3>
                <div className='footer-usa-container'>
                    <img src= "https://res.cloudinary.com/djbs4yqbz/image/upload/v1712535260/United_States_of_America_US_va2im7.png" alt="footer-usa-logo" />
                    <h3> . USD</h3>
                </div>
            </div>
            <hr className='hr-line-footer'/>
            <div>
                <h3>metta muse ACCEPTS</h3>
                <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1712538064/Frame_136278_v7deuz.png" alt="cards" className="cards-image" />
            </div>
            <div>
            <div className="copyright-container">
                <p>Copyright</p>
                <MdOutlineCopyright />
                <p>2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
        </div>
        </div>
    </div>
)

export default Footer;

