const turnBold1 = () => {
    const input1 = document.getElementById("cb1")
    const etat = input1.checked

    if (etat == true) {
        document.getElementById("qP1").style.fontWeight = "bold"
        document.getElementById("qP1").style.transition = "fontWeight"
    } else {
        document.getElementById("qP1").style.fontWeight = "normal"
    }

    if (etat == true) {
        document.getElementById("aflex1").style.transform = "translateY(-75px)"
        document.getElementById("aflex1").style.opacity = "100"
    } else {
        document.getElementById("aflex1").style.transform = "translateY(-95px)"
        document.getElementById("aflex1").style.opacity = "0"
        document.getElementById("aflex1").style.transition = "transform 2s, opacity 2s"
    }

}

const input1 = document.getElementById("cb1")
input1.addEventListener("click", turnBold1)


const turnBold2 = () => {
    const input2 = document.getElementById("cb2")
    const etat = input2.checked

    if (etat == true) {
        document.getElementById("qP2").style.fontWeight = "bold"
        document.getElementById("qP2").style.transition = "fontWeight"
    } else {
        document.getElementById("qP2").style.fontWeight = "normal"
    }

    if (etat == true) {
        document.getElementById("aflex2").style.transform = "translateY(-75px)"
        document.getElementById("aflex2").style.opacity = "100"
    } else {
        document.getElementById("aflex2").style.transform = "translateY(-95px)"
        document.getElementById("aflex2").style.opacity = "0"
        document.getElementById("aflex2").style.transition = "transform 2s, opacity 2s"
    }

}

const input2 = document.getElementById("cb2")
input2.addEventListener("click", turnBold2)


const turnBold3 = () => {
    const input3 = document.getElementById("cb3")
    const etat = input3.checked

    if (etat == true) {
        document.getElementById("qP3").style.fontWeight = "bold"
        document.getElementById("qP3").style.transition = "fontWeight"
    } else {
        document.getElementById("qP3").style.fontWeight = "normal"
    }

    if (etat == true) {
        document.getElementById("aflex3").style.transform = "translateY(-75px)"
        document.getElementById("aflex3").style.opacity = "100"
    } else {
        document.getElementById("aflex3").style.transform = "translateY(-95px)"
        document.getElementById("aflex3").style.opacity = "0"
        document.getElementById("aflex3").style.transition = "transform 2s, opacity 2s"
    }

}

const input3 = document.getElementById("cb3")
input3.addEventListener("click", turnBold3)


const turnBold4 = () => {
    const input4 = document.getElementById("cb4")
    const etat = input4.checked

    if (etat == true) {
        document.getElementById("qP4").style.fontWeight = "bold"
        document.getElementById("qP4").style.transition = "fontWeight"
    } else {
        document.getElementById("qP4").style.fontWeight = "normal"
    }

    if (etat == true) {
        document.getElementById("aflex4").style.transform = "translateY(-75px)"
        document.getElementById("aflex4").style.opacity = "100"
    } else {
        document.getElementById("aflex4").style.transform = "translateY(-95px)"
        document.getElementById("aflex4").style.opacity = "0"
        document.getElementById("aflex4").style.transition = "transform 2s, opacity 2s"
    }

}

const input4 = document.getElementById("cb4")
input4.addEventListener("click", turnBold4)


const turnBold5 = () => {
    const input5 = document.getElementById("cb5")
    const etat = input5.checked

    if (etat == true) {
        document.getElementById("qP5").style.fontWeight = "bold"
        document.getElementById("qP5").style.transition = "fontWeight"
    } else {
        document.getElementById("qP5").style.fontWeight = "normal"
    }

    if (etat == true) {
        document.getElementById("aflex5").style.transform = "translateY(-75px)"
        document.getElementById("aflex5").style.opacity = "100"
    } else {
        document.getElementById("aflex5").style.transform = "translateY(-95px)"
        document.getElementById("aflex5").style.opacity = "0"
        document.getElementById("aflex5").style.transition = "transform 2s, opacity 2s"
    }

}

const input5 = document.getElementById("cb5")
input5.addEventListener("click", turnBold5)