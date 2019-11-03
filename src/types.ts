type EspecieConvenio = 'R$'

type CnabTipos = '240' | '400'

type DensidadeValores = 1600 | 6250

type TipoConta = 'CORRENTE' | 'POUPANCA'

type TipoAceite = 'S' | 'N'

type TipoDesconto = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

type TipoJuros = 1 | 2 | 3

type TipoMulta = 0 | 1 | 2

type TipoProtesto = 1 | 2 | 3 | 4 | 5 | 8 | 9

type TipoBaixaAutomatica = 1 | 2 | 3

type TipoEmissaoBloqueto = 1 | 2 | 3 | 4 | 5 | 7 | 8

type TipoCobranca = '04DSC' | '08VDR' | '02VIN'

type TipoDistribuicao = 1 | 2 | 3 | 4

type TipoCategoria = 1 | 2 | 3

type TipoEmissaoBoleto = 'A' | 'B'

type TipoImpressao = 0 | 1 | 2 | 3 | 4 | 99

export interface ICedente {
    CedenteRazaoSocial: string
    CedenteNomeFantasia: string
    CedenteCPFCNPJ: string
    CedenteEnderecoLogradouro: string
    CedenteEnderecoNumero?: string
    CedenteEnderecoComplemento?: string
    CedenteEnderecoBairro: string
    CedenteEnderecoCEP: string
    CedenteEnderecoCidadeIBGE: string
    CedenteTelefone?: string
    CedenteEmail?: string
}

export interface IConta {
    ContaCodigoBanco: string
    ContaAgencia: string
    ContaAgenciaDV?: string
    ContaNumero: string
    ContaNumeroDV?: string
    ContaTipo: TipoConta
    ContaCodigoBeneficiario: string
    ContaCodigoEmpresa?: string
    ContaValidacaoAtiva?: boolean
    ContaImpressaoAtualizada?: boolean
}

export interface IConvenio {
    ConvenioNumero: string
    ConvenioDescricao?: string
    ConvenioCarteira: string
    ConvenioEspecie: EspecieConvenio
    ConvenioPadraoCNAB: CnabTipos
    ConvenioReiniciarDiariamente?: boolean
    ConvenioNumeroRemessa?: string
    ConvenioUtilizaVan?: boolean
    Conta: number
    ConvenioDensidaDeRemessa?: DensidadeValores
    ConvenioRegistroInstantaneo?: boolean
    ConvenioApiId?: string
    ConvenioApiKey?: string
    ConvenioApiSecret?: string
    ConvenioEstacao?: string
    ConvenioNossoNumeroBanco?: boolean
}

export interface IBoleto {
    /* CAMPOS SACADO*/
    SacadoCPFCNPJ: string
    SacadoNome: string
    SacadoEnderecoLogradouro: string
    SacadoEnderecoNumero?: string
    SacadoEnderecoBairro: string
    SacadoEnderecoCep: string
    SacadoEnderecoCidade: string
    SacadoEnderecoComplemento?: string
    SacadoEnderecoPais?: string
    SacadoEnderecoUf: string
    SacadoEmail?: string
    SacadoTelefone?: string
    SacadoCelular?: string
    /* CAMPOS CEDENTE*/
    CedenteContaCodigoBanco: string
    CedenteContaNumero: string
    CedenteContaNumeroDV?: string
    CedenteConvenioNumero: string
    /* CAMPOS BÁSICOS */
    TituloNossoNumero: string
    TituloValor: string
    TituloNumeroDocumento: string
    TituloDataEmissao: string
    TituloDataVencimento: string
    TituloAceite: TipoAceite
    TituloDocEspecie: string /* https://atendimento.tecnospeed.com.br/hc/pt-br/articles/360014970654-Esp%C3%A9cie-do-documento */
    TituloLocalPagamento: string
    /* CAMPOS DESCONTO */
    TituloCodDesconto: TipoDesconto
    TituloDataDesconto: string
    TituloValorDescontoTaxa
    TituloCodDesconto2: TipoDesconto
    TituloDataDesconto2: string
    TituloValorDescontoTaxa2: string
    /* CAMPOS JUROS */
    TituloCodigoJuros: TipoJuros
    TituloDataJuros: string
    TituloValorJuros: string
    /* CAMPOS MULTA */
    TituloCodigoMulta: TipoMulta
    TituloDataMulta: string
    TituloValorMultaTaxa: string
    /* CAMPOS PROTESTO */
    TituloCodProtesto: TipoProtesto
    TituloPrazoProtesto: number
    /* CAMPOS BAIXA */
    TituloCodBaixaDevolucao: TipoBaixaAutomatica
    TituloPrazoBaixa: number
    /* CAMPOS MENSAGEM */
    TituloMensagem01: string
    TituloMensagem02: string
    TituloMensagem03: string
    TituloMensagem04: string
    TituloMensagem05: string
    TituloMensagem06: string
    TituloMensagem07: string
    TituloMensagem08: string
    TituloMensagem09: string
    /* CAMPOS SACADOR AVALISTA */
    TituloSacadorAvalista: string
    TituloSacadorAvalistaEndereco: string
    TituloSacadorAvalistaCidade: string
    TituloSacadorAvalistaCEP: string
    TituloSacadorAvalistaUF: string
    TituloInscricaoSacadorAvalista: string
    /* OUTROS CAMPOS */
    TituloEmissaoBoleto: TipoEmissaoBoleto
    TituloCategoria: TipoCategoria
    TituloPostagemBoleto: TipoAceite
    TituloCodEmissaoBloqueto: TipoEmissaoBloqueto
    TituloCodDistribuicaoBloqueto: TipoDistribuicao
    TituloOutrosAcrescimos: string
    TituloInformacoesAdicionais: string
    TituloInstrucoes: string
    TituloParcela: string
    TituloVariacaoCarteira: string
    TituloCodigoReferencia: string
    TituloTipoCobranca: TipoCobranca
}

export interface IImpressao {
    TipoImpressao: TipoImpressao,
    Boletos: Array<string>,
    Personalizacao: { [index: string]: string }
}

export interface IRetornoSucessoErro {
    _status: 'sucesso' | 'erro'
    _mensagem: string
    _dados: {}
}

export interface IRetornoBoletosLote {
    _status: 'sucesso' | 'erro'
    _dados: {}
}

export interface IDados {
    _sucesso: Array<{
        idintegracao: string
        situacao: string
        TituloNumeroDocumento: string
        TituloNossoNumero: string
        CedenteContaCodigoBanco: string
        CedenteContaNumero: string
        CedenteConvenioNumero: string
    }>
    _falha: Array<{
        _status_http: number
        _erro: {
            erroValidacao: boolean,
            erros: IErroInclusao
        }
    }>
}

export interface IErroInclusao {
    erroValidacao: boolean,
    erros: { [index: string]: string }
}