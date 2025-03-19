# TP 03 - Domotique
## Appareil.jsx
```jsx
export default function Appareil({ appareil, indice, switchOne }) {

  return (
    <>
      <li className={`list-group-item list-group-item-${appareil.status ? 'success' : 'danger'}`}>
        <h4>{appareil.name}</h4>

        <button
          className={`ml-2 btn btn-${appareil.status ? 'danger' : 'success'}`}
          onClick={() => switchOne(indice)}>
          {appareil.status ? 'OFF' : 'ON'}
        </button>
      </li>
    </>
  )
}
```
## App.jsx
```jsx
import { useState } from 'react';
import Appareil from './models/Appareil';
import Personne from './models/Appareil';
export default function App() {
const [appareils,setAppareils]= useState([
  {name:'PlayStation 5', status:true},
  {name:'Machine à café', status:false},
  {name:'Xbox', status:false}
]);
const ajouter=(e)=>{
  e.preventDefault();
  const a ={name:e.target.nom.value,status:false};
  setAppareils([...appareils,a]);
}
const switchOne=(i)=>{
  const appareils2 = [...appareils];
  appareils2[i].status=!appareils2[i].status;
  setAppareils(appareils2);
}
const switchAll=(etat)=>{
  const appareils2 = [...appareils];
  appareils2.map(a=>a.status=etat);
  setAppareils(appareils2);
}
  return (
    <>
      <div className="container">
        <div className="row">
         
          <div className="col-4">
            <h2>Les Appareils</h2>
            <form method="post" onSubmit={ajouter}>
            <input name="nom" className="form-control" placeholder="Appareil" />
            <button className="btn btn-secondary my-3" type="submit">
              <i className="fa fa-plus"></i>
            </button>
            </form>
            <ul className="list-group">
              {
                appareils.map((a,indice)=><Appareil
                key={indice} 
                appareil={a}
                indice={indice} 
                switchOne={switchOne}
                />)
              }
            </ul>
            <br />
            <button 
            onClick={()=>switchAll(true)}
            className="btn btn-success me-3">ALL ON</button>

            <button
             onClick={()=>switchAll(false)}
            className="ml-2 btn btn-danger">ALL OFF</button>
          </div>
          
        </div>
      </div>
    </>
  )
}
```