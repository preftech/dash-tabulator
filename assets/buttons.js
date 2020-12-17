window.myNamespace = Object.assign({}, window.myNamespace, {
    tabulator: {
        printIcon: function (cell, formatterParams, onRendered) {
            return "<i class='fa fa-print'></i>";
        }
    }
});