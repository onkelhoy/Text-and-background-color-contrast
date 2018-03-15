let fs = require('fs')
let wstream = fs.createWriteStream(process.argv[2] || 'data.csv')
let m = process.argv[3] || 512

wstream.on('finish', function () {
  console.log('data is written')
})

function ContrastColor(r, g, b)
{
    let d = 0;

    // Counting the perceptive luminance - human eye favors green color... 
    let a = 1 - ( 0.299 * r + 0.587 * g + 0.114 * b)/255;

    if (a < 0.5)
       d = 0; // bright colors - black font
    else
       d = 1; // dark colors - white font

    return  d
}
function genRGB () {
  let r = Math.round(Math.random() * 255)
  let g = Math.round(Math.random() * 255)
  let b = Math.round(Math.random() * 255)
  //    type, r, g, b, Y
  return `1,${r},${g},${b},${ContrastColor(r,g,b)}`
}


for (let i = 0; i < m - 1; i++) {
  str = `${genRGB()}\n`
  wstream.write(str)
}
wstream.write(genRGB())

wstream.end()
