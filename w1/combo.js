function gen1(p, k) {
    ret = []
    for (i = p; i <= k; ++i) {
        digs = i.toString().split('')
        if (digs.every(d => i % d == 0) && i % digs.reduce((a, b) => a - -b) == 0)
            ret.push(i)
    }
    return ret
}

function primer(p, k) {
    primes = []
    for (i = 2, prime = true; i <= k; ++i, prime = true) {
        for (j = 2; prime && j < i; ++j)
            prime = (i % j != 0)
        if (prime) primes.push(i)
    }
    return primes
}

function fiboRec(n) {
    if (n<2) return n
    else return fiboRec(n-1)+fiboRec(n-2)
}

function fiboIter(n){
    f = [0, 1]
    while (n-- > 0) f = [f[1], f[0]+f[1]]
    return f[0]
}

gen1(1, 100000)
primer(1, 100000)
for(k=10; k<45; ++k){
    console.log('k:'+k)
    console.time('iter')
    fiboIter(k)
    console.timeEnd('iter')
    console.time('rec')
    fiboRec(k)
    console.timeEnd('rec')
}
