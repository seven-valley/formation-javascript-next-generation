# TP Echo Correction

## Excercices
```js
const personnes =[
    {id:1,nom:'BRAD',prenom:'PITT'},
    {id:2,nom:'TOM',prenom:'CRUISE'},
    {id:3,nom:'Angelina',prenom:'Jolie'},
    {id:4,nom:'Bruce',prenom:'Willis'}
];

const clients =[
    {id:1,nom:'BRAD',prenom:'PITT'},
    {id:3,nom:'Angelina',prenom:'Jolie',age:16}
];
// excercice 1
const nouveauClients =personnes.filter(p => !clients.find(c => p.id === c.id));
console.log(nouveauClients);

// excercice 2
const dejaClients =personnes.filter(p => clients.find(c => p.id === c.id));
console.log(dejaClients);
```
```js
// excercice 3
const acteurs =[
        {id:1,nom:'BRAD',prenom:'PITT',age:18},
        {id:2,nom:'TOM',prenom:'CRUISE',age:15},
        {id:3,nom:'Angelina',prenom:'Jolie',age:16},
        {id:4,nom:'TOM',prenom:'CRUISE',age:61}
    ];
   
const majeurs = acteurs.filter(p => (p.age>= 18));
console.log(majeurs);
```
```js
// excercice 4
const items = [
  { name: 'Apple', price: 1 },
  { name: 'Orange', price: 2 },
  { name: 'Mango', price: 3 },
];

let total1 = 0;
items.map(item => { total1 += item.price});
console.log(total1);

const total2 = items.reduce((accumulator ,item) => {
  return accumulator += item.price;
}, 0);
console.log(total2);
```

```js
// excercice 5
const personnes =[
        {id:1,nom:'BRAD',prenom:'PITT', categ:'MEMBRE'},
        {id:2,nom:'TOM',prenom:'CRUISE',categ:'NON MEMBRE'},
        {id:3,nom:'Angelina',prenom:'Jolie',categ:'MEMBRE'},
        {id:4,nom:'Bruce',prenom:'Willis',categ:'NON MEMBRE'}
    ];

const groupedItems = personnes.reduce((accumulator, personne) => {
  const category = personne.categ;
  if (!accumulator[category]) {
    accumulator[category] = []
  }
  accumulator[category].push(personne);
  return accumulator
}, {})

console.log(groupedItems);
//Afficher les membres
console.log(groupedItems['MEMBRE'])
```