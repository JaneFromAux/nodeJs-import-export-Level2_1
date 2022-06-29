

function moreThan(data) {
    let bigPop = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].population > 100000) {
            bigPop.push(data[i]);
        }
    }
    return bigPop
}

function lessThan(data) {
    let smallPop = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].population < 100000) {
            smallPop.push(data[i]);
        }
    }
    return smallPop
}

module.exports = { moreThan, lessThan }