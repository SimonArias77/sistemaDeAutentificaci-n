

(function () {
    const userOnline = localStorage.getItem("userOnline")
    // validar si el usuario existe, si no existe redirigir al login
    if (userOnline == null) {
        window.location.href = "/"
    }

})()


const btnLogout = document.getElementById("btn-logout")

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "/"
})
