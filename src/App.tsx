import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CheckBox } from './components/CheckBox';
import { Input } from './components/Input';
import { Select } from './components/Select';

function App() {
  let [time,setTime]= useState(true)
  
   
  return (
    <div className="App">
      <Button size='big' onClick={() => setTime(true)}>hello</Button>
      {time ? <h1>Never gonna give you up</h1> : <h1>Never gonna let you down</h1>}

      <Button size='small' onClick={() => setTime(false)}>Hi</Button>
    
      <br/>

      <Input inputName='Hello' />

      <br/>
      <CheckBox  label='Checcck' />

      <br/>

      <Select />
    </div>
  );
}

export default App
