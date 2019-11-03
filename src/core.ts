import axios, { AxiosInstance } from 'axios'
import { IBoleto, IRetornoBoletosLote, IImpressao, IRetornoSucessoErro } from './types';
import { config } from './config';

interface IPlugboleto {
    readonly cnpjSh: string
    readonly tokenSh: string
    readonly cedenteCpfCnpj: string
    readonly sandbox?: boolean
    requestInstance: AxiosInstance
}

export default class Plugboleto implements IPlugboleto {
    cnpjSh: string;
    tokenSh: string;
    cedenteCpfCnpj: string;
    sandbox?: boolean;
    requestInstance: AxiosInstance

    constructor(cnpjSh: string, tokenSh: string, cedenteCpfCnpj: string, sandbox?: boolean) {
        this.cnpjSh = cnpjSh
        this.tokenSh = tokenSh
        this.cedenteCpfCnpj = cedenteCpfCnpj
        this.sandbox = sandbox
        this.requestInstance = axios.create({
            baseURL: sandbox ? config.baseUrlSandbox : config.baseUrl,
            headers: { 'cnpj-sh	': this.cnpjSh, 'token-sh': this.tokenSh, 'cnpj-cedente': this.cedenteCpfCnpj }
        })
    }

    gerarBoleto = async (boletos: Array<IBoleto>): Promise<IRetornoBoletosLote> => {
        const { data } = await this.requestInstance.post(config.boletos, boletos)
        return data
    }

    gerarImpressao = async (input: IImpressao): Promise<IRetornoSucessoErro> => {
        const { data } = await this.requestInstance.post(config.impressao, input)
        return data
    }

    gerarImpressao = async (input: IImpressao): Promise<IRetornoSucessoErro> => {
        const { data } = await this.requestInstance.post(config.impressao, input)
        return data
    }
}