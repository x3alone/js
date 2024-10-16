function neuron(array) {
    let result = {};

    array.forEach(element => {
        let elementSplit = element.split(/[:?!-]/);

        let question = elementSplit[1].trim().toLowerCase().replace(/ /g, "_");

        if (question.endsWith("_")) {
            question = question.slice(0, -1);
        }

        let key = elementSplit[0].toLowerCase().trim();

        if (!result[key]) {
            result[key] = {};
        }

        if (!result[key][question]) {
            result[key][question] = {
                [key]: elementSplit[0].trim(),
                responses: [] 
            };
        }

        let response = element.slice(element.indexOf(":", element.indexOf(":") + 1) + 2).trim();
        result[key][question].responses.push(response);
    });

    return result;
}


const data = [
    "John: What is your name? - John: My name is John",
    "Jane: Where do you live? - Jane: I live in New York",
    "John: What is your favorite color? - John: My favorite color is blue",
    "Jane: What is your favorite hobby? - Jane: I love painting"
];

console.log(neuron(data));
