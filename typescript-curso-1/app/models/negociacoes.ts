import { Negociacao } from "@models/index";

class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}

export default Negociacoes;
