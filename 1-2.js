export default solve

function solve(lines) {
    lines = lines.map(line => parseInt(line))
    lines.push(0)
    lines.push(0)

    lines = lines.map((v, i) => v + lines[i + 1] + lines[i + 2])
    return countIncreases(lines.slice(0,-2))
}

function countIncreases(arr) {
    return arr
        // Create pairs of [lines[i], lines[i+1]] except for last one which will be [lines[i], lines[i] - 1]
        .map((v, i) => [v, i === arr.length - 1 ? v - 1 : arr[i+1]])
        // Pair -> either 1 or 0 depending on whether or not it increased
        .map(pair => pair[1] > pair[0] ? 1 : 0)
        .reduce((acc, v) => acc + v)
}
