function question_3() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question3").removeAttribute("hidden");
    document.getElementById("question3Link").classList.add("active", "bg-primary");
    document.getElementById("question3Button").addEventListener("click", changeCase);
}

function changeCase() {
    let string1 = document.getElementById("string1").value;
    let solution3 = document.getElementById("solution3");
    solution3.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;
    if (string1 == "") {
        answer += "<p>Please enter any string.</p>"
    }
    else {
        let newWord = "";
        let newLetter;
        for (const letter of string1) {
            if (!isNaN(letter)) {
                newLetter = letter;
            }
            else if (letter == letter.toLowerCase()){
                newLetter = letter.toUpperCase();
            }
            else if (letter == letter.toUpperCase()) {
                newLetter = letter.toLowerCase();
            }
            newWord += newLetter;
        }
        answer += `<p>The new string with changed letter case : <strong>${newWord}</strong></p>`;
    }
    solution3.innerHTML = answer;
}