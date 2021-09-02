function isPrime(num) {
    if(num < 2 || num > 1000) {
        console.log('Wrong value');
        return;
    }
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('Number is prime');
    } else {
        console.log('Number is not prime');
    }

}

isPrime(7)