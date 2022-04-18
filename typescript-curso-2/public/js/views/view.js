var View = /** @class */ (function () {
    function View(seletor, escapar) {
        this.escapar = false;
        var elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("Seletor ".concat(seletor, " n\u00E3o existe no DOM. Verifique"));
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    View.prototype.update = function (model) {
        var template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    };
    return View;
}());
export default View;
