module.exports = function consultar(id) {
    let url = id ? `boletos?idintegracao=${id}` : 'boletos'
    return this.get(url)
}