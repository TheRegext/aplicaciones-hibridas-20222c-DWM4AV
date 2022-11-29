
async function find() {
    return fetch('http://localhost:2022/api/productos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Ocurrio un inconveniente')
            }
        })
}

async function findById(id) {
    return fetch(`http://localhost:2022/api/productos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Ocurrio un inconveniente')
            }

        })
}

async function getReviews(id) {
    return fetch(`http://localhost:2022/api/productos/${id}/reviews`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Ocurrio un inconveniente')
            }

        })
}
async function create(product) {
    return fetch('http://localhost:2022/api/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(product)
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('Ocurrio un inconveniente')
            }

        })
}

export {
    find,
    findById,
    getReviews,
    create
}