# AUTO GENERATED FILE - DO NOT EDIT

dashTabulator <- function(id=NULL, columns=NULL, data=NULL, options=NULL, rowClicked=NULL, downloadButtonType=NULL) {
    
    props <- list(id=id, columns=columns, data=data, options=options, rowClicked=rowClicked, downloadButtonType=downloadButtonType)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTabulator',
        namespace = 'dash_tabulator',
        propNames = c('id', 'columns', 'data', 'options', 'rowClicked', 'downloadButtonType'),
        package = 'dashTabulator'
        )

    structure(component, class = c('dash_component', 'list'))
}
