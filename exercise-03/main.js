let nrOne = prompt('Input the first number: ');
nrOne = Number(nrOne);

let nrTwo = prompt(`Input the second number: `);
nrTwo = Number(nrTwo);

let output = '';
for (let i = nrOne; i <= nrTwo; i++){
    output = output + i +',';
}

alert(output);