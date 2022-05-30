import Swal from "sweetalert2/dist/sweetalert2.all"

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const bigAlerts = (type, header, msg) => {
    if (type === "wrong") {
        Swal.fire({
            title: header,
            text: msg,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#f9458e",
            icon: 'error',
            background: '#fff'
        })
    }
    if (type === "success") {
        Swal.fire({
            title: header,
            text: msg,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#f9458e",
            icon: 'success',
            background: '#fff'
        })
    }
}

export const littleAlerts = (type) => {
    if (type === "opened") {
        Toast.fire({
            icon: 'success',
            title: 'Inicio de sesión con éxito'
        })
    }
    if (type === "closed") {
        Toast.fire({
            icon: 'success',
            title: 'Cierre de sesión con éxito'
        })
    }
}