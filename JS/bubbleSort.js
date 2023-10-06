function bubbleSort() {
    if (confirm("Launch bubble sort?")) {
        var result = new Array();
        alert("Enter 5 elements");
        var i = 0;
        while (i < 5) {
            var value = Number(prompt("Enter " + (i + 1) + " element"));
            if (!value) {
                alert("You need to enter only numerical values!");
            } else {
                result[i] = value;
                i++;
            }
        }
    
        console.log("Before: " + result);
    
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < result.length - i - 1; j++) {
                if (result[j] > result[j + 1]) {
                    var temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
        console.log("After: " + result);
        document.write("Result array is: " + result);
    } else {
        document.write("You refused..");
    }
}

console.log("Hello, world!");