export default solve

function solve(lines) {
    // ['101', '111'] -> [[1,0,1], [1,1,1]]
    lines = lines.map(line => line.split('').map(v => parseInt(v)))
    let o = calculateMetric(lines, 0, false)
    let co = calculateMetric(lines, 0, true)

    return o * co
}

// Recursive function which narrows down lines until there is 1 left.
// idx is the current index of the line we care about
// leastCommon is a boolean to specify whether we care about the mostCommon(oxygen)
// or least common (co2)
function calculateMetric(lines, idx, leastCommon) {
    if(lines.length === 1) {
        // Return decimal value which is line interpreted as bitstring
        return parseInt(lines[0].join(''), 2)
    }

    let toKeep = mostCommon(lines, idx)
    if(leastCommon) {
        toKeep = opposite(toKeep)
    }

    lines = lines.filter(line => line[idx] === toKeep)

    return calculateMetric(lines, idx + 1, leastCommon)
}

// Returns the most common number seen, 1 if there is a tie
function mostCommon(lines, idx) {
    let total = lines.map(line => line[idx]).reduce((acc, v) => acc + v, 0)

    if (total * 2 >= lines.length) {
        return 1
    } else {
        return 0
    }
}

function opposite(v) {
    return v === 1 ? 0 : 1
}