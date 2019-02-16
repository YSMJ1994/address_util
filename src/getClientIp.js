/**
 * 获取客户端真实ip地址
 * @param {client request} request
 */
function getClientRealIp(request) {
    return (
        (
            request.headers["x-forwarded-for"] ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            request.connection.socket.remoteAddress
        ).match(/\d+\.\d+\.\d+\.\d+/)[0] || ""
    )
}
module.exports = getClientRealIp
