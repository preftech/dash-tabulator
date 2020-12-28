window.myNamespace = Object.assign({}, window.myNamespace, {
    tabulator: {
        printIcon: function (cell, formatterParams, onRendered) {
            return "<i class='fa fa-print'></i>";
        },
        columnResized : function (column, table) {
            console.log("Column is resized");
            console.log(column);
            console.log(column._column.field)
            
            // send data back to dash, still under work, only updates when state changes
            // be aware of table rendering and resetting back to original display
            //table.props.setProps({"columnResized": column._column.field})
        }
    }
});