/**
 * Created by jamisoncote on 11/16/16.
 */
function calculateWords() {
    console.log("Button Clicked - JS Called");
    var list = document.getElementById("initialWords").value;
    console.log(list);
    var xx = list.split(' ');
    console.log(list);

    var wordMap = {};
    var wordResults = [];

    for (var i in xx) {
        if (typeof(wordMap[xx[i]]) == "undefined") {
            console.log("Pushing word: " + xx[i]);
            wordResults.push(xx[i]);
        }
        wordMap[xx[i]] = 0;
    }
    console.log(wordResults);
    var uniqueWords = wordResults.toString();
    var uniqueWords1 = uniqueWords.replace(/,/g , " ");
    result.innerHTML = uniqueWords1;
}

/// this is gooood
    /*
     var employeeMap = {};
     var employeeResult = [];

     for (var viiiio in xx) {
     if (typeof(employeeMap[xx[viiiio]]) == "undefined") {
     gs.log(xx[viiiio]);
     employeeResult.push(xx[viiiio]);
     }
     employeeMap[xx[viiiio]] = 0;
     }

     //gs.print('final ' + employeeResult.toString());
     var real = employeeResult.toString();
     gs.print('real ' + real);
     var real2 = real.replace(/,/g , " ");
     gs.print('real 2 ' + real2);
     */












