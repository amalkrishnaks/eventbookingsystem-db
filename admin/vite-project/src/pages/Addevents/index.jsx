import { useState,useEffect } from 'react';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import './add.css';

const AddEvents=()=>{
    const [data,setData]=useState({name:"",description:"",date:"",time:"",availableseats:"",image:"",location:"", address:"" })
    
    const onChange = (e,key) => {
        // setData({...data, [key]: key === "lat" || key === "lng"? parseFloat(e.target.value) || "" : e.target.value})
        setData({ 
          ...data, [key]:  e.target.value });
      };


    //   const newEvent = {
    //     coordinates: {
    //         lat: parseFloat(data.lat) || 0,
    //         lng: parseFloat(data.lng) || 0
    //     }
    // };
    // console.log("Sending Data:", newEvent);

      const uploadImage=async e=>{
        const imageData=e.target.files[0];
        const formData=new FormData();
        formData.append('avatar',imageData);
        const response=await axios.post("http://localhost:4000/api/image/upload",formData);
        
        setData({...data,image:response.data.url});
    } 

       const onSumbitBtn = async (e) => {
        // e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/event/add',data);
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
                    {/* <p>latitude</p>
                    <Input  onChange={e=>{onChange(e,'lat')}}  type='number' name="lat" placeholder="latitude" step="any" required />
                    <p>longitude</p>
                    <Input onChange={e=>{onChange(e,'lng')}} type="number" name="lng" placeholder="longitude" step="any" required /> */}
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

// COSPLAY CARNIVAL   Welcome to the Cosplay Carnival, where creativity knows no bounds!

// Rock On Harris - CBE Edition

// "Rock On Harris - CBE Edition"  is an upcoming live concert featuring the acclaimed composer Harris Jayaraj. Organized by Noise and Grains, this event promises an unforgettable evening of Harris Jayaraj's iconic compositions, celebrated for their melodic richness and emotional depth. The concert is set to showcase a selection of Harris Jayaraj's most popular tracks, offering fans an immersive experience into


// Calicut Banger

// Immerse yourself in a captivating fusion of rhythm and culture by attending the esteemed Calicut Banger event. This electrifying night promises the presence of renowned artists such as Dabzee, SA, MHR, Joker (Manushyar), Vedan, Baby Jean, Lil Payyan, Efy, Dh, Thanze, Hrishi, Amani KL10 and Wraith V. Prepare to be captivated by pulsating beats and the vibrant spirit of Kerala`s rap scene. It`s an opportunity you simply cannot afford to miss, as you witness the evolution of rap in Kerala.


// HOLI 2025 - Kochi Biggest Holi

// In Kochi, one of the most anticipated events is "HOLI 2025 - Kochi's Biggest Holi", organized by Luxus Group. The celebration is scheduled for Saturday, March 15, 2025, starting at 4:00 PM at the Casino Hotel. The event promises an unforgettable experience filled with vibrant colors, music, and pure joy. The headlining act for the evening is ADAA, with more performances to be announced. Tickets are available on platforms like Book My Show and Get Set Sort Scene.



// Sci-Fi Symposium

// Dive into the future at the Sci-Fi Symposium, a convergence of cutting-edge ideas and futuristic visions!




// FANTASY GAMING EXPO

// Embark on a journey through fantastical realms at the Fantasy Gaming Expo




// PIC COMIC CON

// Experience the most anticipated gathering of comic enthusiasts! Epic Comic Con