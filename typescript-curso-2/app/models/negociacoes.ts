import { Negociacao } from '@models/index'

class Negociacoes {
  private negociacoes: Negociacao[] = []

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao)
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes
  }
}

export default Negociacoes