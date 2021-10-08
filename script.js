const questionsContainers = Array.from(document.getElementsByClassName("question_container"))
const answersContainers = Array.from(document.getElementsByClassName("answer_container"))


for (let i = 0; i < questionsContainers.length; i++) {
    questionsContainers[i].addEventListener("click", function (event) {

        if (answersContainers[i].style.height == "100px") {
            answersContainers[i].style.height = "0px"
            questionsContainers[i].querySelector("h2").style.fontWeight = "400"
        } else {
            answersContainers[i].style.height = "100px"
            questionsContainers[i].querySelector("h2").style.fontWeight = "bold"
        }
    })

}