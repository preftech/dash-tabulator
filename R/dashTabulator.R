# AUTO GENERATED FILE - DO NOT EDIT

dashTabulator <- function(id=NULL, columns=NULL, data=NULL) {
    
    props <- list(id=id, columns=columns, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTabulator',
        namespace = 'dash_tabulator',
        propNames = c('id', 'columns', 'data'),
        package = 'dashTabulator'
        )

    structure(component, class = c('dash_component', 'list'))
}
