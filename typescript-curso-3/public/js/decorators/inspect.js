export function inspect(target, propertyKey, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("--- M\u00E9todo ".concat(propertyKey));
        console.log("------ par\u00E2metros: ".concat(JSON.stringify(args)));
        var retorno = metodoOriginal.apply(this, args);
        console.log("------ retorno: ".concat(JSON.stringify(retorno)));
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map