function question_4() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question4").removeAttribute("hidden");
    document.getElementById("question4Link").classList.add("active", "bg-primary");
    document.getElementById("question4Button").addEventListener("click", sumOfSquares);
}

function sumOfSquares() {
    let number3Array = document.getElementById("number3Array").value;
    let solution4 = document.getElementById("solution4");
    solution4.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;

    if (number3Array == "") {
        answer += "<p>The form must not be empty</p>";
    }
    else {
        number3Array = number3Array.split(", ");
        if (number3Array.includes("") || number3Array.includes(",")) {
            answer += "<p>You can not include empty character in the array</p>";
        }
        else {
            number3Array = number3Array.map(n=>Number(n));
            if (number3Array.includes(NaN)) {
                answer +="<p>You must enter only valid numbers</p>";
            }
            else {
                const reducer = (accumulator, item) => {
                    return accumulator + (item * item);
                }
                answer += `<p>The sum of squares of the given array is <strong>${number3Array.reduce(reducer, 0)}</strong></p>`;
            }
        }
    }
    solution4.innerHTML = answer;
}