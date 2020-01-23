var gradeList = []
var weightList = []
var gpa;

/**
 * collectInputs function - retrieves data inputs from the document (grades and class type).
 * 
 * input - Name of HTML class to be searched through
 * targetList - Name of Array for the values retrieved to be deposited
 */


var checkBtn = document.getElementById('checkEligibilityBtn');

checkBtn.addEventListener("click", computeInput)



function computeInput() {
    collectInputs("gradeInput", gradeList);
    collectInputs("weightInput", weightList);
    checkElig();
    console.log("Input computed")
}

function collectInputs(input, targetList) {
    var inputs = document.getElementsByClassName(input)
    for (let item of inputs) {
        targetList.push(item.value);
    }
    console.log(targetList)
}


/**
 * checkElig function - performs gpa calculations and comparisons to
 *  determine if the user meets NCAA critera.
 * 
 * Computations use data gathered from @function collectInputs()
 * 
 */

function checkElig() {
    let sem1grade;
    let sem2grade;
    let tempGpa = 0;
    let totalGpa = 0;
    let finalGpa = 0;
    var classType;
    let gradeCount = 0;







    /**
     * 
     * BUG HERE:
     * 
     * Memory leak due to an infinite for loop.
     * 
     * Find out why loop wont end.
     * 
     * 
     * 
     */
    for (let i = 0; i < weightList.length; i++) {
        //console.log("executing for loop");

        /**
         * 
         * NOTES:
         * 
         * There is 1 weight for every 2 grades.
         * 
         * Possibly use a Modulus operator???
         * 
         * 
         */
        console.log(i)

        classType = weightList[i]
        //console.log("Class type is " + classType)

        if (i = 0) {
            sem1grade = gradeList[i];
            sem2grade = gradeList[i + 1];
        } else {
            sem1grade = gradeList[i + 1];
            sem2grade = gradeList[i + 2];
        }

        if (type = "Regular") {
            if (sem1grade >= 90) {
                tempGpa += 4.0
            } else if (sem1grade > 79 && sem1grade < 90) {
                tempGpa += 3.0;
            } else if (sem1grade > 69 && sem1grade < 80) {
                tempGpa += 2.0;
            } else {
                tempGpa += 0;
            }

            if (sem2grade >= 90) {
                tempGpa += 4.0
            } else if (sem2grade > 79 && sem2grade < 90) {
                tempGpa += 3.0;
            } else if (sem2grade > 69 && sem2grade < 80) {
                tempGpa += 2.0;
            } else {
                tempGpa += 0;
            }
        }
        tempSemGpa = (tempGpa / 2)
        //console.log("temp sem gpa is " + tempSemGpa)
        gradeCount++;
        //console.log("grade count is " + gradeCount)
        totalGpa += tempSemGpa
        //console.log("total gpa is " + totalGpa)
    }
    finalGpa = (totalGpa / gradeCount)
    console.log("final gpa is " + finalGpa)
}