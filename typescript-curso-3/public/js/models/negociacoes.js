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
    return Negociacoes;
}());
export default Negociacoes;
