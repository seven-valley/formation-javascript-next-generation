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
    pdf.setFontSize(11);
    pdf.text('Hello World',50,40,)
    pdf.output('dataurlnewwindow');
    }

</script>
```