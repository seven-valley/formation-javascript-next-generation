# TP 2 correction
```jsx
import { useState, useRef } from 'react';
import './App.css'
export default function App() {
  const litre = useRef('');
  const km = useRef('');
  const [message, setmessage] = useState('')
  const afficher = () => {
    if (litre.current.value.length > 0 && km.current.value.length > 0) {
      const consomation = (litre.current.value * 100) / km.current.value
      if (!isNaN(consomation)){
        setmessage(consomation.toFixed(1))
      }
    }else {
      setmessage('') 
    }
  }
  return (
    <>
      <input ref={litre} placeholder="litres" onChange={afficher} />
      <input ref={km} placeholder="kilomètres" onChange={afficher} />
      <h1>{message}</h1>
    </>
  )
}

```