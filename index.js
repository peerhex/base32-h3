const base32 = require("base32.js")
 
// const buf = Buffer.from('8828de1099fffff', 'hex')
// const buf = Buffer.from('8828de1099f', 'hex')
// const buf = Buffer.from('8828de10d7f', 'hex')
const buf = Buffer.from('8828de10d3f', 'hex')
// const encoder = new base32.Encoder({ type: "crockford", lc: true })
const encoder = new base32.Encoder({ type: "rfc4648", lc: true })
const str = encoder.write(buf).finalize()
console.log(buf, str)


