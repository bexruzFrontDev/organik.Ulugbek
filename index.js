let sayt = document.querySelector('.sayt')
let mobile = document.querySelector('.mobile')
mobile.onclick = function () {
    sayt.classList.toggle('dark')
    mobile.classList.toggle('moon')
}