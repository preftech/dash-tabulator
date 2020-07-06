# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashTabulator(Component):
    """A DashTabulator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- columns (list; optional): A label that will be printed when this component is rendered.
- data (list; optional): The value displayed in the input.
- options (dict; optional): Tabulator Options
- rowClicked (dict; optional): rowClick captures the row that was clicked on"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, columns=Component.UNDEFINED, data=Component.UNDEFINED, options=Component.UNDEFINED, rowClicked=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'columns', 'data', 'options', 'rowClicked']
        self._type = 'DashTabulator'
        self._namespace = 'dash_tabulator'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'columns', 'data', 'options', 'rowClicked']
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
