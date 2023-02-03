import { Negociacao } from '../models/index.js';
var NegociacoesService = (function () {
    function NegociacoesService() {
    }
    NegociacoesService.prototype.obterNegociacoesDoDia = function () {
        return fetch('http://localhost:8080/dados')
            .then(function (res) { return res.json(); })
            .then(function (dados) {
            return dados.map(function (dadoDeHoje) {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    };
    return NegociacoesService;
}());
export { NegociacoesService };
//# sourceMappingURL=negociacoes-service.js.map