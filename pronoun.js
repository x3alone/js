// function pronoun(arr) {
//     const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
//     const result = {};

//     const words = arr.split(/\s+/);

//     for (let i = 0; i < words.length; i++) {
//         const currentWord = words[i].toLowerCase();
//         if (pronouns.includes(currentWord)) {
//             const nextWord = words[i + 1]; 

//             if (!result[currentWord]) {
//                 result[currentWord] = { word: [], count: 0 };
//             }

//             result[currentWord].count++;

//             if (nextWord) {
//                 result[currentWord].word.push(nextWord);
//             }
//         }
//     }

//     return result;
// }

function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    let result = {};

    // Split input string into words and normalize to lowercase
    let words = str.toLowerCase().match(/\w+/g);

    words.forEach((currentWord, i) => {
        // Check if the current word is a pronoun
        if (pronouns.includes(currentWord)) {
            // Initialize the result for the current pronoun if not already done
            if (!result[currentWord]) {
                result[currentWord] = { word: [], count: 0 };
            }

            // Increment the pronoun count
            result[currentWord].count++;

            // Check if the next word exists and is not a pronoun, then add it
            let nextWord = words[i + 1];
            if (nextWord && !pronouns.includes(nextWord.toLowerCase())) {
                result[currentWord].word.push(nextWord);
            }
        }
    });

    return result;
}


const ex1 = 'Using Array Destructuring, you you can iterate through objects easily.';
console.log(pronoun(ex1));

// // const ex2 = 'If he you want to buy something you have to pay.';
// // console.log(pronoun(ex2));
