{ // 1st
    var foo = {
        _x: 1,
        bar: function () {
            console.log(`foobar: ${foo.x}`)
            return foo.x
        },
        get x() { return foo._x },
        set x(X) { foo._x = X; console.log('bar set') },
    }

    foo.x = 3
    console.log(foo.bar())

    Object.defineProperty(foo, "x", { get() { return foo._x + 17 } })
    console.log(foo.bar())
    console.log('1^----')
}

{ // 2nd
    var fiboCached = function () {
        var cache = {}

        return function f(n) {
            if (n in cache) return cache[n]
            else {
                if (n < 2) return n
                return (cache[n] = f(n - 1) + f(n - 2))
            }
        }
    }()

    console.log(fiboCached(17))
    console.log('2^----')
}

{ // zad3
    function myForEach(a, f) {
        for (let x of a) f(x)
    }

    function myMap(a, f) {
        let t = []
        for (let x of a) t.push(f(x))
        return t
    }

    function myFilter(a, pred) {
        let t = []
        for (let x of a) if (pred(x)) t.push(x)
        return t
    }

    let a = [1, 2, 3, 4, 5]
    console.log(myForEach(a, _ => console.log(fiboCached(_))))
    console.log(myMap(a, fiboCached))
    console.log(myFilter(a, x => x % 2 != 0))
    console.log('3^----')
}

{ // zad4
    function createFs(n) {
        let fs = []
        for (var i = 0; i < n; ++i)
            fs[i] = function (i) { return function () { return i } }(i)
        return fs
    }

    let myfs = createFs(10)
    console.log(myfs.map(_ => _()))
    console.log('4^----')
}

{ // zad5
    function mySum(...args) { return args.reduce((a, b) => a + b, 0) }
    console.log(mySum(1, 2, 3, 4, 5, 6))
    console.log('5^----')
}

{ //zad6
    function gengen(limit) {
        return function* () {
            for (let i = 0; i < limit; i++)
                yield i
        }
    }

    let g1 = gengen(3);
    let g2 = gengen(4)
    for (let f of g1()) for (let g of g2()) console.log(f + "" + g)
    console.log('6^----')
}

{ //zad7
    let fibo = function () {
        let [a, b] = [0, 1]

        return function* () {
            while (true) {
                [a, b] = [b, a + b]
                yield b - a
            }
        }

    }()

    for (let x of fibo()) console.log(x)
    console.log('7^----')

}

