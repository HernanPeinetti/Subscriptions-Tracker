import './App.css'
//Importacion de componentes
import {Header} from './components/Header.jsx'
import { FormAddMoney } from './components/FormAddMoney.jsx'
import { useState } from 'react'
import { MainControl } from './components/MainControl.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  
  const components = isValid
                      ? <MainControl count={count}/>
                      : <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>


  return (
    <div className='App'>
      {count}
      <Header/>
      { components }
      
      
    </div>
  )
}

export default App
