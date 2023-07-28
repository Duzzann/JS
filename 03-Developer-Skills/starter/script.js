// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function(arr){
    let output = '';
    for(let i = 0; i<arr.length;i++){
        output += '...'+arr[i]+'° in '+i+' days';
    }
    output+='...';
    console.log(output);
};
printForecast([12,5,-5,0,4]);