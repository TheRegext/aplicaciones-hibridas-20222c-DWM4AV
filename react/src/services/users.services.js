async function login(email, password) {
    return fetch('http://localhost:2022/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(async (response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw await response.json()
            }
        })
}

async function logout() {
    return fetch('http://localhost:2022/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw response.json()
            }
        })
}

export {
    login,
    logout
}