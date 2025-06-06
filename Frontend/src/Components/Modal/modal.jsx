
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './modal.css'

const Modal=({show =false,setModal,event})=>{

    const[ticketCount,setTicketCount]=useState(0);
    const ticketRate=300;                    //example ticket price
    const totalPrice=ticketCount * ticketRate;
    const navigate=useNavigate()

    const proceedToPayment=()=>{
        navigate("/booking", { state: { event, ticketCount,totalPrice } });
    }

    return(
        <div style={{display:show ? 'block' :'none' }} className="modal"  >
        <div className="cover" onClick={()=>setModal(false)}></div>
        <div className="modal-box">
            <div className="inside-modal">
                <div className="modal-event-details">
                        <h2>{event.name}</h2>
                        <p>{event.location}</p>
                        <p>{event.date}</p>

                </div>
                <div className="modal-event-ticketvalue ">
                {
                    !ticketCount
                    ?<img className='add'onClick={()=>setTicketCount(prev=>prev +1)} src='/public/add.png'></img>
                    : <div className="event-item-counter">
                        <img className='math' onClick={()=>setTicketCount(prev=>prev -1)} src='/public/minimize.png'/>
                        <p>{ticketCount}</p>
                        <img className='math' onClick={()=>setTicketCount(prev=>prev +1)} src='/public/add.png'/>
              </div>
                }
                </div>
              </div>
                <div className="footer">       
                    <p className='totalprice'>INR: ₹{
                                !ticketRate > 0
                                ?(0)
                                :[ticketCount * ticketRate]}
                    </p>
                
                    <div className="continue">
                                    <button  onClick={proceedToPayment} className='click'>Continue</button>  
                    </div>

                </div>
        </div>
</div>
    )
}

export default Modal;