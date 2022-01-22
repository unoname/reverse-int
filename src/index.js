module.exports = function reverse (n) {
    let str = Math.abs(n).toString();
    let res = str.split('').reverse().join('');
      return +res;  
  }
