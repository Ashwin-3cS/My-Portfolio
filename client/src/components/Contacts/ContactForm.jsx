import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactForm.css';


const ContactForm = () => {


  const [name,setname] = useState('');
  const [email,setemail] = useState ('');
  const [message,setmessage] = useState('');
  const [data,setData] = useState({}); 
  const [success,setSuccess] = useState(null);


  useEffect(() => {
    setData({
      name: name,
      email: email,
      message: message,
    });
  }, [name, email, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ashwins-portfolio.onrender.com/api/mail",data);
      // console.log(data); 
      setSuccess(true);
    } catch (error) {
      console.error('Error sending data to server:', error);
      setSuccess(false);
    }
  };
  
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Your Name'
            id="name"
            name="name"
            value = {name}
            onChange={(event)=>{setname(event.target.value)}}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Your Mail-Id'
            id="email"
            name="email"
            value={email}
            onChange={(event)=> setemail(event.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder='Your Message'
            name="message"
            value={message}
            onChange={(event)=> setmessage(event.target.value)}
            spellCheck="false"
            required
          />
        </div>
        <button type = "submit" >Send</button>
        {success !== null && (
          <p className={success ? 'success-message' : 'error-message'}>
            {success ? 'Message sent successfully' : 'Message not sent'}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
