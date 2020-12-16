function solve(text) {
    let count = 1;

    for (let i = 0; i < text.length; i++) {
        let current = text[i];

        if (current === " ") {
            count++;
        }
    }

    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log("The message was send successfully!");
    }

}
solve("This message has ten words and you can send it!");