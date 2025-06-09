import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import './contact.css';
import axios from '../../Utils/axios'



const Contact=()=>{

    const[contact,setContact]=useState({firstname:'',lastname:'',email:'',phonenumber:'',subject:'',content:''})

    const onChange=(e, key)=>{
        setContact({...contact,[key]: e.target.value});
    }
    

    let contactData={
        contact:contact
    }
    const handleContact=async()=>{
        const response=await axios.post(`contactuser/contact`,contactData)
        console.log(response.data);
        
    }

    console.log(contact);
    
    return(
        <div className="contact">
           <div className="header-part">
            <h1>Contact Us</h1>
            <p>Have any questions? We'd love to hear from you.</p>
           </div>
           <div className="center-part">
            <div className="info">
                <h1>Contact information</h1>
                <p>Fill out the form and our team will get back to you soon.</p>
                <div className="call-detail">
                   <a href='tel:1 (833) 417-0140'>1 (833) 417-0140</a> <br/>
                   <a href=''>contact@eventbookings.com</a><br/>
                   <a href=''>Help Center</a>
                </div>
            </div>
            <div className="contact-part">
                <div className=" contact-form">
                <div className="multi-fields">
                    <input onChange={e=>onChange(e,'firstname')} type="text" placeholder='First Name' />
                    <input onChange={e=>onChange(e,'lastname')} type="text" placeholder='Last Name' />
                </div>
                <div className="multi-fields">
                    <input onChange={e=>onChange(e,'email')} type="email" placeholder='Email' />
                    <input onChange={e=>onChange(e,'phonenumber')} type="text" placeholder='Phone Number' />
                </div>
                <input onChange={e=>onChange(e,'subject')} type='text' placeholder='Subject'/>
                <textarea onChange={e=>onChange(e,'content')} type='text' placeholder='Content'></textarea>
                <button onClick={handleContact}>Submit</button>
                </div>
            </div>
           </div>
            <div className="fotter">
              <Footer/>  
            </div>
           
        </div>
    )
}

export default Contact;