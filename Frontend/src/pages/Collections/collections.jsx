import { useEffect, useState } from 'react';
import './collection.css';
// import axios from '../../Utils/axios'
import axios from "axios";
import Footer from '../../Components/Footer/footer';




const Collections=()=>{
    const[collection,setCollection]=useState([]);

    const fetchOrder=async()=>{
        const response=await axios.post('http://localhost:4000/api/order/userorder');
       setCollection(response.data.orders)
       console.log(response.data.orders);
        
    }

    useEffect(()=>{
        fetchOrder()
    },[])


    console.log(collection);
    

    return <div className="my-orders">
        {/* <h3>MY ORDERS</h3> */}
        <div className="container">
            {
                collection.map((orders,index)=>{
                    return(
                        <div key={index} className="my-orders-order">
                            <p>{orders.items.map((item)=>{
                                return(
                                    <div className="my-orders-orders">
                                        <p>{item.name}</p>
                                        {/* <p>{item.description}</p> */}
                                        {/* <img  src={item.image}/> */}
                                        <p>{item.date}</p>
                                        <p>{item.location}</p>
                                    </div>
                                )
                               
                            })}</p>
                            <p>${orders.amount}.00</p>
                            <p><span>&#x25cf;</span><b>{orders.status}</b></p>
                            <p>{orders.payment}</p>
                            <button className='track' onClick={fetchOrder}>Track</button>
                        </div>
                    )
                })
            }
        </div>
        <Footer/>
    </div>
};

export default Collections;
