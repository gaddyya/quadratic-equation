module.exports = function solveEquation(equation) {
    function compareNumbers(a, b) {
        return a - b;
    }
    let array = equation.split(" ");
    let result = [];
    let a = array[0];
    let b = array[3] + array[4];
    let c = array[7] + array[8];
    let root_part = Math.sqrt(b * b - 4 * a * c);
    let denom = 2 * a;
    let x1 = Math.round((-b + root_part) / denom);
    let x2 = Math.round((-b - root_part) / denom);
    result.push(x1, x2);
    return result.sort(compareNumbers);
}
