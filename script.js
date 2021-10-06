const turnBold = () => {
    const input = document.getElementById("cb1")
    const etat = input.checked


    document.getElementById("qP").style.fontWeight = "bold"

}


const input = document.getElementById("cb1")
input.addEventListener("click", turnBold)