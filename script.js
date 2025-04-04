// Problem 1: Sum of Distinct Elements
function sumOfDistinctElements(set1, set2) {
    let sum = 0;
    const distinctElements = new Set();

  
    for (let element of set1) {
        if (!distinctElements.has(element)) {
            distinctElements.add(element);
            sum += element;
        }
    }

    
    for (let element of set2) {
        if (!distinctElements.has(element)) {
            distinctElements.add(element);
            sum += element;
        }
    }

    return sum;
}
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log(result); 


// Problem 2: Dot Product and Orthogonality Check
function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonality(v1, v2) {
    const ps = dotProduct(v1, v2);
    return ps === 0; 
}


const v1 = [1, 2, 3];
const v2 = [-2, 1, 0];

if (checkOrthogonality(v1, v2)) {
    console.log("The vectors are orthogonal.");
} else {
    console.log("The vectors are not orthogonal.");
}