function question_1(){
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question1").removeAttribute("hidden");
    document.getElementById("question1Link").classList.add("active", "bg-primary");
    document.getElementById("question1Button").addEventListener("click", checkPrime);
}

function checkPrime() {
    let number1Array = document.getElementById("number1Array").value;
    let solution1 = document.getElementById("solution1");
    solution1.removeAttribute("hidden");
    solution1.innerHTML = `<h1 class="heading">Solution</h1>`;
    let answer;
    if (number1Array === "") {
        answer = "<p>The form must not be empty.</p>";
    }
    else {
        number1Array = number1Array.split(", ");
        if (number1Array.includes("")) {
            answer = "<p>You can not include empty character in the array</p>";
        }
        else {
            number1Array = number1Array.map(n=>Number(n));
            if (number1Array.includes(NaN)) {
                answer = "<p>You must enter only valid numbers</p>";
            }
            else if(number1Array[0] == 0 || number1Array[0] == 1) {
                answer = `<p>The first element of array is ${number1Array[0]}, and it can not be <strong>a prime number</strong>.</p>`;
            }
            else if (number1Array[0] < 0) {
                answer = `<p>The first element of the array is ${number1Array[0]}, and negative numbers can not be <strong>prime numbers</strong>.</p>`;
            }
            else if (isPrime(number1Array[0])) {
                answer = `<p>First number of the given array is ${number1Array[0]}, and it is <strong>a prime number</strong>.</p>`;
            }
            else {
                answer = `<p>First number of the given array is ${number1Array[0]}, and it is <strong>not a prime number</strong>.</p>`;
            }
        }
    }
    solution1.innerHTML += answer;
}

function isPrime(n) {
    let factors = 0;
    for (let i=1; i<=n/2; i++) {
        if (n%i == 0) {
            factors++;
        }
    }
    if(factors > 1) {
        return false;
    }
    else {
        return true;
    }
}