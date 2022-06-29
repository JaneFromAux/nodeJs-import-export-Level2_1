const { data } = require('./data.js')
const { moreThan, lessThan } = require('./function.js')


const moreResult = moreThan(data);
console.log(moreResult);

const lessResult = lessThan(data);
console.log(lessResult);