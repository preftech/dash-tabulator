# AUTO GENERATED FILE - DO NOT EDIT

dashTabulator <- function(id=NULL, columns=NULL, data=NULL, options=NULL, rowClicked=NULL, multiRowsClicked=NULL, cellEdited=NULL, dataChanged=NULL, downloadButtonType=NULL, clearFilterButtonType=NULL, initialHeaderFilter=NULL, dataFiltering=NULL, dataFiltered=NULL) {
    
    props <- list(id=id, columns=columns, data=data, options=options, rowClicked=rowClicked, multiRowsClicked=multiRowsClicked, cellEdited=cellEdited, dataChanged=dataChanged, downloadButtonType=downloadButtonType, clearFilterButtonType=clearFilterButtonType, initialHeaderFilter=initialHeaderFilter, dataFiltering=dataFiltering, dataFiltered=dataFiltered)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTabulator',
        namespace = 'dash_tabulator',
        propNames = c('id', 'columns', 'data', 'options', 'rowClicked', 'multiRowsClicked', 'cellEdited', 'dataChanged', 'downloadButtonType', 'clearFilterButtonType', 'initialHeaderFilter', 'dataFiltering', 'dataFiltered'),
        package = 'dashTabulator'
        )

    structure(component, class = c('dash_component', 'list'))
}
