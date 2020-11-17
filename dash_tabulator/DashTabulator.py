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
- id (string; optional): The ID used to identify this component in Dash callbacks.
- columns (list; optional): A label that will be printed when this component is rendered.
- data (list; optional): The value displayed in the input.
- options (dict; optional): Tabulator Options
- rowClicked (dict; optional): rowClick captures the row that was clicked on
- cellEdited (dict; optional): cellEdited captures the cell that was clicked on
- dataChanged (list; optional): dataChanged captures the cell that was clicked on
- downloadButtonType (dict; optional): downloadButtonType, takes a css style, text to display on button, type is file type to download
e.g.
 downloadButtonType = {"css": "btn btn-primary", "text":"Export", "type":"xlsx"}
- clearFilterButtonType (dict; optional): clearFilterButtonType, takes a css style, text to display on button
e.g.
 clearFilterButtonType = {"css": "btn btn-primary", "text":"Export"}
- initialHeaderFilter (list; optional): initialHeaderFilter based on http://tabulator.info/docs/4.8/filter#header
can take array of filters
- dataFiltering (list; optional): dataFiltering based on http://tabulator.info/docs/4.8/callbacks#filter
The dataFiltering callback is triggered whenever a filter event occurs, before the filter happens.
- dataFiltered (dict; optional): dataFiltered based on http://tabulator.info/docs/4.8/callbacks#filter
The dataFiltered callback is triggered after the table dataset is filtered"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, columns=Component.UNDEFINED, data=Component.UNDEFINED, options=Component.UNDEFINED, rowClicked=Component.UNDEFINED, cellEdited=Component.UNDEFINED, dataChanged=Component.UNDEFINED, downloadButtonType=Component.UNDEFINED, clearFilterButtonType=Component.UNDEFINED, initialHeaderFilter=Component.UNDEFINED, dataFiltering=Component.UNDEFINED, dataFiltered=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'columns', 'data', 'options', 'rowClicked', 'cellEdited', 'dataChanged', 'downloadButtonType', 'clearFilterButtonType', 'initialHeaderFilter', 'dataFiltering', 'dataFiltered']
        self._type = 'DashTabulator'
        self._namespace = 'dash_tabulator'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'columns', 'data', 'options', 'rowClicked', 'cellEdited', 'dataChanged', 'downloadButtonType', 'clearFilterButtonType', 'initialHeaderFilter', 'dataFiltering', 'dataFiltered']
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
