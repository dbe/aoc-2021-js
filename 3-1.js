export default solve

function solve(lines) {
    // ['101', '111'] -> [[1,0,1], [1,1,1]]
    lines = lines.map(line => line.split('').map(v => parseInt(v)))
    // Adds up each position of the lines array
    let accumulated = lines.reduce((acc, line) => arrAdd(acc, line), new Array(lines[0].length).fill(0))
    // Converts each column to 1 or 0 based on whether or not it has a majority of 1's
    // Then represents that array as a binary string 'gamma'
    let gamma = parseInt(accumulated.map(v => v > lines.length / 2 ? 1 : 0).join(''), 2)
    // Epsilon flips each bit in gamma (xor 111111)
    let epsilon = gamma ^ parseInt('1'.repeat(accumulated.length), 2)
    return gamma * epsilon
}

function arrAdd(a, b) {
    let out = []
    for(let i = 0; i < a.length; i++) {
        out.push(a[i] + b[i])
    }

    return out
}