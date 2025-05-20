import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import './events.css';
import Footer from '../../Components/Footer/footer';


const Events=()=>{
    
    const [events,setEvent]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        try{
             axios.get("/user/userevent").then((res) => {
            setEvent(res.data.data);
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
        {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Events list
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Music events</a>
    <a class="dropdown-item" href="#">Dance events</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}
        {/* <h2>Events</h2> */}
        <div className="event-card">
            {events.map((item,index)=>{
                return(
                    <div key={index} className="event-card-model" onClick={()=>eventDeatils(item._id)}>

                        <img className='img' src={item.image}></img>
                        <div className="date">
                             {/* <p>{item.date}</p> */}
                        </div>

                       
                        <p className='name'>{item.name}</p>
                        <div className="loaction">
                            {/* <img  className='map'src='./public/map.png'></img>
                            <p className='place'>{item.location}</p> */}
                        </div>
                        
                      
                        {/* <p className='details'>Description:{item.description}</p> */}
                        {/* <p>Seat:{item.availableseats}</p> */}
                       
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
