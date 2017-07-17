import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      mov: 0,
      pos: 800,
      first :true
    }
  }

  moveroad(){
   
    if(this.state.pos===1100){
      
      this.state.pos=700;
    }

    



    
     console.log(this.state.pos);
    this.setState({
      pos : this.state.pos +10
     
    });
    
  }
  render() {
    
    var loop = false;
     var mov={
      transform: `translateY(${this.state.pos}px) rotateX(30deg)`}
  //  while(false) {
  //    var  mov={
  //     transform: `translateY(${this.state.pos}px) rotateX(30deg)`
  //   }

    //  setTimeout(() => {
    //    loop = false;
    //  }, 10000);
    //  }
    
    if(this.state.first){
      setInterval(this.moveroad.bind(this),20);
    this.setState({
      first:false

    });
    

    }
    
    return (
      <div className="App"id="animate-area">
       <div className="background" >
       <div className="sideleft">
       <div className="left"></div>
       <div className="right"> </div>

       </div>




       <div className="road">
         
       </div>
       <div style={mov} >
         <div className="ch1"></div>
         <div className="ch2"></div>
         <div className="ch3"></div>
         <div className="ch4"></div>
         <div className="ch5"></div>
         <div className="ch6"></div>
       </div>
       
       
       
       
       
       <div className="sideright">

       </div>

</div>
      </div>

    );
   }
    
  }
   


export default App;
