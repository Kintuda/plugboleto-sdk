const Axios = require('axios')
const config = require('../configs/environments')
const action = require('./methods')

class Boleto {
  constructor (env, cnpjSh, tokenSh, cnpjCedente) {
    let axiosInstance = Axios.create({
      baseURL: config[env].url,
      timeout: config[env].timeout,
      headers: {
        'Content-Type': 'application/json',
        'cnpj-sh': cnpjSh,
        'token-sh': tokenSh,
        'cnpj-cedente': cnpjCedente
      }
    })

    this.env = env
    this.cnpjSh = cnpjSh
    this.tokenSh = tokenSh
    this.cnpjCedente = cnpjCedente
    this.instance = axiosInstance
    this.consultarAlteracao = action.consultarAlteracao
    this.consultarBaixa = action.consultarBaixa
    this.consultarBoleto = action.consultarBoleto
    this.consultarEmail = action.consultarEmail
    this.consultarImpressao = action.consultarImpressao
    this.consultarRetorno = action.consultarRetorno
    this.descartarBoleto = action.descartarBoleto
    this.emitirBoleto = action.emitirBoleto
    this.solicitarBaixa = action.solicitarBaixa
    this.solicitarEnvioEmail = action.solicitarEnvioEmail
    this.solicitarImpressao = action.solicitarImpressao
    this.solicitarRemessa = action.solicitarRemessa
    this.solicitarRemessaAlteracao = action.solicitarRemessaAlteracao
    this.uploadRetorno = action.uploadRetorno
  }

  async get (endPoint) {
    try {
      let response = await this.instance.get(endPoint)
      return response.data
    } catch (error) {
      return error.response && error.response.data
    }
  }

  async post (endPoint, data) {
    try {
      let response = await this.instance.request({
        method: 'POST',
        url: endPoint,
        data
      })
      return response.data
    } catch (error) {
      return error.response && error.response.data
    }
  }
}

module.exports = Boleto
