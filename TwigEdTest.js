
// This function will return an array of N arrays equal with the new arrays being equal sizes and 
// any remaining objects being returned in the last iteration of N array.
const arrayChunker = (array, chunks) => {
    // returns the original array within an array if chunks is less than 2.
    if (chunks < 2)
        return [array];

    // Declare variables
    let length = array.length,
            returnArr = [],
            i = 0,
            arrayChunkSize;

    // If the chunks modulus without a remainder into the length then follow this method
    if (length % chunks === 0) {
        // This sets how many objects need to be put into each new array
        arrayChunkSize = Math.floor(length / chunks);
        while (i < length) {
            returnArr.push(array.slice(i, i += arrayChunkSize));
            // index is increased by the new arrayChunkSize size each iteration
        }
    }
    else {
        // Sets amount of chunks  down by -1 to allow us to create initially equal arrays 
        //and have a remainder to put into the last array
        chunks--;
        arrayChunkSize = Math.floor(length / chunks);
        
        // Sets size chunks  down by -1 if true to create a remainder from the modulus
        // to put into the last array
        if (length % arrayChunkSize === 0)
        arrayChunkSize--;

        while (i < arrayChunkSize * chunks) {
            returnArr.push(array.slice(i, i += arrayChunkSize));
            // index is increased by the new arrayChunkSize size each iteration

        }
        //Puts the remaining items into the new array
        returnArr.push(array.slice(arrayChunkSize * chunks));
        
    }

    return returnArr;
}

// In use

console.log('5 objects, 3 new arrays: ', arrayChunker([1,2,3,4,5], -3));
console.log('5 objects, 3 new arrays: ', arrayChunker([1,2,3,4,5], 3));
console.log('5 objects, 2 new arrays: ', arrayChunker([1,2,3,4,5], 2));
console.log('3 objects, 3 new arrays: ', arrayChunker([1,2,3], 3));
console.log('2 objects, 3 new arrays: ', arrayChunker([1,2], 3));
console.log('9 objects, 3 new arrays: ', arrayChunker([1,2,3,4,5,6,7,8,9], 3));
console.log('9 objects, 3 new arrays: ', arrayChunker([1,2,3,4,5,6,7,8,9], 4));
console.log('6 objects, 1 new array: ', arrayChunker([1,2,3,4,5,6], 1));

//None number use
console.log('5 strings, 3 new array: ', arrayChunker(['I','like','cheese,','a','lot!'], 3));

//Large array test
// Quickly builds us a new array of a desired size
const numberArrayBuilder = (countAmount) => {
    let newArr = [],
        int = 1;
    while (newArr.length < countAmount) {
        newArr.push(int);
        int++;
    }
    return newArr;
}

// Large array use
console.log('An array of 100 objects split into 6 chunks: ', arrayChunker(numberArrayBuilder(100), 6));




