// بسم الله الرحمن الرحيم 
// Start Project





let allSpans = document.querySelectorAll(".contaner .buttons span")
let resultsArea = document.querySelector(".contaner .result > div")
let input_key = document.getElementById("key")
let input_value = document.getElementById("value")


allSpans.forEach(function(ele) {
    ele.onclick = function() {
        if (ele.classList.contains("check")) {
            checkItem();
        } else if (ele.classList.contains("add")) {
            addItem()
        } else if (ele.classList.contains("del")) {
            delItem()
        } else if (ele.classList.contains("show")) {
            showItem()
        }
    }
})


function forFuckers() {
    resultsArea.innerHTML = "Input Faild Can't Be Empty"
}


function checkItem() {
    if (input_key.value !== "") {
        if (localStorage.getItem(input_key.value)) {
            resultsArea.innerHTML = `Found Local Storage Item Called <span>${input_key.value}</span>`
        } else {
            resultsArea.innerHTML = `No Local Storage Item Called <span>${input_key.value}</span>`
        }
    } else {
        forFuckers()
    }
}


function addItem() {
    if (input_key.value !== "" && input_value.value !== "") {
        localStorage.setItem(input_key.value, input_value.value)
        resultsArea.innerHTML = `Lockal Storage Item <span>${input_key.value}</span> Added`
        input_key.value = ""
        input_value.value = ""
    } else {
        forFuckers()
    }
}


function delItem() {
    if (input_key.value !== "") {
        if (localStorage.getItem(input_key.value)) {
            localStorage.removeItem(input_key.value)
            resultsArea.innerHTML = `Lockal Storage Item <span>${input_key.value}</span> Deleted`
            input_key.value = ""
            input_value.value = ""
        } else {
            resultsArea.innerHTML = `No Local Storage Item Called <span>${input_key.value}</span>`
        }
    } else {
        forFuckers()
    }
}


function showItem() {
        if (localStorage.length) {
            resultsArea.innerHTML = ""
            for (let [key, value] of Object.entries(localStorage)) {
                resultsArea.innerHTML += `<span style="display: block;">${key} : ${value}</span>`
            }
        } else {
            resultsArea.innerHTML = `Lockal Storage Is <span>Empty</span>`
        }
}