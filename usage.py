import dash_tabulator
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
columns = [
                { "title": "Name", "field": "name", "width": 150, "headerFilter":True},
                { "title": "Age", "field": "age", "hozAlign": "left", "formatter": "progress" },
                { "title": "Favourite Color", "field": "col" },
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
                {"id":6, "name":"Brie Larson", "age":"30", "col":"blue", "rating":"1", "dob":"31/01/1999"},
              ]
options = { "groupBy": "col"}
app.layout = html.Div([
    dash_tabulator.DashTabulator(
        id='input',
        columns=columns,
        data=data,
        options=options
    ),
    html.Div(id='output')
])


#@app.callback(Output('output', 'children'), [Input('input', 'data')])
#def display_output(value):
#    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
