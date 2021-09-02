
function fabrica(n){
    return function (m){
        return n + m;
    }
}

const summator = fabrica(2);

console.log(summator(3));