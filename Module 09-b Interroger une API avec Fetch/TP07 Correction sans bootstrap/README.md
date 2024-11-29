# TP07 Correction sans bootstrap

```html
<input id="serie" value="star" /> <br /><br />
<button id="btnAjouter">Ajouter</button>
<table id="myTable" border="1">
  <thead>
    <tr>
      <th>Serie</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="myTbody"></tbody>
</table>
<h1>Mes Séries</h1>
<table id="myTable2" border="1">
  <thead>
    <tr>
      <th>Serie</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="myTbody2"></tbody>
</table>
<template id="myTr">
  <tr>
    <td>nom du film</td>
    <td><img width="80" /></td>
    <td>
      <button></button>
    </td>
  </tr>
</template>
<script>
  let series = [];
  let fav = [];
  const key = "efdc2275";
  const url = `http://www.omdbapi.com/?apikey=${key} `;
  document.getElementById("btnAjouter").onclick = async () => {
    document.getElementById("myTbody").innerHTML = ""; // vider le tbody
    const serie = document.getElementById("serie").value;
    document.getElementById("serie").value = ""; // vide input
    const url2 = `${url}&s=${serie}&type=series`;
    const r = await fetch(url2);
    const data = await r.json();
    series = data.Search;
    for (let s of data.Search) {
      const clone = document.getElementById("myTr").content.cloneNode(true);
      clone.querySelectorAll("td")[0].textContent = s.Title;
      clone.querySelector("img").setAttribute("src", s.Poster);
      clone.querySelector("button").textContent = "Ajouter";
      clone.querySelector("button").onclick = async (event) => {
        const indice = event.target.closest("tr").rowIndex - 1;
        fav.push(series[indice]);
        afficherFav();
        localStorage.setItem("fav", JSON.stringify(fav));
      };
      document.getElementById("myTbody").appendChild(clone);
    }
  };
  //---------------------------------------------
  const afficherFav = () => {
    console.log("b");
    const myTbody2 = document.getElementById("myTbody2");
    myTbody2.innerHTML = "";
    for (let s of fav) {
      const clone = document.getElementById("myTr").content.cloneNode(true);
      clone.querySelectorAll("td")[0].textContent = s.Title;
      clone.querySelector("img").setAttribute("src", s.Poster);
      clone.querySelector("button").textContent = "Effacer";
      clone.querySelector("button").onclick = (event) => {
        console.log("aa");
        const indice = event.target.closest("tr").rowIndex - 1;
        fav.splice(indice, 1);
        console.log(fav);
        afficherFav();
        localStorage.setItem("fav", JSON.stringify(fav));
      };
      myTbody2.appendChild(clone);
    }
  };
  //---------------------------------------------
  const data = localStorage.getItem("fav");
  if (data) {
      fav = JSON.parse(data);
      afficherFav();
    }
    //---------------------------------------------
</script>

```