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