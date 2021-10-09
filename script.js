const questionsContainers = Array.from(document.getElementsByClassName("question_container"))
const answersContainers = Array.from(document.getElementsByClassName("answer_container"))


for (let i = 0; i < questionsContainers.length; i++) {
    questionsContainers[i].addEventListener("click", function (event) {

        if (answersContainers[i].style.height == answersContainers[i].scrollHeight + "px") {
            answersContainers[i].style.height = "0px"
            questionsContainers[i].querySelector("h2").style.fontWeight = ""
        } else {
            answersContainers[i].style.height = "0px"
            answersContainers[i].style.height = answersContainers[i].scrollHeight + "px"
            questionsContainers[i].querySelector("h2").style.fontWeight = "bold"
        }
    })

}