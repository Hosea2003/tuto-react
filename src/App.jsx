import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import CustomButton from './components/CustomButton'
function App() {
  const [number,setNumber]=useState(1)

  // compute double of number depending on the state: number
  const double=useMemo(()=>{
    return number*2
  }, [number])

  // this code recompute double every time there's state change
  // even if that state is not needed for computing double
  // const double=number*2

  function incrementNumber(){
    //bad
    // setNumber(number+1)
    // good
    setNumber((prev)=>prev+=1)
  }

  return (
    <div>
      {/* <Header /> */}
      {/* <Content name={"Rindra"} text={"you are cute"}/> */}
      {/* <Content name={"Rindar"} text={"Button created"}>
        <button>Ridnra</button>  
      </Content> */}

      {/* <CustomButton  text={'Kanto'}/> */}
      <h1>{number}</h1>
      <h2>double number {double }</h2>
      <button onClick={()=>incrementNumber()}>increment</button>
    </div>
  )
}

export default App
