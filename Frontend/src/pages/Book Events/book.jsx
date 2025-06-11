import { useState,useEffect } from 'react';
// import axios from '../../Utils/axios';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import { useLocation, useParams } from 'react-router-dom';
import './book.css';
import Footer from '../../Components/Footer/footer';
 



const Booking=()=>{
    const {state}=useLocation()
    const{event,ticketCount,totalPrice}=state;
    const [booking,setBooking]=useState({firstname:'',lastname:'',email:'',Address:'',state:'',city:'',zipcode:'',phonenumber:''})
    

    // const pricePerTicket=400;    //example ticket price

    const onChange=(e, key)=>{
        setBooking({...booking,[key]: e.target.value});
    }
    // console.log(booking);
    let orderData={
        address:booking,
        items:event,
        amount:totalPrice,
        
    }
   
    
    const handlePayment = async () => {
        const response = await axios.post('http://localhost:4000/api/order/create',orderData,{ amount:totalPrice  });
        const orderId = response?.data?._doc?._id
        
        const options = {
          key: "rzp_test_0UhirLOMorKmkZ",
          amount: response.data.amount,
          currency: "INR",
          name: "Event Booking",
          description: "Ticket Purchase",
          order_id: response.data.id,
          handler: async function (response) {
            await axios.post("/order/verify",{
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId
            });
            toast.success("Payment successful!");
          }

        }
        console.log(options);
        
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
        rzp1.open();
        // e.preventDefault();
    }
    


    return <> <div className="container">
    <div className="place-booking">
        <ToastContainer/>
      <div className="place-booking-left">
        <p className='title'>Check Out</p>
        <div className="multi-fields">
            <input onChange={e=>onChange(e,'firstname')} type="text" placeholder='First Name' />
            <input onChange={e=>onChange(e,'lastname')} type="text" placeholder='Last Name' />
        </div>
        <input onChange={e=>onChange(e,'email')} type="email" placeholder='Email' />
        <input onChange={e=>onChange(e,'address')} type="text" placeholder='Address' />
        <div className="multi-fields">
            <select onChange={e=>onChange(e,'state')} type='text' placeholder='state'>
                <option>Kochi</option>
                <option>Thrissur</option>
                <option>Trivandrum</option>
                <option>Kozhikode</option>
                <option>Kollam</option>
                <option>Alappuzha</option>
                <option>Kannur</option>
            </select>
            <input onChange={e=>onChange(e,'city')} type="text" placeholder='City' />
        </div>
        <div className="multi-fields">
            <input onChange={e=>onChange(e,'zipcode')} type="text" placeholder='Zip code' />
            <input onChange={e=>onChange(e,'phonenumber')} type="text" placeholder='Phone number' />
        </div>
</div>
        <div className="place-booking-right">
            <div className="upper-part">
                <img className='booking-image' src={event.image}/>

                <div className="booking-event-details">
                
                    <p className='booking-name'>{event.name}</p>
                    <img  className='book-location'src='/public/map.png'></img>
                    <p className='booking-location'>{event.location}</p>
                    <p className='booking-date'>{event.date}</p>
                </div>
              
            </div>
          <hr/>

           <div className="event-bottom">
                <div className="event-total">
                    <h2>Event Summary</h2>
                </div>
                    <div className="event-total-details">
                        <p>Tickets</p>
                        <p>{ticketCount}</p>
                    </div>
                    
                    <div className="event-total-details">
                        <p> Sub Total</p>
                        <p>{totalPrice}</p>
                    </div>
                    <div className="event-total-details">
                        <p>Total</p>
                        <p className='tprice'>INR:{totalPrice}</p>
                    </div>
                    <hr />
                 <button onClick={handlePayment} className='proceed'>PROCEED PAYMENT</button>
           </div>
         

        </div>  
   
    </div>
  
    </div>
    <Footer/>
    </>
};

export default Booking;
