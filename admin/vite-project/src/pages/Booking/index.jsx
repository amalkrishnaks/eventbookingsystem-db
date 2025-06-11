import { useEffect, useState } from 'react';
// import axios from "../../Utils.js/axios";
import axios from "axios";
import './booking.css';

const BookingEvents=()=>{
    const[booking,setBooking]=useState([]);

    const fetchAllOrders=async()=>{
        const response=await axios.get('https://eventbookingsystem-server.onrender.com/api/order/listorder')
        setBooking(response.data.orders)
        console.log(response.data.orders);
        
    }
    const statusHandler=async(event,orderId)=>{
        const response=await axios.post('https://eventbookingsystem-server.onrender.com/api/order/status',{
            orderId,
            status:event.target.value
        })
        if(response.data.success){
            await fetchAllOrders();
        }
       
        
    }

    useEffect(()=>{
        fetchAllOrders();
    },[])
    return(
        <div className="order">
            {/* <h3>Order page</h3> */}
            <div className="order-list">
                {booking.map((orders,index)=>{
                    return(
                        <div key={index} className="order-item">
                            <p>{orders.items.map((item)=>{
                                return(
                                    <div className="my-order">
                                        <p>{item.name}</p>
                                        
                                    </div>
                                )
                            })}</p>
                            <p className='order-item-name'>{orders.address.firstname+""+orders.address.lastname}</p>
                            <div className='order-item-address'>
                                <p>{orders.address.city+","}</p>
                                <p>{orders.address.state+","+orders.address.zipcode}</p>
                            </div>
                            <p>{orders.address.phonenumber}</p>
                            <p>${orders.amount}.00</p>
                            <select onChange={(event)=>statusHandler(event, orders._id)} value={orders.status}>
                                <option >Processing</option>
                                <option>Pending</option>
                                <option>Success</option>
                            </select>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BookingEvents;