function question_2() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question2").removeAttribute("hidden");
    document.getElementById("question2Link").classList.add("active", "bg-primary");
    document.getElementById("question2Button").addEventListener("click", mostFrequentItem);
}

function mostFrequentItem() {
    let number2Array = document.getElementById("number2Array").value;
    let solution2 = document.getElementById("solution2");
    solution2.removeAttribute("hidden");
    let answer = `<h1 class="heading">Solution</h1>\n`;

    if (number2Array == "") {
        answer += "<p>The form must not be empty</p>";
    }
    else {
        number2Array = number2Array.split(", ");
        if (number2Array.includes("") || number2Array.includes(",")) {
            answer += "<p>You can not include empty character in the array</p>";
        }
        else {
            number2Array = number2Array.map(n=>Number(n));
            if (number2Array.includes(NaN)) {
                answer += "<p>You must enter only valid numbers</p>";
            }
            else {
                let freq = findFrequency(number2Array);
                if (freq.length == 1){
                    answer += `<p>The most frequent number is <strong>${freq}</strong>.</p>`;
                }
                else {
                    answer += `<p>The most frequent numbers are <strong>${freq}</strong>.</p>`;
                }
            }
        }
    }
    solution2.innerHTML = answer;
}

function findFrequency(numbers) {
    let freq = {};
    for (const num of numbers) {
        if (!(num in freq)) {
            freq[num] = 1;
        }
        else {
            freq[num]++;
        }
    }
    let revFreq = {};
    for (const key in freq) {
        if (!(freq[key] in revFreq)) {
            revFreq[freq[key]] = [key];
        }
        else {
            revFreq[freq[key]].push(key);
        }
    }
    let k = Object.keys(revFreq);
    let kMax = Math.max.apply(Math, k);
    return revFreq[kMax];
}