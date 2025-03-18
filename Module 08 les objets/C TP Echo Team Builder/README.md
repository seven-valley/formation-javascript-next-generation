# TP Echo Team Builder
**live preview** :  
[Tester le TP Echo](https://www.sevenvalley.fr/tp-javascript/tpe) 

![alt text](tpe.webp)

- Création d'objet Equipe
- Création d'objet Personne
- Création d'un objet Entreprise
- Ajouter des personnes dans des équipes

## Structure :
**Entreprise :**
```js
const entreprise ={
    personnes =[];
    equipes =[];
}
```

**Personne :**
```js
const personne ={
    id: '42',
    prenom: 'Brad',
    nom:'PITT'
}
```

**Equipe :**
```js
const equipe ={
    id: '23',
    nom: 'Team A'
    personne:[
        { id: '42',prenom: 'Brad', nom:'PITT'},
        { id: '22',prenom: 'Tom', nom:'CRUISE'},
    ]
}
```
## EXERCICES
**Excercice 1**  
Créer le tableau  **nouveauClients** à partir de personnes et clients  
utiliser <code>.filter</code> et <code>.find</code>
```js
    const personnes =[
        {id:1,prenom:'Brad',nom:'PITT'},
        {id:2,prenom:'Tom',nom:'CRUISE'},
        {id:3,prenom:'Angelina',nom:'JOLIE'},
        {id:4,prenom:'Nicolas',nom:'CAGE'}
    ];
    const clients =[
        {id:1,prenom:'Brad',nom:'PITT'},
        {id:3,prenom:'Angelina',nom:'Jolie'}
    ];
// const nouveauClients =[
//         {id:2,prenom:'Tom',nom:'CRUISE'},
//         {id:4,prenom:'Nicolas',nom:'CAGE'}
//     ];
```
**Excercice 2**  
Créer le tableau  **dejaClients** à partir de personnes et clients  
utiliser <code>.filter</code> et <code>.find</code>
```js
    const personnes =[
        {id:1,prenom:'Brad',nom:'PITT'},
        {id:2,prenom:'Tom',nom:'CRUISE'},
        {id:3,prenom:'Angelina',nom:'JOLIE'},
        {id:4,prenom:'Nicolas',nom:'CAGE'}
    ];
    const clients =[
        {id:1,prenom:'Brad',nom:'PITT'},
        {id:3,prenom:'Angelina',nom:'Jolie'}
    ];
// const dejaClients =[
//      {id:1,prenom:'Brad',nom:'PITT'},
//      {id:3,prenom:'Angelina',nom:'Jolie'}
//     ];
```

**Excercice 3**   
Créer le tableau  **majeurs** à partir de personnes  
utiliser <code>.fitler</code>
```js
        const personnes =[
        {id:1,prenom:'Brad',nom:'PITT',age:18},
        {id:2,prenom:'Tom',nom:'CRUISE',age:15},
        {id:3,prenom:'Angelina',nom:'JOLIE',age:16},
        {id:4,prenom:'Nicolas',nom:'Cage',age:61}
    ];
   
// const majeurs =[
//     {id:1,prenom:'Brad',nom:'PITT',age:18},
//     {id:4,prenom:'Nicolas',nom:'Cage',age:61}
//     ];
```


**Excercice 4**  
Créer le tableau  **majeurs** à partir de personnes  
1 - Calucler le Total avec <code>.map</code>  
2 - calculer le Toatl avec <code>.reduce</code>
```js
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];

let totalPrice = 0;

```