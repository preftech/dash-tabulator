# AUTO GENERATED FILE - DO NOT EDIT

dashTabulator <- function(id=NULL, columns=NULL, data=NULL, options=NULL, rowClicked=NULL, cellEdited=NULL, dataChanged=NULL, downloadButtonType=NULL, clearFilterButtonType=NULL) {
    
    props <- list(id=id, columns=columns, data=data, options=options, rowClicked=rowClicked, cellEdited=cellEdited, dataChanged=dataChanged, downloadButtonType=downloadButtonType, clearFilterButtonType=clearFilterButtonType)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTabulator',
        namespace = 'dash_tabulator',
        propNames = c('id', 'columns', 'data', 'options', 'rowClicked', 'cellEdited', 'dataChanged', 'downloadButtonType', 'clearFilterButtonType'),
        package = 'dashTabulator'
        )

    structure(component, class = c('dash_component', 'list'))
}
