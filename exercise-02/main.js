let firstNr = prompt(`Give us a number to see its divisibility: `);
firstNr = Number(firstNr);

if(firstNr % 3 == 0){
    alert(`${firstNr} is divisible with 3 !`)
}

else{
    alert(`${firstNr} is not divisible with 3`);
}

if(firstNr % 5 == 0){
    alert(`${firstNr} is divisible with 5`);
}

else{
    alert(`${firstNr} is not divisible with 5`);
}

