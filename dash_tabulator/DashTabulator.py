# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashTabulator(Component):
    """A DashTabulator component.
DashTabulator is an implementation of the React Tabulator from 
https://github.com/ngduc/react-tabulator/ and https://github.com/olifolkerd/tabulator.
It takes a property, `column`, and `data`
displays it in tabulator.
The `options` property is passed to Tabulator to perform regular options
downloading as xlsx is enabled by default.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- ajaxError (boolean | number | string | dict | list; optional)

- ajaxRequesting (boolean | number | string | dict | list; optional)

- ajaxResponse (boolean | number | string | dict | list; optional)

- cellClicked (dict; optional):
    cellClick captures the cell that was clicked on.

- cellContext (boolean | number | string | dict | list; optional)

- cellDblClick (boolean | number | string | dict | list; optional)

- cellDblTap (boolean | number | string | dict | list; optional)

- cellEditCancelled (boolean | number | string | dict | list; optional)

- cellEdited (dict; optional):
    cellEdited captures the cell that was edited.

- cellEditing (boolean | number | string | dict | list; optional)

- cellTap (boolean | number | string | dict | list; optional)

- cellTapHold (boolean | number | string | dict | list; optional)

- clearFilterButtonType (dict; optional):
    clearFilterButtonType, takes a css style, text to display on
    button  e.g.   clearFilterButtonType = {\"css\": \"btn
    btn-primary\", \"text\":\"Export\"}.

- clipboardCopied (boolean | number | string | dict | list; optional)

- clipboardPasteError (boolean | number | string | dict | list; optional)

- clipboardPasted (boolean | number | string | dict | list; optional)

- columnMoved (boolean | number | string | dict | list; optional)

- columnResized (boolean | number | string | dict | list; optional)

- columnTitleChanged (boolean | number | string | dict | list; optional)

- columnVisibilityChanged (boolean | number | string | dict | list; optional)

- columns (list; optional):
    A label that will be printed when this component is rendered.

- data (list; optional):
    The value displayed in the input.

- dataChanged (list; optional):
    dataChanged captures the cell that was clicked on.

- dataFiltered (dict; optional):
    dataFiltered based on
    http://tabulator.info/docs/4.8/callbacks#filter  The dataFiltered
    callback is triggered after the table dataset is filtered.

- dataFiltering (list; optional):
    dataFiltering based on
    http://tabulator.info/docs/4.8/callbacks#filter  The dataFiltering
    callback is triggered whenever a filter event occurs, before the
    filter happens.

- dataGrouped (boolean | number | string | dict | list; optional)

- dataGrouping (boolean | number | string | dict | list; optional)

- dataLoaded (boolean | number | string | dict | list; optional)

- dataLoading (boolean | number | string | dict | list; optional)

- dataSorted (boolean | number | string | dict | list; optional)

- dataSorting (boolean | number | string | dict | list; optional)

- downloadButtonType (dict; optional):
    downloadButtonType, takes a css style, text to display on button,
    type is file type to download  e.g.   downloadButtonType =
    {\"css\": \"btn btn-primary\", \"text\":\"Export\",
    \"type\":\"xlsx\"}.

- downloadComplete (boolean | number | string | dict | list; optional)

- downloadReady (boolean | number | string | dict | list; optional)

- groupClick (boolean | number | string | dict | list; optional)

- groupContext (boolean | number | string | dict | list; optional)

- groupDblClick (boolean | number | string | dict | list; optional)

- groupDblTap (boolean | number | string | dict | list; optional)

- groupTap (boolean | number | string | dict | list; optional)

- groupTapHold (boolean | number | string | dict | list; optional)

- groupVisibilityChanged (boolean | number | string | dict | list; optional)

- headerClick (boolean | number | string | dict | list; optional)

- headerContext (boolean | number | string | dict | list; optional)

- headerDblClick (boolean | number | string | dict | list; optional)

- headerDblTap (boolean | number | string | dict | list; optional)

- headerTap (boolean | number | string | dict | list; optional)

- headerTapHold (boolean | number | string | dict | list; optional)

- htmlImported (boolean | number | string | dict | list; optional)

- htmlImporting (boolean | number | string | dict | list; optional)

- initialHeaderFilter (list; optional):
    initialHeaderFilter based on
    http://tabulator.info/docs/4.8/filter#header  can take array of
    filters.

- localized (boolean | number | string | dict | list; optional)

- movableRowsReceived (boolean | number | string | dict | list; optional)

- movableRowsReceivedFailed (boolean | number | string | dict | list; optional)

- movableRowsReceivingStart (boolean | number | string | dict | list; optional)

- movableRowsReceivingStop (boolean | number | string | dict | list; optional)

- movableRowsSendingStart (boolean | number | string | dict | list; optional)

- movableRowsSendingStop (boolean | number | string | dict | list; optional)

- movableRowsSent (boolean | number | string | dict | list; optional)

- movableRowsSentFailed (boolean | number | string | dict | list; optional)

- multiRowsClicked (list; optional):
    multiRowsClicked, when multiple rows are clicked.

- options (dict; optional):
    Tabulator Options.

- pageLoaded (boolean | number | string | dict | list; optional)

- renderComplete (boolean | number | string | dict | list; optional)

- renderStarted (boolean | number | string | dict | list; optional)

- rowAdded (boolean | number | string | dict | list; optional)

- rowClick (boolean | number | string | dict | list; optional):
    standard props not used by dash-tabulator directly  can be used as
    part of custom javascript implementations.

- rowClicked (dict; optional):
    rowClick captures the row that was clicked on.

- rowContext (boolean | number | string | dict | list; optional)

- rowDblClick (boolean | number | string | dict | list; optional)

- rowDblTap (boolean | number | string | dict | list; optional)

- rowDeleted (boolean | number | string | dict | list; optional)

- rowDeselected (boolean | number | string | dict | list; optional)

- rowMoved (boolean | number | string | dict | list; optional)

- rowResized (boolean | number | string | dict | list; optional)

- rowSelected (boolean | number | string | dict | list; optional)

- rowSelectionChanged (boolean | number | string | dict | list; optional)

- rowTap (boolean | number | string | dict | list; optional)

- rowTapHold (boolean | number | string | dict | list; optional)

- rowUpdated (boolean | number | string | dict | list; optional)

- selectableCheck (boolean | number | string | dict | list; optional)

- tableBuilding (boolean | number | string | dict | list; optional)

- tableBuilt (boolean | number | string | dict | list; optional)

- theme (string; optional):
    theme.

- validationFailed (boolean | number | string | dict | list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, theme=Component.UNDEFINED, columns=Component.UNDEFINED, data=Component.UNDEFINED, options=Component.UNDEFINED, rowClicked=Component.UNDEFINED, multiRowsClicked=Component.UNDEFINED, cellClicked=Component.UNDEFINED, cellEdited=Component.UNDEFINED, dataChanged=Component.UNDEFINED, downloadButtonType=Component.UNDEFINED, clearFilterButtonType=Component.UNDEFINED, initialHeaderFilter=Component.UNDEFINED, dataFiltering=Component.UNDEFINED, dataFiltered=Component.UNDEFINED, rowClick=Component.UNDEFINED, tableBuilding=Component.UNDEFINED, tableBuilt=Component.UNDEFINED, rowDblClick=Component.UNDEFINED, rowContext=Component.UNDEFINED, rowTap=Component.UNDEFINED, rowDblTap=Component.UNDEFINED, rowTapHold=Component.UNDEFINED, rowAdded=Component.UNDEFINED, rowDeleted=Component.UNDEFINED, rowMoved=Component.UNDEFINED, rowUpdated=Component.UNDEFINED, rowSelectionChanged=Component.UNDEFINED, rowSelected=Component.UNDEFINED, rowDeselected=Component.UNDEFINED, rowResized=Component.UNDEFINED, cellDblClick=Component.UNDEFINED, cellContext=Component.UNDEFINED, cellTap=Component.UNDEFINED, cellDblTap=Component.UNDEFINED, cellTapHold=Component.UNDEFINED, cellEditing=Component.UNDEFINED, cellEditCancelled=Component.UNDEFINED, columnMoved=Component.UNDEFINED, columnResized=Component.UNDEFINED, columnTitleChanged=Component.UNDEFINED, columnVisibilityChanged=Component.UNDEFINED, headerClick=Component.UNDEFINED, headerDblClick=Component.UNDEFINED, headerContext=Component.UNDEFINED, headerTap=Component.UNDEFINED, headerDblTap=Component.UNDEFINED, headerTapHold=Component.UNDEFINED, htmlImporting=Component.UNDEFINED, htmlImported=Component.UNDEFINED, dataLoading=Component.UNDEFINED, dataLoaded=Component.UNDEFINED, ajaxRequesting=Component.UNDEFINED, ajaxResponse=Component.UNDEFINED, ajaxError=Component.UNDEFINED, dataSorting=Component.UNDEFINED, dataSorted=Component.UNDEFINED, renderStarted=Component.UNDEFINED, renderComplete=Component.UNDEFINED, pageLoaded=Component.UNDEFINED, localized=Component.UNDEFINED, dataGrouping=Component.UNDEFINED, dataGrouped=Component.UNDEFINED, groupVisibilityChanged=Component.UNDEFINED, groupClick=Component.UNDEFINED, groupDblClick=Component.UNDEFINED, groupContext=Component.UNDEFINED, groupTap=Component.UNDEFINED, groupDblTap=Component.UNDEFINED, groupTapHold=Component.UNDEFINED, movableRowsSendingStart=Component.UNDEFINED, movableRowsSent=Component.UNDEFINED, movableRowsSentFailed=Component.UNDEFINED, movableRowsSendingStop=Component.UNDEFINED, movableRowsReceivingStart=Component.UNDEFINED, movableRowsReceived=Component.UNDEFINED, movableRowsReceivedFailed=Component.UNDEFINED, movableRowsReceivingStop=Component.UNDEFINED, validationFailed=Component.UNDEFINED, clipboardCopied=Component.UNDEFINED, clipboardPasted=Component.UNDEFINED, clipboardPasteError=Component.UNDEFINED, downloadReady=Component.UNDEFINED, downloadComplete=Component.UNDEFINED, selectableCheck=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'ajaxError', 'ajaxRequesting', 'ajaxResponse', 'cellClicked', 'cellContext', 'cellDblClick', 'cellDblTap', 'cellEditCancelled', 'cellEdited', 'cellEditing', 'cellTap', 'cellTapHold', 'clearFilterButtonType', 'clipboardCopied', 'clipboardPasteError', 'clipboardPasted', 'columnMoved', 'columnResized', 'columnTitleChanged', 'columnVisibilityChanged', 'columns', 'data', 'dataChanged', 'dataFiltered', 'dataFiltering', 'dataGrouped', 'dataGrouping', 'dataLoaded', 'dataLoading', 'dataSorted', 'dataSorting', 'downloadButtonType', 'downloadComplete', 'downloadReady', 'groupClick', 'groupContext', 'groupDblClick', 'groupDblTap', 'groupTap', 'groupTapHold', 'groupVisibilityChanged', 'headerClick', 'headerContext', 'headerDblClick', 'headerDblTap', 'headerTap', 'headerTapHold', 'htmlImported', 'htmlImporting', 'initialHeaderFilter', 'localized', 'movableRowsReceived', 'movableRowsReceivedFailed', 'movableRowsReceivingStart', 'movableRowsReceivingStop', 'movableRowsSendingStart', 'movableRowsSendingStop', 'movableRowsSent', 'movableRowsSentFailed', 'multiRowsClicked', 'options', 'pageLoaded', 'renderComplete', 'renderStarted', 'rowAdded', 'rowClick', 'rowClicked', 'rowContext', 'rowDblClick', 'rowDblTap', 'rowDeleted', 'rowDeselected', 'rowMoved', 'rowResized', 'rowSelected', 'rowSelectionChanged', 'rowTap', 'rowTapHold', 'rowUpdated', 'selectableCheck', 'tableBuilding', 'tableBuilt', 'theme', 'validationFailed']
        self._type = 'DashTabulator'
        self._namespace = 'dash_tabulator'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'ajaxError', 'ajaxRequesting', 'ajaxResponse', 'cellClicked', 'cellContext', 'cellDblClick', 'cellDblTap', 'cellEditCancelled', 'cellEdited', 'cellEditing', 'cellTap', 'cellTapHold', 'clearFilterButtonType', 'clipboardCopied', 'clipboardPasteError', 'clipboardPasted', 'columnMoved', 'columnResized', 'columnTitleChanged', 'columnVisibilityChanged', 'columns', 'data', 'dataChanged', 'dataFiltered', 'dataFiltering', 'dataGrouped', 'dataGrouping', 'dataLoaded', 'dataLoading', 'dataSorted', 'dataSorting', 'downloadButtonType', 'downloadComplete', 'downloadReady', 'groupClick', 'groupContext', 'groupDblClick', 'groupDblTap', 'groupTap', 'groupTapHold', 'groupVisibilityChanged', 'headerClick', 'headerContext', 'headerDblClick', 'headerDblTap', 'headerTap', 'headerTapHold', 'htmlImported', 'htmlImporting', 'initialHeaderFilter', 'localized', 'movableRowsReceived', 'movableRowsReceivedFailed', 'movableRowsReceivingStart', 'movableRowsReceivingStop', 'movableRowsSendingStart', 'movableRowsSendingStop', 'movableRowsSent', 'movableRowsSentFailed', 'multiRowsClicked', 'options', 'pageLoaded', 'renderComplete', 'renderStarted', 'rowAdded', 'rowClick', 'rowClicked', 'rowContext', 'rowDblClick', 'rowDblTap', 'rowDeleted', 'rowDeselected', 'rowMoved', 'rowResized', 'rowSelected', 'rowSelectionChanged', 'rowTap', 'rowTapHold', 'rowUpdated', 'selectableCheck', 'tableBuilding', 'tableBuilt', 'theme', 'validationFailed']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashTabulator, self).__init__(**args)
