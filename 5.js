//без проверки на натуральность

const fatBodyArrowFunction = (x,n) =>Math.pow(x, n);

console.log(fatBodyArrowFunction(5, 10))



//с проверкой на натуральность
const fatBodyArrowFunction = (x,n) =>
{

    if (Number.isInteger(x) && Number.isInteger(n)) {
        return Math.pow(x, n);
    }
    else {
        return 'Does NOT fit!';
    }
}



console.log(fatBodyArrowFunction(5, 0.5))