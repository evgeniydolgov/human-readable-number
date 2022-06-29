module.exports = function toReadable (number) {
    let simNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ' hundred';
    const mod = ('' + number).split('').map(Number);
    
    if (number === 0) {
        return 'zero'
    }
    else if (number < 20) {
        return simNum[number];
    }
    else if (number < 100 && number % 10 !==0) {
        return tensNum[mod[0]] + ' ' + simNum[mod[1]];
    }
    else if (number < 100 && number % 10 ===0) {
        return tensNum[mod[0]] + '' + simNum[mod[1]];
    }
    else if ((number - 100 * mod[0] < 10) && mod[2] !== 0) {
        return simNum[mod[0]] + hundred + ' ' + simNum[mod[2]];
    }
    else if ((number - 100 * mod[0] < 20) && mod[2] !== 0) {
        return simNum[mod[0]] + hundred + ' ' + simNum[number - 100 * mod[0]];
    }
    else if ((number - 100 * mod[0] < 100) && mod[2] !== 0) {
        return simNum[mod[0]] + hundred + ' ' + tensNum[mod[1]] + ' ' + simNum[mod[2]];
    }
    else if (number % 100 === 0) {
        return simNum[mod[0]] + hundred;
    }
    else if (number - 100 * mod[0] < 20 && mod[1] !== 0) {
        return simNum[mod[0]] + hundred + ' ' + simNum[number - 100 * mod[0]];
    }
    else {
        return simNum[mod[0]] + hundred + ' ' + tensNum[mod[1]];
    }
}
