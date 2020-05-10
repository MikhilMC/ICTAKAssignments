let empDetails = [];
let solution8 = document.getElementById("solution8");

function question_8() {
    for (let i=1; i<=10; i++) {
        document.getElementById("question" + i).setAttribute("hidden", true);
        document.getElementById("solution" + i).setAttribute("hidden", true);
        document.getElementById("question" + i + "Link").classList.remove("active", "bg-primary");
    }
    document.getElementById("question8").removeAttribute("hidden");
    document.getElementById("question8Link").classList.add("active", "bg-primary");
    document.getElementById("saveButton").addEventListener("click", saveDetails);
    document.getElementById("question8Button").addEventListener("click", sortData);
}

function saveDetails() {
    let empID = document.getElementById("empID").value;
    let empName = document.getElementById("empName").value;
    let empDept = document.getElementById("empDept").value;
    let empDesg = document.getElementById("empDesg").value;
    
    if (empID == "" || empName == "" || empDept == "" || empDesg == "") {
        solution8.removeAttribute("hidden");
        let answer = `<h1 class="heading">Solution</h1>\n`;
        answer += "<p>Forms must not be empty.</p>";
        solution8.innerHTML = answer;
    }
    else {
        solution8.innerHTML = "";
        let employee = {};
        employee["id"] = Number(empID);
        employee["name"] = empName;
        employee["department"] = empDept;
        employee["designation"] = empDesg;
        empDetails.push(employee);
        displayDetails();
    }
    //console.log(empDetails);
}

function sortData() {
    empDetails.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayDetails();
}

function displayDetails() {
    let tableStruct = initTable();
    let answer = `<h1 class="heading">Solution</h1>\n`;
    for (const employee of empDetails) {
        tableStruct += "<tr>\n";
        for (const key in employee) {
            tableStruct += `<td>${employee[key]}</td>\n`;
        }
        tableStruct += "</tr>\n";
    }
    tableStruct += "</tbody>\n</table>";
    solution8.removeAttribute("hidden");
    solution8.innerHTML = (answer + tableStruct);
}

function initTable(){
    let table = `
    <table class="table table-sm table-striped table-bordered">
    <thead class="thead-dark">
    <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Department</th>
    <th scope="col">Designation</th>
    </tr>
    </thead>
    <tbody>\n
    `;
    return table;
}