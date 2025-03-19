let personnes = [];
//---------
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
    this.status = true;
  }
}

//---------
const afficherHTML = () => {
  const tbody = document.getElementById("myTbody");
  // vider le tableau HTML
  tbody.innerHTML = "";
  for (let p of personnes) {
    const template = document.getElementById("templateTr");
    // cloner le template
    const clone = template.content.cloneNode(true);
    // querySelectorAll retourne 1 tableau
    let tr = clone.querySelector("tr");
    // VIVE le if ternaire !!!
    p.status
      ? tr.classList.add("table-success")
      : tr.classList.add("table-danger");

    let td = clone.querySelectorAll("td");
    td[0].innerHTML = p.prenom;
    td[1].innerHTML = p.nom;
    btnEnlever = clone.querySelector(".btn-danger");
    btnEnlever.onclick = (evt) => {
      let tr = evt.target.closest("tr");
      let i = tr.rowIndex - 1;
      effacerFire(personnes[i].id);
      personnes.splice(i, 1);
      //  tr.remove();

      afficherHTML();
    };
    btnModifier = clone.querySelector(".btn-warning");
    btnModifier.onclick = async (evt) => {
      let tr = evt.target.closest("tr");
      let i = tr.rowIndex - 1;
      personnes[i].status = !personnes[i].status;
      await modifierFire(personnes[i].id, personnes[i].status);
      afficherHTML();
    };

    tbody.appendChild(clone);
  } // for
};

document.getElementById("btnAjouter").onclick = async () => {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("prenom").value = ""; // vider input
  document.getElementById("nom").value = "";
  const p = new Personne(prenom, nom);
  const p2 = await ajouterFire(p);
  console.log("def", personnes);
  personnes.push(p2);
  afficherHTML();
};
//----------------

const go = async () => {
  data = await lireFire();
  if (data) {
    for (let attribut in data) {
      console.log(attribut); // id : -fsfez
      console.log(data[attribut]); // mon objet
      const p = data[attribut];
      p.id = attribut;
      personnes.push(p);
    }
    afficherHTML();
  }
  console.log("abc", personnes);
};
go();
