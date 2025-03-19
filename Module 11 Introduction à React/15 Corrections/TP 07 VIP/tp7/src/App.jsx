import axios from "axios"
import { useEffect, useState } from "react"
import TrLigne from "./components/TrLigne"


function App() {
  const [personnes, setPersonnes] = useState({})
  const url = 'https://alpha-javascript-default-rtdb.europe-west1.firebasedatabase.app/'
  const noeud = 'personnes'
  const getPersonnes = async () => {
    const url2 = `${url}${noeud}.json`
    const response = await axios.get(url2);
    console.log(response.data);
    setPersonnes(response.data)
  }
  useEffect(() => {
   getPersonnes()
  }, [])
  const enlever = async (id) => {
    console.log(id)
    const url2 = `${url}${noeud}/${id}.json`
    const response = await axios.delete(url2);
    const personnes2 = {...personnes}
    delete personnes2[id]
    setPersonnes(personnes2)
  }
  const modifier = async (id) => {
    const url2 = `${url}${noeud}/${id}.json`
    const p ={status:!personnes[id].status}
    const response = await axios.patch(url2,p);
    const personnes2 = {...personnes}
    personnes2[id].status = !personnes2[id].status
    setPersonnes(personnes2)
  }
  const ajouter = async (e) => {
    e.preventDefault()
    const p = {
      nom: e.target.nom.value,
      prenom: e.target.prenom.value
    }
    e.target.reset()
    const url2 = `${url}${noeud}.json`
    const response = await axios.post(url2, p);
    console.log(response.data)
    const id = response.data.name
    const personnes2 = {...personnes}
    personnes2[id] = p
    setPersonnes(personnes2)
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-martini-glass-citrus me-4"></i>
            VIP Cocktail</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="bg-gris p-4">
              <form method="post" onSubmit={ajouter}>
                <div className="row">
                  <div className="col-4">
                    <input
                      aria-label="Nom"
                      className="form-control"
                      placeholder="Nom"
                      name="nom"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      aria-label="Prenom"
                      className="form-control"
                      placeholder="prenom"
                      name="prenom"
                    />
                  </div>
                  <div className="col-1">
                    <button
                      type="submit"
                      className="btn btn-success">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-4">

            <table className="table table-striped mt-4">
              <tbody>
                {
                Object.keys(personnes).map(attribut => <TrLigne 
                  key={attribut}
                  id={attribut}
                  enlever={enlever}
                  modifier={modifier}
                  personne={personnes[attribut]}
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
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>
  )
}
export default App