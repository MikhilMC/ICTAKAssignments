function question_10() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question10").removeAttribute("hidden");
    document.getElementById("question10Link").classList.add("active", "bg-primary");
    document.getElementById("question10Button").addEventListener("click", makePattern);
}

function makePattern() {
    let patternLevel = document.getElementById("patternLevel").value;
    let solution10 = document.getElementById("solution10");
    solution10.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;
    if (patternLevel == "") {
        answer += "<p>Please provide any valid number</p>"
    }
    else {
        patternLevel = Number(patternLevel);
        if (patternLevel <= 0) {
            answer += "<p>Please provide any positve non-zero value as the level of the pattern.</p>"
        }
        else {
            let pattern = "<p class=\"pattern\"><strong>";
            for (let i = 0; i < Number(patternLevel); i++) {
                for (let j = 0; j <= i; j++) {
                    pattern += "* ";
                }
                pattern += "<br>";
            }
            answer += (pattern + "</strong></p>");
        }
    }
    solution10.innerHTML = answer;
}