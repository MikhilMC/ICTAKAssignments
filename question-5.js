function question_5() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question5").removeAttribute("hidden");
    document.getElementById("question5Link").classList.add("active", "bg-primary");
    document.getElementById("question5Button").addEventListener("click", generateSeries);
}

function generateSeries() {
    let solution5 = document.getElementById("solution5");
    solution5.removeAttribute("hidden");
    let range = Array.from(Array(16), (_,x)=>x);
    let answer = `<h1 class="heading">Solution</h1>\n`;
    answer += `
        <table class="table table-sm table-striped table-bordered">
        <thead class="thead-dark">
        <tr>
        <th scope="col">Number</th>
        <th scope="col">Odd or Even</th>
        </tr>
        </thead>
        <tbody>\n`;
    for (const i in range) {
        answer += "<tr>";
        answer += `<td>${i}</td>`;
        answer += `<td>${oddOrEven(i)}</td>`;
        answer += "</tr>";
    }
    solution5.innerHTML = answer + "</tbody>\n</table>";
}

function oddOrEven(num) {
    if (num%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}