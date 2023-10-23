// static examples
// constants
const m = 2;
const n = 3;
const o = 4;


// generating and displaying 2 and 3-dimensional arrays
let twoDimensionalArray = Array.from({ length: m }, () => Array(n).fill(0));
let threeDimensionalArray = Array.from({ length: m }, () => Array.from({ length: n }, () => Array(o).fill(0)));

console.log(twoDimensionalArray);
console.log(threeDimensionalArray);


// flattening and displaying 2 and 3-dimensional arrays
twoDimensionalArray = twoDimensionalArray.reduce((flatArray, subArray) => {
    return flatArray.concat(subArray);
}, [])

threeDimensionalArray = threeDimensionalArray.reduce((flatArray, subArray) => {
    return flatArray.concat(subArray);
}, []).reduce((flatArray, subArray) => {
    return flatArray.concat(subArray);
}, [])

console.log(twoDimensionalArray);
console.log(threeDimensionalArray);



// recursive examples
// generating an n-dimensional array
function createNDArray(dimensions, initialValue) {
    if (dimensions.length === 0) {
        return initialValue;
    } else {
        const dimSize = dimensions[0];
        const restDimensions = dimensions.slice(1);
        const subArray = [];

        for (let i = 0; i < dimSize; i++) {
            subArray.push(createNDArray(restDimensions, initialValue));
        }

        return subArray;
    }
}

// example usage: creating a 3x3x3 3D array filled with 0s
const dimensions = [3, 3, 3];
const initialValue = 0;
const nDimensionalArray = createNDArray(dimensions, initialValue);
console.log(nDimensionalArray);


// flattening an n-dimensonal array
function flattenNDArray(arr) {
    let flattenedArray = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(flattenNDArray(element));
        } else {
            flattenedArray.push(element);
        }
    }
    return flattenedArray;
}
  
// example usage: flattening a 3D array into a 1D array
const oneDimensionalArray = flattenNDArray(nDimensionalArray);
console.log(oneDimensionalArray);