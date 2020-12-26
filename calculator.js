let result = document.getElementById("result");
let total = 0;
let prevOperator = "0";
document.querySelector(".calc-buttons").addEventListener("click", function(e) {
    let val = e.target.innerText;
    console.log(val);
    if (isNaN(parseInt(val))) {
        console.log("operation")
        handleOperation(val);
    } else {
        handleNum(val);
    }
});

function handleNum(val) {
    console.log(result);
    if (result.innerText == "0") {
        result.innerText = val;
    } else {
        result.innerText += val;
    }
}

function handleOperation(val) {
    switch (val) {
        case "=":
            if (prevOperator == "0") {
                return;
            }
            solve();
            prevOperator = "0";
            result.innerText = total;
            total = 0;
            break;
        case "C":
            total = 0;
            result.innerText = "0";
            break;
        case "←":
            if (result.innerText.length == 1) {
                result.innerText = "0";
            } else {
                let len = result.innerText.length;
                result.innerText = result.innerText.substring(0, len - 1);
            }
        case "+":
        case "-":
        case "x":
        case "÷":
            handleMath(val);
    }
}

function handleMath(val) {
    if (result.innerText == 0) {
        return;
    }
    const data = parseInt(result.innerText);
    if (total == 0) {
        total = data;
    } else {
        solve();
    }
    prevOperator = val;
    result.innerText = "0";
}

function solve() {
    if (prevOperator == "+") {
        let temp = parseInt(result.innerText);
        total = total + temp;
    } else if (prevOperator == "-") {
        let temp = parseInt(result.innerText);
        total = total - temp;
    } else if (prevOperator == "x") {
        let temp = parseInt(result.innerText);
        total = total * temp;
    } else if (prevOperator == "÷") {
        let temp = parseInt(result.innerText);
        total = total / temp;
    }
}