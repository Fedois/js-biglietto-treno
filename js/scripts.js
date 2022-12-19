alert('clicca su "ok" per il fare il calcolo prezzo biglietto del treno')

const kilometri = prompt('quanti kilometri vuoi percorrere?');
console.log('km: ', kilometri)

const età = prompt('quanti anni hai?');
console.log('età: ', età);

let prezzokm = (kilometri * 0.21);

if(età < 18){
    alert('avrai uno sconto del 20%');
    
    totaleUno = ((prezzokm / 100) * 20) .toFixed(2);
    console.log('prezzo finale: ', totaleUno);

    document.getElementById('prezzo').innerHTML = totaleUno;

}
else if(età >= 65){
    alert ('avrai uno sconto del 40%');
    
    let totaleDue = ((prezzokm / 100) * 40) .toFixed(2);
    console.log('prezzo finale: ', totaleDue); 

    document.getElementById('prezzo').innerHTML = totaleDue; 
}
