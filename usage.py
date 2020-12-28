import dash_tabulator
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from dash_extensions.javascript import Namespace
#from textwrap import dedent as d
#import json


external_scripts = ['https://oss.sheetjs.com/sheetjs/xlsx.full.min.js']
external_stylesheets = ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css']
app = dash.Dash(__name__, external_scripts=external_scripts, external_stylesheets=external_stylesheets)

styles = {
            'pre': {
                'border': 'thin lightgrey solid',
                'overflowX': 'scroll'
            }
        }

# in the asset folder there is a JS method in assets/buttons.js with a window.myNamespace
# declared, a reference can be passed using Namespace that then gets mapped client side
# see https://github.com/preftech/dash-tabulator/pull/11
# The namespace here must match the name space of the JavaScript asset.
ns = Namespace("myNamespace", "tabulator")

columns = [
                {"formatter":"rowSelection", "titleFormatter":"rowSelection", "hozAlign":"center", "headerSort":"false"},
                { "title": "Name", "field": "name", "width": 150, "headerFilter":True, "editor":"input"},
                { "title": "Age", "field": "age", "hozAlign": "left", "formatter": "progress" },
                { "title": "Favourite Color", "field": "col", "headerFilter":True },
                { "title": "Date Of Birth", "field": "dob", "hozAlign": "center" },
                { "title": "Rating", "field": "rating", "hozAlign": "center", "formatter": "star" },
                { "title": "Passed?", "field": "passed", "hozAlign": "center", "formatter": "tickCross" },
                {"title": "Print", "field": "print", "hozAlign": "center", "formatter": ns("printIcon")}
              ]
data = [
                {"id":1, "name":"Oli Bob", "age":"12", "col":"red", "dob":"", "print" :"foo"},
                {"id":2, "name":"Mary May", "age":"1", "col":"blue", "dob":"14/05/1982", "print" :"foo"},
                {"id":3, "name":"Christine Lobowski", "age":"42", "col":"green", "dob":"22/05/1982", "print" :"foo"},
                {"id":4, "name":"Brendon Philips", "age":"125", "col":"orange", "dob":"01/08/1980", "print" :"foo"},
                {"id":5, "name":"Margret Marmajuke", "age":"16", "col":"yellow", "dob":"31/01/1999", "print" :"foo"},
                {"id":6, "name":"Fred Savage", "age":"16", "col":"yellow", "rating":"1", "dob":"31/01/1999", "print" :"foo"},
                {"id":7, "name":"Brie Larson", "age":"30", "col":"blue", "rating":"1", "dob":"31/01/1999", "print" :"foo"},
              ]

options = { "groupBy": "col", "selectable":"true", "columnResized" : ns("columnResized")}
downloadButtonType = {"css": "btn btn-primary", "text":"Export", "type":"xlsx"}
clearFilterButtonType = {"css": "btn btn-outline-dark", "text":"Clear Filters"}
initialHeaderFilter = [{"field":"col", "value":"blue"}]

app.layout = html.Div([
    dash_tabulator.DashTabulator(
        id='tabulator',
        options=options,
        downloadButtonType=downloadButtonType,
        clearFilterButtonType=clearFilterButtonType,
    ),
    html.Div(id='output'),
    dcc.Interval(
                id='interval-component-iu',
                interval=1*10, # in milliseconds
                n_intervals=0,
                max_intervals=0
            )

])

@app.callback([ Output('tabulator', 'columns'),
                Output('tabulator', 'data'),
                Output('tabulator', 'initialHeaderFilter')],
                [Input('interval-component-iu', 'n_intervals')])
def initialize(val):

    return columns, data, initialHeaderFilter

@app.callback(Output('output', 'children'),
    [Input('tabulator', 'rowClicked'),
    Input('tabulator', 'multiRowsClicked'),
    Input('tabulator', 'cellEdited'),
    Input('tabulator', 'dataChanged'),
    Input('tabulator', 'dataFiltering'),
    Input('tabulator', 'dataFiltered')])
def display_output(row, multiRowsClicked, cell, dataChanged, filters, dataFiltered):
    print("row: {}".format(str(row)))
    print("cell: {}".format(str(cell)))
    print("data changed: {}".format(str(dataChanged)))
    print("filters: {}".format(str(filters)))
    print("data filtered: {}".format(str(dataFiltered)))
    return 'You have clicked row {} ; cell {} ; multiRowsClicked {}'.format(row, cell, multiRowsClicked)


if __name__ == '__main__':
    app.run_server(debug=True)
