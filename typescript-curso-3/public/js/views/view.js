var View = (function () {
    function View(seletor) {
        var elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("Seletor ".concat(seletor, " n\u00E3o existe no DOM. Verifique"));
        }
    }
    View.prototype.update = function (model, color) {
        if (color === void 0) { color = 'info'; }
        var template = this.template(model, color);
        this.elemento.innerHTML = template;
    };
    return View;
}());
export { View };
//# sourceMappingURL=view.js.map