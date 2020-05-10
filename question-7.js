function question_7() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question7").removeAttribute("hidden");
    document.getElementById("question7Link").classList.add("active", "bg-primary");
    document.getElementById("question7Button").addEventListener("click", findLarge)
}

function findLarge() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    //console.log(number1, number2);
    let solution7 = document.getElementById("solution7");
    solution7.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;
    if (number1 == "" || number2 == "") {
        answer += "<p>The form must be filled.</p>";
    }
    else {
        [number1, number2] = [Number(number1), Number(number2)];
    
        if (number1 > number2) {
            answer += `<p>${number1} is larger than ${number2}.</p>`
        }
        else if (number1 < number2) {
            answer += `<p>${number2} is larger than ${number1}.</p>`
        }
        else {
            answer += "<p>Both numbers are same.</p>"
        }
    }
    solution7.innerHTML = answer;
}