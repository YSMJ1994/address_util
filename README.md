# address_util [![npm](https://img.shields.io/npm/v/address_util.svg)](https://www.npmjs.com/package/address_util) [![npm](https://img.shields.io/npm/dm/address_util.svg)](https://www.npmjs.com/package/address_util) [![npm](https://img.shields.io/npm/l/address_util.svg)](LICENSE)
#### NodeJS Core Module Extended

## Installation

```bash
npm install address_util --save
```

## Usage

In your node program:

```js
let addressUtil = require('address_util')

// get current machine local address
const currentIp = addressUtil.getCurrentIp()    // example: 192.168.1.2
// get new port to listen
addressUtil.findPortToListen(8080, port => {
    // if 8080 is not occupied , port > 8080
    // else other port which is not occupied
})
// have not default port, find from 8080
addressUtil.findPortToListen(port => {})

// promise
addressUtil.findPortToListen(8080).then(port => {})
addressUtil.findPortToListen().then(port => {})

// get client real request ip
const http = require('http')
const server = http.createServer((req, res) => {
    // real ip
    const realClientIp = addressUtil.getClientIp(req)

    res.send(realClientIp)
})
```

## License

MIT. Copyright (c) [SoberZ](https://www.soberz.cn).