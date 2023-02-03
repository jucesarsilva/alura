export function logarTempoDeExecucao(emSegundos) {
    if (emSegundos === void 0) { emSegundos = false; }
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var divisor = 1;
            var unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            var t1 = performance.now();
            var retorno = metodoOriginal.apply(this, args);
            var t2 = performance.now();
            console.log("".concat(propertyKey, ", tempo de execu\u00E7\u00E3o: ").concat((t2 - t1) / divisor, " ").concat(unidade));
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map