var Negociacoes = (function () {
    function Negociacoes() {
        this.negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this.negociacoes.push(negociacao);
    };
    Negociacoes.prototype.lista = function () {
        return this.negociacoes;
    };
    Negociacoes.prototype.paraTexto = function () {
        return JSON.stringify(this.negociacoes, null, 2);
    };
    Negociacoes.prototype.ehIgual = function (negociacoes) {
        return (JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista()));
    };
    return Negociacoes;
}());
export { Negociacoes };
//# sourceMappingURL=negociacoes.js.map