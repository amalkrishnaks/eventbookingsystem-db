import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from '../../Utils/axios';
import axios from "axios";
import Modal from '../../Components/Modal/modal';
import './details.css';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';


const Details=()=>{


    
    const [event,setEvent]=useState({});
    const [showDeleteModal,setShowDeleteModal]= useState(false)
    const navigate=useNavigate()

    const eventId = window.location.pathname.split("/")[2];

     useEffect(()=>{
        axios.get(`https://eventbookingsystem-server.onrender.com/api/user/details/${eventId}`).then((res)=>{
            setEvent(res.data);
        })
    },[])

    const onClick=()=>{
      setShowDeleteModal(true)
    }
    
    if (!event) return <div>Loading...</div>;
    
    return(
      <div className="detail">
        <Modal show={showDeleteModal} setModal={setShowDeleteModal}  event={event}/>
            <div className="events-details">
                    <div className="eventbasic-details">
                        <div className="event-image">
                             <img  src={event.image}></img>
                          </div>
                                  
                    </div>
                        <div className="eventdata-details">
                            <h2 className='name'>{event.name}</h2>
                                <div className="datee">
                                    <h4><i class="fa-solid fa-calendar-days">&nbsp;</i>{event.date}/{event.time} AM</h4>  
                                    
                                </div>
                                      <div className="locations">
                                          <i class="fa-solid fa-location-dot"> &nbsp;</i>{event.location} {event.address}
                                       </div>
                                     
                                              <div className="event-about">
                                                  <p>About This Event</p>
                                                  <p>{event.description}</p>
                                              </div>
                                              
                                              <button  onClick={onClick}  className='btn2'>Purchase Ticket</button>
                  </div>  
            </div>
            
            <div className="fter">
              <Footer/>
            </div>
            
      </div>
    );
};

export default Details;


















































































