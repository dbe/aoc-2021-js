export default solve

function solve(lines) {
    lines = lines.map(line => parseInt(line))
    return lines
        // Create pairs of [lines[i], lines[i+1]] except for last one which will be [lines[i], lines[i] - 1]
        .map((v, i) => [v, i === lines.length - 1 ? v - 1 : lines[i+1]])
        // Pair -> either 1 or 0 depending on whether or not it increased
        .map(pair => pair[1] > pair[0] ? 1 : 0)
        .reduce((acc, v) => acc + v)
}
