module.exports = function remessa (data){
    return this.post(`remessas/lote`, data)
}