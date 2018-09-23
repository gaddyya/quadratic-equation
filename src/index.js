module.exports = function solveEquation(equation) {
    function compareNumbers(a, b) {
        return a - b;
    }
    var array = equation.split(" ");
    var result = [];
    var a = array[0];
    var b = array[3] + array[4];
    var c = array[7] + array[8];
    var root_part = Math.sqrt(b * b - 4 * a * c);
    var denom = 2 * a;
    var x1 = Math.round((-b + root_part) / denom);
    var x2 = Math.round((-b - root_part) / denom);
    result.push(x1, x2);
    return result.sort(compareNumbers);
}
