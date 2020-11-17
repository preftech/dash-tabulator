import dash_tabulator
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from textwrap import dedent as d
import json

external_scripts = ['https://oss.sheetjs.com/sheetjs/xlsx.full.min.js']
external_stylesheets = ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css']
app = dash.Dash(__name__, external_scripts=external_scripts, external_stylesheets=external_stylesheets)

styles = {
            'pre': {
                'border': 'thin lightgrey solid',
                'overflowX': 'scroll'
            }
        }

columns = [
                { "title": "Name", "field": "name", "width": 150, "headerFilter":True, "editor":"input"},
                { "title": "Age", "field": "age", "hozAlign": "left", "formatter": "progress" },
                { "title": "Favourite Color", "field": "col", "headerFilter":True },
                { "title": "Date Of Birth", "field": "dob", "hozAlign": "center" },
                { "title": "Rating", "field": "rating", "hozAlign": "center", "formatter": "star" },
                { "title": "Passed?", "field": "passed", "hozAlign": "center", "formatter": "tickCross" }
              ]
data = [
                {"id":1, "name":"Oli Bob", "age":"12", "col":"red", "dob":""},
                {"id":2, "name":"Mary May", "age":"1", "col":"blue", "dob":"14/05/1982"},
                {"id":3, "name":"Christine Lobowski", "age":"42", "col":"green", "dob":"22/05/1982"},
                {"id":4, "name":"Brendon Philips", "age":"125", "col":"orange", "dob":"01/08/1980"},
                {"id":5, "name":"Margret Marmajuke", "age":"16", "col":"yellow", "dob":"31/01/1999"},
                {"id":6, "name":"Fred Savage", "age":"16", "col":"yellow", "rating":"1", "dob":"31/01/1999"},
                {"id":7, "name":"Brie Larson", "age":"30", "col":"blue", "rating":"1", "dob":"31/01/1999"},
              ]

options = { "groupBy": "col", "selectable":1}
downloadButtonType = {"css": "btn btn-primary", "text":"Export", "type":"xlsx"}
clearFilterButtonType = {"css": "btn btn-outline-dark", "text":"Clear Filters"}

app.layout = html.Div([
    dash_tabulator.DashTabulator(
        id='input',
        columns=[],
        data=[],
        options=options,
        downloadButtonType=downloadButtonType,
        clearFilterButtonType=clearFilterButtonType
    ),
    html.Div(id='output'),
    dcc.Interval(
                id='interval-component-iu',
                interval=1*10, # in milliseconds
                n_intervals=0,
                max_intervals=0
            )

])

@app.callback([ Output('input', 'columns'), 
                Output('input', 'data')],
                [Input('interval-component-iu', 'n_intervals')])
def initialize(val):

    return columns, data

@app.callback(Output('output', 'children'), 
    [Input('input', 'rowClicked'),
    Input('input', 'cellEdited'),
    Input('input', 'dataChanged')])
def display_output(row, cell, dataChanged):
    print(row)
    print(cell)
    print(dataChanged)
    
    return 'You have clicked row {} ; cell {}'.format(row, cell)


if __name__ == '__main__':
    app.run_server(debug=True)
