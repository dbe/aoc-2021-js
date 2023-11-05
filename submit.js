import axios from 'axios'
import 'process'

if(process.argv.length < 4) {
    console.log("usage: node submit.js <day> <part>")
    process.exit(1)
}

const { default : solve } = await import(`./${process.argv[2]}-${process.argv[3]}.js`)

axios.request({url: `https://adventofcode.com/2021/day/${process.argv[2]}/input`, method: 'GET', headers: {'Cookie': `session=${process.env.AOC_SESSION}`}}).then(resp => {
    const answer = solve(resp.data.split("\n").slice(0, -1))
    console.log('Answer:')
    console.log(answer);
})
