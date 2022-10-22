import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const App = () => {
  const [numShow,setNumShow] = useState('')
  const num = [];
  const operator =['+','-','/','(',')','*','=']

  for (let i = 0; i < 10; i++) {
    num.push(i)
  }

  const clickHandle = (value) =>{
    if(numShow.length == 0){
      switch (value) {
        case '+': 
          setNumShow('')
          break;

          case '-': 
          setNumShow('')
          break;

          case '*': 
          setNumShow('')
          break;

          case '/': 
          setNumShow('')
          break;

          case '0': 
          setNumShow('')
          break;
      
        default:
          value != '='? setNumShow(numShow + value):setNumShow(eval(numShow).toString())
          break;
      }
    }else{
      value != '='? setNumShow(numShow + value):setNumShow(eval(numShow).toString())
    }

      
  }
  const delHandle = () => {
    setNumShow(numShow.substring(0,numShow.length - 1)) ;
  }


  return (
    <div className=' w-50 mx-auto'>
      <div className='display'>{numShow}</div>
      <div className='w-75 bg-light p-5 mx-auto row d-flex jc rounded'>
            {num.map(i=> {
        return(
          <button className='btn btn-primary col-2 p-3 m-1' key={i} onClick={()=>clickHandle(i)}>{i}</button>
        )
      })}
      {operator.map(i =>  <button className='btn btn-primary col-2 p-3 m-1' key={i} onClick={()=>clickHandle(i)}>{i}</button>)}
        <button onClick={delHandle} className='btn btn-primary col-2 p-3 m-1'>Del</button>
      </div>
        
    </div>
  )
}

export default App