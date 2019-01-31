const net = require("net")

const defPort = 8080

const findPort = function(defaultPort, callback) {
    if (arguments.length === 1) {
        if (defaultPort instanceof Function) {
            callback = defaultPort
            defaultPort = defPort
        }
    }
    if (!defaultPort) {
        defaultPort = defPort
    }
    if (typeof defaultPort !== "number") {
        defaultPort = +defaultPort
    }
    if (
        typeof defaultPort !== "number" ||
        defaultPort < 1024 ||
        defaultPort > 65535
    ) {
        defaultPort = defPort
    }
    if (callback && callback instanceof Function) {
        portIsOccupied(defaultPort, port => {
            callback(port)
        })
    } else {
        return new Promise(resolve => {
            portIsOccupied(defaultPort, resolve)
        })
    }
}

function portIsOccupied(port, callback) {
    const server = net.createServer().listen(port)
    server.on("listening", () => {
        // 监听成功，端口未被占用
        // 关闭监听
        server.close()
        callback(port)
    })

    server.on("error", err => {
        // 监听失败
        if (err.code === "EADDRINUSE") {
            // 端口已被占用, 端口 + 1继续监测
            portIsOccupied(port + 1, callback)
        } else {
            callback(null)
            console.error("test port occupied failed:  " + err)
        }
    })
}
module.exports = findPort
