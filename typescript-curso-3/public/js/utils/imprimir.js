export function imprimir() {
    var objetos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objetos[_i] = arguments[_i];
    }
    for (var _a = 0, objetos_1 = objetos; _a < objetos_1.length; _a++) {
        var objeto = objetos_1[_a];
        console.log(objeto.paraTexto());
    }
}
//# sourceMappingURL=imprimir.js.map