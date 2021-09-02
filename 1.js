var arr = [5, 10, 15, 19, 0, 30, 35, 40, 45, 50, 'code'];
var onlyNum = arr.filter(function(number) {
    return !isNaN(Number(number));
});
function list(onlyNum) {
    var sumOdd = 0;
    var sumPar = 0;
    var zero = 0;

    for (var i = 0; i < onlyNum.length; i++) {
        if (onlyNum[i] === 0) {
            zero++;
        }  else if (onlyNum[i] % 2 === 0) {
            sumPar++;
        } else {
            sumOdd++;
        }

    }

    console.log("Нечетные :", sumOdd);
    console.log("Четные :", sumPar);
    console.log("Ноль : ", zero);
}

list(onlyNum);
сы