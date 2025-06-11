import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "../../Utils.js/axios";
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import './list.css';


const ListEvents=()=>{

    const[list,setList]=useState([]);
    const navigate=useNavigate()

    const fetchList=async()=>{
        const response=await axios.get("https://eventbookingsystem-server.onrender.com/api/event/list");
        setList(response.data.data);
        // console.log(response);
    }
    const removeEvent=async(Id)=>{
       const response=await axios.delete("https://eventbookingsystem-server.onrender.com/api/event/remove/"+Id)
       fetchList();
       if(response.data.success){
        toast.success("Remove")
       }
       else{
        toast.error("error")
       }
    }

    useEffect(()=>{
        fetchList()
    },[])

    

    return(
        <div className="list  flex-col">
             <ToastContainer/>
            {/* <p className='evnt'>All events  list</p> */}
        <div className="list-table">
            <div className="list-table-format title">
               
                <b>Name</b>
                <b>description</b>
                <b>date</b>
                <b>time</b>
                <b>availableseats</b>
                <b>location</b>
                <b>address</b>
                <b>image</b>
                <p>edit</p>
            </div>
           {list.map((item,index)=>{
            return(
                    <div key={index} className="list-table-format">
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <p>{item.time}</p>
                        <p>{item.availableseats}</p>
                        <p>{item.location}</p>
                        <p>{item.address}</p>
                
                        <img style={{width:"50px",height:"50px"}} src={item.image}></img>
                        <p onClick={()=>removeEvent(item._id)} className='cursor'>X</p>
                        <p onClick={() => navigate('/edit/'+ item._id)} className='Edit'>edit</p>
                    </div>
            )
           })}
            </div>

    </div>
    );
};

export default ListEvents;