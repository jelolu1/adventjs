const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
    // ¡Tú puedes!
    const finalList = {};
    let firstletterIndex = 0;
    let word = undefined;

    // const expRegular = /(\s{2,})/g;
    // let letter2 = letter.replace(expRegular,' ').trim();
    let letter2 = letter.trim();

    for(const [index, l] of [...letter2].entries())
    {
        if(letter2[index] != ' ' && letter2[index - 1] == ' ') firstletterIndex = index;

        if(l == ' ' || index == letter2.length - 1) {

            word = letter2.substr(firstletterIndex, index - firstletterIndex);
            (index == letter2.length - 1) && (word = letter2.substr(firstletterIndex, letter2.length - firstletterIndex));

            !word.includes('_') && (finalList[word] ? finalList[word] += 1 : finalList[word] = 1);
        }
    }

    return finalList;

};


const regalos = listGifts(carta);

console.log(regalos);