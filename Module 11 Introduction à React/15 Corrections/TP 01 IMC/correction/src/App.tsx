import { useState } from 'react'
import './App.css'
import { Info } from './models/Info';
// interface Iinfo{
//   imc: string,
//   tranche: string,
//   poids: string,
//   kilo: string,
//   class:string
// }
export default function App() {
  const [info, setInfo] = useState<Info>(new Info());
  //const calcul = (event: React.ChangeEvent<HTMLInputElement>):void => {
  const calcul = (event: any): void => {
    event.preventDefault();

    const poids = Number(event.target.elements[0].value);
    const taille = Number(event.target.elements[1].value);
    const imc = poids / (taille * taille);
    const info2: Info = new Info(imc.toFixed(2));
    if (imc > 25) {
      const poids2: number = 25 * taille * taille
      info2.poids = poids2.toFixed(2)
      info2.kilo = (poids2 - poids).toFixed(2)
    }

    if (imc < 18.5) {
      info2.classe = 'warning'
      info2.tranche = 'maigreur'
      const poids2: number = 18.5 * taille * taille
      info2.poids = poids2.toFixed(2)
      info2.kilo = '+' + (poids2 - poids).toFixed(2)
    }
    else if (imc < 25) { //18.5 < imc <25
      info2.tranche = 'normal'
      info2.classe = 'success'
    }
    else if (imc < 30) {
      info2.tranche = 'surpoids'
      info2.classe = 'warning'
    }
    else if (imc < 35) {
      info2.tranche = 'obésité'
      info2.classe = 'danger'
    }
    else if (imc < 40) {
      info2.tranche = 'obésité sévère'
      info2.classe = 'secondary'
    } else if (imc >= 40) {
      info2.tranche = 'obésité massive'
      info2.classe = 'primary'
    }
    setInfo(info2);

  }

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale me-3"></i>
            Calcul IMC</a>
        </div>
      </nav>
      <div className="container">
      <form method="post" onSubmit={calcul}>
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <input
              aria-label="Poids"
              className="form-control"
              placeholder="Poids en kg."
              name="poids"
            />

            <input
              aria-label="Taille"
              className="form-control mt-3"
              placeholder="taille en m."
              name="taille"
            />

            <button className="btn btn-success my-3 col-12" type="submit">
              <i className="fa-solid fa-weight-scale"></i>
            </button>
            {info.imc.length > 0 &&
            <div className={`alert alert-${info.classe} mt-4`} role="alert">
              <h3>IMC : {info.imc}</h3>
              <p>{info.tranche}</p>
              {info.kilo.length > 0 &&
                <p>{info.kilo} kg ({info.kilo})</p>
              }
            </div>
            }
          </div>
        </div>
      </form>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>

   
     </>
  )
}

