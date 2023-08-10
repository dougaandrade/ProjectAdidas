var modallog = document.getElementById("modallog");

var btnlogin = document.getElementById("login");



btnlogin.addEventListener("click", () => {
    modallog.style.display = "block";
});


window.addEventListener("click", (event) => {
    if (event.target === modallog) {
        modallog.style.display = "none";
    }
});