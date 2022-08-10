import './Profile.css';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
  padding: '8px 10px'
  
};

function App() {

  
  const [idx,setIdx] = useState(() => {
    const stickyValue = window.localStorage.getItem('idx');
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : 0;
  });

  
  useEffect(() => {
    setIdx(JSON.parse(window.localStorage.getItem('idx')));
    //alert(` Hi ${JSON.parse(window.localStorage.getItem('idx'))} ${idx} `);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('idx', idx);
  }, [idx]);
  

  const backImage = ['linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)','linear-gradient(239.26deg, #a5f7f1 63.17%, #FDF1E0 94.92%)'
      ,'linear-gradient(239.26deg, #f1cfda 40.17%, #EBD515 94.92%)','linear-gradient(239.26deg, #e7cd80 23.17%, #5ae6f8 94.92%)'  ]

  const bg =['white','#F3FD88','#5ED467','#EF698F']
  document.body.style.backgroundImage = backImage[idx];

  function handleSubmit(event){
   
    setIdx((idx+1)%4);
    document.body.style.backgroundImage = backImage[idx];
    
  }

  

  return (
    
    <div className='outer'>

    <button className='color' onClick={handleSubmit}>Click me to change theme!</button>
    
    <div className='logout'>
    <Link to="/home" style={linkStyle} > Logout </Link>
    </div>
    

    <div className="App">
      
      <div className='p1'>
      <div className="p" style = {{backgroundColor : bg[idx] }}>

      
        Hi there! 👋  
     
      </div>
      </div>


      <div className='p1'>
      <div className="p"   style = {{backgroundColor : bg[idx] }}>

        
        I am Wysa - an AI chatbot built by therapists.
      
        <div className='imgpos'>
          <img src='https://media.istockphoto.com/vectors/cute-panda-paws-up-over-wall-panda-face-cartoon-icon-vector-vector-id1162669873?k=20&m=1162669873&s=612x612&w=0&h=Vug2BRV7LEdrUNLp1rwSlpUNa0Vv7qh-l4hI1eDk2vw='
          className='photo' />
        </div>
         
      </div> 

      </div>


      <div className='p1'>
      <div className="p"   style = {{backgroundColor : bg[idx] }}>
 
        I am here to understand your concerns and connect you with the best resources available to support you.  
            
      
      </div>
      </div>


      <div className='p1'>
      <div className="p"   style = {{backgroundColor : bg[idx] }}>
    
        Can I help you?          
      
      </div>
      </div>     

    </div>
    </div>
  );
}

export default App;
