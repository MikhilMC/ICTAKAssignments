function question_6() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question6").removeAttribute("hidden");
    document.getElementById("question6Link").classList.add("active", "bg-primary");
    document.getElementById("question6Button").addEventListener("click", truncate);
}

function truncate() {
    let stringLimit = document.getElementById("stringLimit").value;
    let string2 = document.getElementById("string2").value;
    let solution6 = document.getElementById("solution6");
    solution6.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;
    if (stringLimit == "" || string2 == "") {
        answer += "<p>The forms must not be empty. And also try to give integer values for string limit.</p>";
    }
    else {
        stringLimit = Number(stringLimit);
        if (stringLimit < 0) {
            answer += "<p>Do not set string limit as negative number.</p>";
        }
        else if (stringLimit == 0) {
            answer += `
            <p>Since the limit is 0, there is no need for truncation.
            <br>Then the resulting string is <strong>${string2}</strong></p>`
        }
        else {
            answer += `<p>The truncated string : <strong>${string2.substring(0, stringLimit)}</strong></p>`;
        }
    }
    solution6.innerHTML = answer;
}