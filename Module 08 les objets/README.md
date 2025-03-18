# Module 8 - Les objets : La POO Programation Oriéntée Objets
![alt text](m8.webp)

# 1 - "On the fly" ou à la volée
**classique**
```js
const personne = {prenom:'Brad',nom:'PITT'}
```
```js
const personne = {};
personne.prenom = 'Brad';
personne.nom = 'Brad';
```
**mode JSON ( pas très pratique)**
```js
const personne = {"prenom":"Brad","nom":"PITT"};
```
# 2 - Parcourir un objet ou plutot un JSON
**avec for + in**
```js
for ( let attribut in personne){
    console.log( attribut); // prenom ..nom
    // un objet c'est aussi un tableau
    console.log(personne[attribut]); // Brad ..PITT
}
```

# 3 - Mise en place d'une classe 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
```js
class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
}
const p1 = new Personne('Brad', 'PITT');
// on peut aussi
p1.age =18;
```
#  4 - Un tableau d'objet ?
## 41 - Déclarer
```js
const appareils =[
    {name:'TV', status:'allumé'},
    {name:'Xbox', status:'éteint'},
    {name:'Machine à café', status:'allumé'}
];
```
```js
const appareils =[];
```
## 42 - Ajouter un objet dans un tableau 
```js
const a = {name:'Play Station 5', status:'allumé'}
const b = new Appareil('Play Station 3','allumé');
appareils.push(a);
appareils.push(b);
```
## 43 - Afficher
La boucle for each **for** + **in** est adapté
```js
for (let a of appareils){
    console.log(a.name + ' '+ a.status)
}
```
La boucle avec map est encore mieux ! :heart_eyes:
```js
appareils.map( a => { console.log(a.name + ' '+ a.status)} );
```
avec l'indice si besoin
```js
appareils.map( (a,indice) => { 
  console.log(indice);
  console.log(a.name + ' '+ a.status);
});
```



## 44 - Changer l'attribut d'un objet dans un tableau
```js
appareils[2].status = 'éteint'; // Machine à café
```
## 45 - Changer l'attribut de tous les objet
**avec** for + of
```js
for (let a of appareils){
    a.status = 'éteint';
}
```
## 46 - Changer l'attribut de tous les objet
**avec map** :heart_eyes:
```js
appareils.map(a => a.status='éteint');
```


# 5 - le if ternaire
**if classique**
```js
const age =18;
if (age >= 18){
   console.log('ok');
}else{
   console.log('interdit');
}
```
**if ternaire** :sparkles:
```js
const age =18;
    // VIVE le if ternaire !!!
    age >= 18
      ? console.log('ok')
      : console.log('interdit')
```
il est possible le mettre sur une ligne
```js
    age >= 18 ? console.log('ok') : console.log('interdit')
```
if ternaire avec seulement si la contion est VRAI
```js
    age >= 18 && console.log('ENTREZ')
```


# 6 révision fonctions fléchées
une fonction qui multiplie par 2

```js
function multi1(num){
    return num*2
    }
    console.log(multi1(10));

    const multi2 =(num)=>{
    return num*2
    }
    console.log(multi2(10));
    
    const multi3 = num => num*2 ;
    console.log(multi3(10));
```

#  7 Filtrer un tableau pour créer un nouveau tableau
```js
   const personnes =[
        {id:1,prenom:'BRAD',nom:'PITT' ,age:20},
        {id:2,prenom:'TOM',nom:'CRUISE',age:14},
        {id:3,prenom:'Angelina',nom:'PITT',age:22},
        {id:4,prenom:'Bruce',nom:'Willis',age:15}
    ];
    // je veux les personnes majeur
    const personnesMajeur = personnes.filter(p => p.age>18)
   // const personnesMajeur = personnes.filter(p => (condition if))
    console.log(personnesMajeur)
/*
personnesMajeur =[
        {id:1,prenom:'BRAD',nom:'PITT' ,age:20},
        {id:3,prenom:'Angelina',nom:'PITT',age:22},
    ];
*/
 // trouver la famille PITT
    const personnesFamille = personnes.filter(p => p.nom== 'PITT')
     console.log(personnesFamille)
    
```

# 8  trouver un objet dans un tableau en fonction de son id
```js  
  //p3 : id = 3
    const p3 = personnes.find(p => p.id ==3);
    console.log(p3);
```