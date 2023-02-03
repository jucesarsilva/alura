export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log("Modificando protype ".concat(target.constructor.name, "\n      e adicionando getter para a propriedade ").concat(propertyKey));
        var elemento;
        var getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log("buscando elemento do DOM com o seletor \n          ".concat(seletor, " para injetar em ").concat(propertyKey));
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map