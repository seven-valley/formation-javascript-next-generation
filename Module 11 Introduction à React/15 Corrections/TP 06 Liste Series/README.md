# Correction Partie 1
:one: Création du component <code>TrSearch.jsx</code>  
:two: Mise en place de  <code>Fetch</code> pour rechercher une série  
:three: Création du useState  <code>series</code>   
```jsx
  const [series,setSeries] = useState([]);
```
:four: Créer la fonction ajouter    
:five: Création du useState  <code>tabFav</code>    
```jsx
  const [tabFav,setTabFav] = useState([]);
```
:six: Fonction ajouter une série au tableau de fav <code>series</code>  
## TrSearch.js
```js
export default function TrSearch(props) {
    return (
        <tr>
            <td>{props.serie.Title}</td>
            <td>{props.serie.Year}</td>
            <td>
                <img
                    src={props.serie.Poster}
                    alt="Upload"
                    width="80"
                />
            </td>
            <td className="align-middle">
                <button 
                    onClick={()=>props.ajouterfav(props.indice)}
                    className="btn btn-outline-secondary">
                    <i className="fa fa-plus"></i>
                </button>
            </td>
        </tr>
    )
}
```
## App.js
```js
import { useState } from 'react';
import TrSearch from './components/TrSearch';
export default function App() {
  const [series,setSeries] = useState([]);
  const [tabFav,setTabFav] = useState([]);
  const key = 'efdc2275';
  const nom = 'Upload'
  // http://www.omdbapi.com/?apikey=efdc2275&t=upload&type=series
  const url = `http://www.omdbapi.com/?apikey=${key}&type=series`; 
  
  const ajouter = async(e) => {
    e.preventDefault();
    console.log('ajouter');
    const url2 =`${url}&s=${e.target.nom.value}`
    e.target.reset(); // vider input
    const response = await fetch(url2)
    const data = await response.json()   
    setSeries(data.Search)
  }
  const ajouterfav = async(i) => {
    console.log(i);
    const tabFav2 = [...tabFav];
    // envouyer une imdb avec Fetch
    tabFav2.push(series[i]);
    const series2 = [...series];
    series2.splice(i,1);
    setSeries(series2);
    console.log(tabFav2)
    setTabFav(tabFav2);
  }
  return (
  <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-rocket me-4"></i>
          Mes séries</a>
      </div>
    </nav>
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <form method="post" onSubmit={ajouter}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nom de la série"
                name="nom"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-success" type="submit">  
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          </form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Séries</th>
                <th>Année</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              series.map((serie,i)=><TrSearch 
              key={i} 
              indice={i}
              serie={serie}
              ajouterfav={ajouterfav}
              />)
              }
            </tbody>
          </table>
        </div>
        <div className="offset-3 col-4">
          <h1>Séries à regarder :</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Séries</th>
                <th>Année</th>
                <th>rating</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foundation</td>
                <td>2021</td>
                <td>7.4</td>
                <td>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BMTE5MDY1MGUtMmMxNi00YjA3LWIyZTYtN2FhOWJmNTY2NmM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
                    alt="Star Wars"
                    width="80"
                  />
                </td>
                <td className="align-middle">
                  <button className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>The Expanse</td>
                <td>2015</td>
                <td>8.5</td>
                <td>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
                    alt="Star Wars"
                    width="80"
                  />
                </td>
                <td className="align-middle">
                  <button className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Raised by Wolves</td>
                <td>2020</td>
                <td>7.5</td>
                <td>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNTRlMTg4NWYtZmRiNS00YWE0LWFkZTMtNjk5Yzc3NGE0ZTE0XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
                    alt="Raised by Wolves"
                    width="80"
                  />
                </td>
                <td className="align-middle">
                  <button className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer className="py-5 bg-dark">
      <div className="container px-4 px-lg-5">
        <p className="m-0 text-center text-white">
          Copyright &copy; Seven Valley 2024
        </p>
      </div>
    </footer>
  </>
  )
}
```

# Coorection partie 2

## TrFav.jsx
```jsx
export default function TrFav(props) {
    return (
        <tr>
            <td>{props.serie.Title}</td>
            <td>{props.serie.Year}</td>
            <td>{props.serie.imdbRating}</td>
            <td>
                <img
                    src={props.serie.Poster}
                    alt="Upload"
                    width="80"
                />
            </td>
            <td className="align-middle">
                <button 
                    onClick={()=>props.enleverfav(props.indice)}
                    className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}
```

## App.jsx
```jsx
import { useEffect, useState } from 'react';
import TrSearch from './components/TrSearch';
import TrFav from './components/TrFav';
export default function App() {
  const [series,setSeries] = useState([]);
  const [tabFav,setTabFav] = useState([]);
  const key = 'efdc2275';
  const nom = 'Upload'
  // http://www.omdbapi.com/?apikey=efdc2275&t=upload&type=series
  const url = `http://www.omdbapi.com/?apikey=${key}&type=series`; 
  useEffect(() => {
    const data = localStorage.getItem('tabFav');
    if(data){
      setTabFav(JSON.parse(data));
    }
  },[])
  
  const getSerie=async(id)=>{
    const url2 =`${url}&i=${id}`
    const response = await fetch(url2)
    const serie = await response.json() 
    return serie;
  }

  const ajouter = async(e) => {
    e.preventDefault();
    console.log('ajouter');
    const url2 =`${url}&s=${e.target.nom.value}`
    e.target.reset(); // vider input
    const response = await fetch(url2)
    const data = await response.json()   
    setSeries(data.Search)
  }
  const ajouterfav = async(i) => {
    console.log(i);
    const tabFav2 = [...tabFav];
    // envouyer une imdb avec Fetch
    const serie =await getSerie(series[i].imdbID);
    console.log(serie);
    tabFav2.push(serie);
    const series2 = [...series];
    series2.splice(i,1);
    setSeries(series2);
    console.log(tabFav2)
    setTabFav(tabFav2);
    localStorage.setItem('tabFav',JSON.stringify(tabFav2));
  }
  const enleverfav = async(i) => {
    
    const tabFav2 = [...tabFav];
    // envouyer une imdb avec Fetch
    tabFav2.splice(i,1)
    setTabFav(tabFav2);
    localStorage.setItem('tabFav',JSON.stringify(tabFav2));
  }
  return (
  <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-rocket me-4"></i>
          Mes séries</a>
      </div>
    </nav>
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <form method="post" onSubmit={ajouter}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nom de la série"
                name="nom"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-success" type="submit">  
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          </form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Séries</th>
                <th>Année</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              series.map((serie,i)=><TrSearch 
              key={i} 
              indice={i}
              serie={serie}
              ajouterfav={ajouterfav}
              />)
              }
            </tbody>
          </table>
        </div>
        <div className="offset-3 col-4">
          <h1>Séries à regarder :</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Séries</th>
                <th>Année</th>
                <th>rating</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              tabFav.map((serie,i)=><TrFav 
              key={i} 
              indice={i}
              serie={serie}
              enleverfav={enleverfav}
              />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer className="py-5 bg-dark">
      <div className="container px-4 px-lg-5">
        <p className="m-0 text-center text-white">
          Copyright &copy; Seven Valley 2024
        </p>
      </div>
    </footer>
  </>
  )
}
```
