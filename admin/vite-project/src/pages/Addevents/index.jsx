import { useState,useEffect } from 'react';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import axios from "../../Utils.js/axios"
import './add.css';

const AddEvents=()=>{
    const [data,setData]=useState({name:"",description:"",date:"",time:"",availableseats:"",image:"",location:"", address:"" })
    
    const onChange = (e,key) => {
        setData({ 
          ...data, [key]:  e.target.value });
      };

      const uploadImage=async e=>{
        const imageData=e.target.files[0];
        const formData=new FormData();
        formData.append('avatar',imageData);
        const response=await axios.post("/image/upload",formData);
        
        setData({...data,image:response.data.url});
    } 

       const onSumbitBtn = async (e) => {
        // e.preventDefault();
        try {
          const response = await axios.post('/event/add',data);
          toast.success('Event booked successfully!');
  
          
            
        } catch (error) {
          console.log(error);
          toast.error('Error booking event:', error);
        }
      };
      
      // useEffect(()=>{
      //   console.log(data);
      // })
      console.log(data);
      

    return(
      <div className="container">
        <div className="add">
            <div className='flex col'>
            <ToastContainer/>
                <div className="add-event-name flex-col">
                    <p>Event name</p>
                    <Input onChange={e=>{onChange(e,'name')}} type='text'  name="name" placeholder='type here' required/>
                    </div>
                    <div className="add-event-description flex-col">
                        <p>Description</p>
                        <textarea  onChange={e=>{onChange(e,'description')}} name='descritption' rows="5" placeholder='write content here ' required ></textarea>
                    </div>
                    <div className="add-event-date flex-col">
                        <p>Date</p>
                        <Input  onChange={e=>{onChange(e,'date')}} type='date' name='date' required/>
                    </div>

                    <div className="add-event-date flex-col">
                        <p>Time</p>
                        <Input  onChange={e=>{onChange(e,'time')}} type='time' name='time' required/>
                    </div>

                    <div className="add-event-seats flex-col">
                        <p>Availableseats</p>
                        <Input  onChange={e=>{onChange(e,'availableseats')}} type='text' name='seats' required/>
                    </div>

                    <div className='add-event-location flex-col'>
                    <p>location</p>
                    <select onChange={e=>{onChange(e,'location')}} type='text' name='location' required>
                      <option>mumbai</option>
                      <option>kerala</option>
                      <option>kochi</option>
                      <option>thrissur</option>
                      <option>Calicut</option>
                      <option>Trivandrum</option>
                      <option>Wayanad</option>
                      <option>Alappuzha</option>
                      <option>Varkala</option>
                      <option>new york</option>
                      <option>Coimbatore</option>
                      
                    </select>
                    <p>address</p>
                    <Input  onChange={e=>{onChange(e,'address')}} type='text' placeholder='address' required/>

                    </div>


                    <div className="add-event-image flex-col">
                        <p>image</p>
                        <Input onChange={uploadImage}  type='file' name='image' required/>
                    </div>

                    
                        
                    <button onClick={onSumbitBtn} type='submit' className='btn'>ADD</button>
                  
                
            </div>
        </div>
        </div>
    );
};

export default AddEvents;

