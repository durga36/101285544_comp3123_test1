const lowerCase = (mixedArray) => { //define arrow funtion as lowerCase taking mixedArrays as input parameter array
    return new Promise((resolve, reject) => { //return promise
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)){ //check if mixedArray is valid array of array datatype
            const filteredArrayOnlyStr = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            const mappedArrayOfLowerCaseStrings = filteredArrayOnlyStr.map((eachItemOfFilterArr) =>
            eachItemOfFilterArr.toLowerCase());
            resolve(mappedArrayOfLowerCaseStrings); //resolve array having lower case strings
        }else{
            reject("Invalid array"); //otherwise reject promise with message
        }
    });
};
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]; //define mixedArray
lowerCase(mixedArray) //call lowerCase function
.then((value) =>
console.log(value)) //print array value when promise resolved
.catch((error) =>
console.log(error)); //print array value when promise rejected