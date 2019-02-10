const Boleto = require('../lib/Boleto')
const boleto = new Boleto('staging','cpf_cnpj','token_sh','cpf_cnpjcedente')

boleto.solicitarRemessa(['HyZEXKtP_g']).then(res => console.log(res))
