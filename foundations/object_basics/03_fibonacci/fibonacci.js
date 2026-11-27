const fibonacci = function(n) {
    if(typeof n !== 'number'|| Number.isNaN(n) ||n <= 0) {return('OOPS');}
    if(n === 0) return 0;
    let prev = 0;
    let curr = 1; 

    for( let i = 2; i <= n; i++){
        const next = prev + curr; 
        prev = curr;
        curr = next;
    }
    return curr;

};

// Do not edit below this line
module.exports = fibonacci;
