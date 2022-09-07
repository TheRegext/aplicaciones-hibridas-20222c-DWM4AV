async function A() {
    console.log("A");
    throw new Error("Error en A")
    return 15;
}

async function B() {
    console.log("B");
    return 10;
}

async function C() {
    console.log("C");

    return B()
}

C()
    .then(function (data) {
        console.log("data", data)
    })

/*
A()
    .then(function (data) {
        console.log('TODO OK', data)
        return [1, 2, 3, 4]
    })
    .catch(function () {
        console.log('TODO MAL')
        return []
    })
    .then(function (data) {
        console.log('TODO OK', data)
    })
    .finally(function () {
        console.log('TODO TERMINO')
    })
*/