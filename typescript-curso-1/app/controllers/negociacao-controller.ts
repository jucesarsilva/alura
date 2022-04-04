'use strict'

import { Negociacao, Negociacoes } from '@models/index'

class NegociacaoController {
  private inputData: HTMLInputElement | any
  private inputQuantidade: HTMLInputElement | any
  private inputValor: HTMLInputElement | any
  private negociacoes = new Negociacoes()

  constructor() {
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao()
    negociacao.data.setDate(12)
    this.negociacoes.adiciona(negociacao)
    console.log(this.negociacoes.lista())
    this.limparFormulario()
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g
    const date = new Date(this.inputData.value.replace(exp, ','))
    const quantidade = parseInt(this.inputQuantidade.value)
    const valor = parseFloat(this.inputValor.value)
    return new Negociacao(date, quantidade, valor)
  }

  limparFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()
  }
}

export default NegociacaoController
