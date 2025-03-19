const db = 'https://paris-vip-cocktail-default-rtdb.europe-west1.firebasedatabase.app/'
const noeud = 'personne'// + .json

const ajouterFire=async(personne)=>{
    const url2 =`${db}${noeud}.json`
    const response = await axios.post(url2,personne);
    personne.id=response.data;
    return personne;
}

const effacerFire=async(id)=>{
    const url2=`${db}${noeud}/${id}/.json`
    const response = await axios.delete(url2);
}

const modifierFire=async(id,status)=>{
 const personne ={ status:status}
 const url2=`${db}${noeud}/${id}/.json`
 const response = await axios.patch(url2,personne);
}

const lireFire=async()=>{
    const url2 =`${db}${noeud}.json`
    const response = await axios.get(url2);
    return response.data;

}