const getCurrentIp = function() {
    const interfaces = require("os").networkInterfaces()
    let IPAdress = ""
    for (let devName in interfaces) {
        let iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i]
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal
            ) {
                IPAdress = alias.address
            }
        }
    }
    return IPAdress
}

module.exports = getCurrentIp
