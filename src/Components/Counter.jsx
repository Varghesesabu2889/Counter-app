import React, { useState } from 'react'
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
function Counter() {

const[counter,setCounter]=useState(0)
function increment(){
  setCounter(counter+1)
}
function decrement(){
  // eslint-disable-next-line eqeqeq
  if(!counter==0){
  setCounter(counter-1)
}
}
function reset(){
  setCounter(0)
}
  return (
    <div style={{textAlign:"center", backgroundColor:"orange"}}>
      <br /><br />
      <img
              src='./images/pic1.gif'
              width='30%'
              height='30%'
              alt=''
              loading='lazy'
            />
<h1 style={{color:"white"}}>{counter}</h1>
<br /><br />
<MDBBtnGroup>
        <MDBBtn rounded color='success' onClick={increment}>
          Increment
        </MDBBtn>
        <MDBBtn rounded color='primary' onClick={decrement}>
          Decrement
        </MDBBtn>
        <MDBBtn rounded color='danger'onClick={reset} >
          Reset
        </MDBBtn>
      </MDBBtnGroup>
  
    </div>
  )
}

export default Counter