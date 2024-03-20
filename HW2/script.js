window.addEventListener("load", addListeners)

function addListeners() {
    document.getElementById("more1").addEventListener("change", function () {
        if (document.getElementById("more1").checked) {
            document.getElementById("interests").style.display = "block";

        }
        else {
            document.getElementById("interests").style.display = "none";
            document.getElementById("interests").style.display = "none";
        }
    })

    document.getElementById("more1").addEventListener("change", function () {
        if (document.getElementById("more1").checked) {
            document.getElementById("pets").style.display = "block";
        }
        else {
            document.getElementById("pets").style.display = "none";
        }
    })

    document.getElementById("more").addEventListener("change", function () {
        if (document.getElementById("more").checked) {
            document.getElementById("hangOut").style.display = "block";
        }
        else {
            document.getElementById("hangOut").style.display = "none";
        }
    })

    document.getElementById("name").addEventListener("change", function () {
        var name = document.getElementById("name").value;
        document.getElementById("info1").value = name;

    })

    document.getElementById("age").addEventListener("change", function () {
        var age = document.getElementById("age").value;
        document.getElementById("info2").value = age;

    })

    document.getElementById("snap").addEventListener("change", function () {
        var name = document.getElementById("snap").value;
        document.getElementById("info3").value = name;

    })

    rating();
    
}

function rating() {
    var rating = 0;
    document.getElementById("yes1").addEventListener("change", function () {
        if (document.getElementById("yes1").checked) {
            rating = rating + 1;
        }
        document.getElementById("rate").value = rating + " Stars";
    })
    document.getElementById("yes2").addEventListener("change", function () {
        if (document.getElementById("yes2").checked) {
            rating = rating + 1;
        }
        document.getElementById("rate").value = rating + " Stars";
    })
    document.getElementById("yes3").addEventListener("change", function () {
        if (document.getElementById("yes3").checked) {
            rating = rating + 1;
        }
        document.getElementById("rate").value = rating + " Stars";
    })
    document.getElementById("yes4").addEventListener("change", function () {
        if (document.getElementById("yes4").checked) {
            rating = rating + 1;
        }
        document.getElementById("rate").value = rating + " Stars";
    })
    document.getElementById("yes5").addEventListener("change", function () {
        if (document.getElementById("yes5").checked) {
            rating = rating + 1;
        }
        document.getElementById("rate").value = rating + " Stars";
    })
}

