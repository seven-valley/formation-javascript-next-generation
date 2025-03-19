# demo jsPDF

```html


<button id="btnPDF">Générer PDF</button>
<script 
src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/3.0.1/jspdf.umd.min.js" 
integrity="sha512-ad3j5/L4h648YM/KObaUfjCsZRBP9sAOmpjaT2BDx6u9aBrKFp7SbeHykruy83rxfmG42+5QqeL/ngcojglbJw==" 
crossorigin="anonymous" 
referrerpolicy="no-referrer">
</script>

<script type="module">
    // ligne manquante
    window.jsPDF = window.jspdf.jsPDF;
    document.getElementById('btnPDF').onclick= ()=>{
    //console.log('pdf');
    //var pdf = new jsPDF('p', 'pt', 'letter');
    const pdf = new jsPDF();
    pdf.setFontSize(50);
    pdf.addImage('./react.jpg', "JPG", 10, 10, 55, 30);
    pdf.text('Hello World',50,80)

    pdf.setFillColor(230,230,230);
    // x,y,width,height
    pdf.rect(0,150,180,20,'F');
    pdf.setFillColor(240,240,240);
    pdf.rect(0,170,180,20,'F');
    pdf.setFillColor(230,230,230);
    pdf.rect(0,190,180,20,'F');
    pdf.output('dataurlnewwindow');
    // pdf.save(`Facture.pdf`);// save a file
    }

</script>
```

- Afficher la liste des vip sur un pdf
- Afficher une image
- Afficher un couleur de fond
- Ajouter une police ttf

# jsPDF avec React

```
npm i jspdf
```

```jsx

import jsPDF from "jspdf";
import "./App.css";
import imgReact from "./assets/react.jpg";
export default function App() {

  const afficherPDF =()=>{
    const pdf = new jsPDF();
    pdf.setFontSize(50);
    pdf.addImage(imgReact, "JPG", 10, 10, 55, 30);
    pdf.text('Hello World',50,80)

    pdf.setFillColor(230,230,230);
    // x,y,width,height
    pdf.rect(0,150,180,20,'F');
    pdf.setFillColor(240,240,240);
    pdf.rect(0,170,180,20,'F');
    pdf.setFillColor(230,230,230);
    pdf.rect(0,190,180,20,'F');
    pdf.output('dataurlnewwindow');
    // pdf.save(`Facture.pdf`);// save a file
 }
  return (
    <>

      <button onClick={afficherPDF} className="btn btn-primary">PDF</button>
      
      
    </>
  );
}

```

# Correction

- copier dans le répertoire <code>assets</code> : logo.png
- copier dans le répertoire <code>assets</code> : OpenSans-Regular.ttf

```jsx
 import jsPDF from 'jspdf'
import logo from '../assets/logo.png'
import open from '../assets/OpenSans-Regular.ttf'

 //...
  const afficher=()=>{
    const pdf = new jsPDF();
    pdf.addFont(open,"OpenSans-Regular","normal")
    pdf.setFont("OpenSans-Regular")
    pdf.addImage(logo,'PNG',10,10,30,30)
    pdf.setFontSize(50)
   
    pdf.text("hello world !",50,50)
    pdf.setFontSize(12)
   
    let myY=113;
    let test = true;
    //-------------------------------
    personnes.map(p=>{
      if(p.present){
        if (test){
          pdf.setFillColor(233,232,232);
        }
        else{
          pdf.setFillColor(246,246,246);
        }
        
        pdf.rect(40,myY-20,100,10,"F");
        
        myY+=10;
        test = !test;
      }
    })
    //-------------------------------
    myY=100;
    personnes.map(p=>{
      if(p.present){
      pdf.text(`${p.prenom} ${p.nom}`,50,myY)
      myY+=10;
      test = !test;
    }
    })
    //-------------------------------
    pdf.output('dataurlnewwindow');
    //pdf.save(`document.pdf`)
}
```