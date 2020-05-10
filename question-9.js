function question_9() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question9").removeAttribute("hidden");
    document.getElementById("question9Link").classList.add("active", "bg-primary");
    document.getElementById("question9Button").addEventListener("click", jsPattern);
}

function jsPattern() {
    let solution9 = document.getElementById("solution9");
    solution9.removeAttribute("hidden");
    let word = "Javascript";
    let answer = `<h1 class="heading">Solution</h1>\n`;
    answer += "<p class=\"pattern\">";
    let newWord;
    for (let i = 0; i <= word.length; i++) {
        newWord = "";
        for (const letter of word.substring(0, i)) {
            newWord += letter;
        }
        console.log(newWord);
        answer += (newWord + "<br>");
    }
    solution9.innerHTML = answer + "</p>";
}