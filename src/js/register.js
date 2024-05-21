//llamar al formulario

const form = document.getElementById("register-Form")

//llamar  a los campos del  formulario

const username = document.getElementById("username")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) => {
    event.preventDefault() // evitar que la pagina se recarge
    const revisionEmail = await checkEmail(email)
    const revisionPassword = checkPasswords(password, confirmPassword)
    if (revisionEmail === true) {
        alert("puedes usarlo")
    } else {
        alert("no puedes usarlo")
    }

    if (revisionEmail === true && revisionPassword === true) {
        await registerUser(username, lastName, email, password)
    }
})
async function checkEmail(email) {
    // traemos a todos los usuarios que tengan el email que se ingreso
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const datos = await response.json()


    // verificamos que el email no este registrado
    if (datos.length > 0) {
        return false
    } else {
        return true
    }
}

function checkPasswords(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true
    } else {
        return false
    }
}

async function registerUser(username, lastName, email, password) {
    const newUser = {
        username: username.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }
    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}