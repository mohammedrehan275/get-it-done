function saveData(key,value) {
    if(localStorage) {
        localStorage.setItem(key,value);
    }
    else {
        alert("your browser doesnt support localStorage API");
    }
}

function loadData(key) {
    if(localStorage) {
        if(key in localStorage) {
            return localStorage.getItem(key);
        }
    } 
    else {
        alert("doesnt support localStorage API");
    }
}


