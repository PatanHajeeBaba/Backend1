import React, { useState } from 'react';
import '../../CSS/Book.css';
import axios from 'axios';

function Book() {
  // State variables for form inputs
  const [bdata, setBdata] = useState({
    Name:"",
    Phone:"",
    Email:"",
    Services:"",

  })

  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [service, setService] = useState('');
 
//   const ValidateForm(()=>{
//     //
//   })
    //
  
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      if (!bdata.Name) {
          newErrors.Name = 'Name is required';
      }
      if (!bdata.Phone) {
          newErrors.Phone = 'Phone is required';
      }
      if (!bdata.Email) {
          newErrors.Email = 'Email is required';
      }
      
      if (!bdata.Services) {
          newErrors.Services = 'services is required';
      }

      return newErrors;
  };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setBdata({
            ...bdata,
            [name]: value
        });
    };

   

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
     // Prevent default form submission behavior
    
        // try {
        //   axios.post("http://localhost:4646/Book", bdata).then((resp) => {
        //     alert(resp.data.msg)
        //     window.location.reload();
        //   });
        // } catch (err) {
        //   alert("API call failed");
        //   window.location.reload();
        // }


    // Log the form data to the console (or handle it as needed)
    // console.log('Form Data:', bdata);

    // Optionally, you can reset the form fields after submission
    // setName('');
    // setPhone('');
    // setEmail('');
    // setService('');
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        setErrors({});
        // alert("Booking completed Successfully")
        // console.log('Booking complete with:', bdata);
        try {
          axios.post("http://localhost:4608/Book", bdata).then((resp) => {
            alert(resp.data.msg)
            window.location.reload();
          });
        } catch (err) {
          alert("API call failed");
          window.location.reload();
        }
    }
  };

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-4" ></div>
        <div className="col-md-4" >
          <div className="card" style={{  border: 'none',boxShadow:'0 0 10px grey',margin:'10px 0px', paddingBottom: '6%', textAlign: 'justify' }}>
            <div className="card-body">
              <p style={{ fontSize: '35px', fontWeight: '500', margin: '6% 0% 0% 5%' }}>Book Now</p>
              <form style={{ margin: '2% 0% 0% 5%',  boxShadow: '0 ,0, 20px,grey'}} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                  className="s1"
                  type="text"
                  id="name"
                  name='Name'
                  placeholder="Enter your Name"
                  value={bdata.Name}
                  onChange={handleChange} // Update state on input change
                  style={{height: 35, width: "100%"}}

                /><br />
                    {errors.Name && <p className="error">{errors.Name}</p>}


                <label htmlFor="phone">Phone number:</label><br />
                <input
                  className="s1"
                  type="number"
                  id="phone"
                  name='Phone'
                  placeholder="Enter your Number"
                  value={bdata.Phone}
                  onChange={handleChange} // Update state on input change
                  style={{height: 35, width: "100%"}}

                /><br />
                    {errors.Phone && <p className="error">{errors.Phone}</p>}


                <label htmlFor="email">Email:</label><br />
                <input
                  className="s1"
                  type="text"
                  id="email"
                  name='Email'
                  placeholder="Enter your Email"
                  value={bdata.Email}
                  onChange={handleChange} // Update state on input change
                  style={{height: 35, width: "100%"}}
                /><br />
                    {errors.Email && <p className="error">{errors.Email}</p>}

                <label htmlFor="services">Services:</label><br />
                <select
                  id="services"
                  name='Services'
                  value={bdata.Services}
                  onChange={handleChange} // Update state on select change
                  style={{ marginTop: '14px', cursor: 'pointer', height: '40px', width: "100%" }}
                >
                  <option value="">Services</option>
                  <option value="free-consultation">FREE CONSULTATION</option>
                  <option value="online-coaching">ONLINE COACHING</option>
                  <option value="self-improvement-workshop">SELF IMPROVEMENT WORKSHOP</option>
                </select>
                {errors.Services && <p className="error">{errors.Services}</p>}

                  <center>
                  <button
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: 'blue', color: 'white', width: '80%', height: '45px', margin: '10% 0% 0% 1%', fontSize: '20px' }}
                >
                  Schedule
                  <span className="ic1"></span>
                </button>
                  </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;