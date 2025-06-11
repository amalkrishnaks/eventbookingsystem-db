import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from '../../Utils/axios';
import axios from "axios";
import './events.css';
import Footer from '../../Components/Footer/footer';


const Events=()=>{
    
    const [events,setEvent]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        try{
             axios.get('http://localhost:4000/api/user/userevent').then((res) => {
            setEvent(res.data.data);
            console.log(events);
            
          });
        }catch(error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
    },[setEvent]);

   
    const eventDeatils=(_id)=>{
      navigate('/details/'+_id);
    }
   
   

    return <div className="event">
        
        <div className="event-card">
            {events.map((item,index)=>{
                return(
                    <div key={index} className="event-card-model" onClick={()=>eventDeatils(item._id)}>

                        <img className='img' src={item.image}></img>
                        <div className="date">
                             {/* <p>{item.date}</p> */}
                        </div>

                       
                        <p className='name'>{item.name}</p>
                       
                    </div>
                )
            })}
        </div>
        <div className="foter">
           <Footer/>
        </div>
       
    </div>
};

export default Events;
