'use strict';

function calcAge(birthYear){
    const age = 2037- birthYear;
    console.log(firstName);

    function printAge(){
        const output = `You are ${age} years old! And were born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1940 && birthYear<= 1996){
            var millenial = true;
            const str = `Oh and you're a millenial. ${firstName}`;
            console.log(str);
        }
        console.log(millenial);
    }
    printAge();

    return age;
}

const firstName = 'Dusan';
calcAge(1945);
