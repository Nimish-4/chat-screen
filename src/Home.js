import { Link } from 'react-router-dom';
import './Home.css'
import React, { useState } from "react";


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
  border: '2px solid black',
  background: '#f797f5',
  position: 'relative',
  left: '45%',
  height: '50px',
  margin:"5px",
  padding: '5px 20px',
  top: '100px'
  
};



const Home = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  document.body.style.backgroundImage = props.grad;

  return (
    <div className='image'>
      
      <div className='text'>
      <h1 className='text2'>Welcome to the app! You can login to your messages from here. </h1>

      </div>

      <Link to="/" style={linkStyle}> Login </Link>



      {selectedImage && (
        <div className='img'>
        <img alt="not fount" width={"350px"} height={"350px"} border={"3px solid black"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <h4>Remove profile picture here!</h4>
        <button className='remove' onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <div className="upload">
      <h3 style={{font: "Roboto"}}>Add a profile pic here!</h3> 
      <input
        type="file"
        name="myImage"
        
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      </div>
    </div>
  );
};



/*

function Home() {


    function submitHandler(){
      alert('iuploaded')
    }

    return (
    
    <div  className='outer'>

      <div className="mb-1">
          Image <span className="font-css top">*</span>
          <div className="">
              <input type="file" id="file-input" name="ImageStyle" onSubmit={submitHandler}/>
          </div>
      </div>
    
    <Link to="/" style={linkStyle}> Login </Link>

    <div className='welcome'>
    <h1>Welcome to the app! You can login to your messages from here.
    </h1>
    </div>  
    

    </div>
    
  );
} */


export default Home;