function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");
   
    let reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    
    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
}

let inputSentence = "This is a sunny day";
let reversed = reverseWordsInSentence(inputSentence);
console.log(reversed); 