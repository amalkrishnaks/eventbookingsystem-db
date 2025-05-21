import { useNavigate } from 'react-router-dom';
import video from "../../../public/homevideo.mp4"
import Footer from '../../Components/Footer/footer';
import './home.css';
import Contact from '../Contact/contact';

const Home=()=>{
    const navigate=useNavigate();


    return( 
        
        <div className="home">
                <div className="homefirst-section">
                    <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                   </video>
                </div>
                <div className="homesecond-section">
                    <div className="center">
                       <div className="leftpart">
                            <h1 className='abouth'>About</h1>
                            <p className='about'>Welcome to AK Booking,our ultimate destination for discovering and booking exciting events! Whether you're looking for concerts, workshops, conferences, or festivals, we provide a seamless experience to help you find, book, and enjoy amazing events.</p>
                            <h1 className='abouth'>What We Offer</h1>
                            <p className='about'> Wide Range of Events – From music concerts to business conferences, we have something for everyone.</p>
                            <p className='about'>Secure Payments – Pay confidently with Razorpay and crypto verification.</p>
                            <p className='about'> Easy Booking Process – Choose your event, select tickets, and complete your payment in just a few clicks.</p>
                    </div>
                    <div className="rightpart">
                        <img src="/public/coldplay.png"/>
                    </div> 
                    
                    </div>
                </div>
                <div className="homethird-section">
                    <div className="meet">
                         <h1>Meet Artists</h1>
                    </div>
                    <div className="artist">
                       
                        <div className="names">
                            <img src='/public/vedan.jpg'/>
                        </div>
                        <div className="names1">
                            <div className="rightimg">
                                <img src='/public/dabzee.jpg'/>
                            </div>
                            <div className="rightimg1">
                                <img src='/public/rihana.jpg'/>
                            </div>
                        </div>
                     </div>
                </div>

                {/* <div className="homefourth-section">

                </div> */}
                <div className="contact">
                    <Contact/>
                </div>
                
        </div>
   
    )
};

export default Home;
