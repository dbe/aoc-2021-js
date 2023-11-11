export default solve

function solve(lines) {
    let x = 0
    let d = 0

    let fns = {
        "forward": (v) => x += v,
        "down": (v) => d += v,
        "up": (v) => d -= v,
    }

    lines = lines.map(splitAndCast)
    lines = lines.map(([dir, v]) => fns[dir](v))

    return x * d
}

// "forward 5" -> ("forward", 5)
function splitAndCast(line) {
    let a = line.split(" ")
    a[1] = parseInt(a[1])
    return a
}