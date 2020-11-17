import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'

/**
 * DashTabulator is an implementation of the React Tabulator from 
 * https://github.com/ngduc/react-tabulator/ and https://github.com/olifolkerd/tabulator.
 * It takes a property, `column`, and `data`
 * displays it in tabulator.
 * The `options` property is passed to Tabulator to perform regular options
 * downloading as xlsx is enabled by default.
 */
export default class DashTabulator extends Component {
    ref = null;
    rowClick = (e, row) => {
        //console.log('ref table: ', this.ref.table); // this is the Tabulator table instance
        //console.log('rowClick id: ${row.getData().id}', row, e);
        this.props.setProps({rowClicked: row._row.data})
    };

    downloadData = () => {
        let type = this.props.downloadButtonType.type || "csv";
        let filename = this.props.downloadButtonType.filename || "data";
        filename += `.${type}`
        this.ref.table.download(type, filename);
    };

    clearFilters = () => {
        this.ref.table.clearFilter(true);
    }

    render() {
        const {id, data, setProps, columns, options, rowClicked, cellEdited, dataChanged, 
            downloadButtonType,
            clearFilterButtonType} = this.props;
        
        const options2 = {...options, 
            downloadDataFormatter: (data) => data,
            downloadReady: (fileContents, blob) => blob
        }
        let downloadButton;
        if (downloadButtonType) {
            downloadButton = <button type="button" onClick={this.downloadData} className={downloadButtonType.css} id="download">{downloadButtonType.text}</button>
        }
        let clearFilterButton;
        if (clearFilterButtonType) {
            clearFilterButton = <button type="button" onClick={this.clearFilters} className={clearFilterButtonType.css} id="clearFilters">{clearFilterButtonType.text}</button>
        }

        //<button type="button" onClick={this.downloadData} className="btn btn-success" id="download-xlsx">Download XLSX</button>
        return (
            <div>
                {downloadButton}{clearFilterButton}
            <ReactTabulator
                ref={ref => (this.ref = ref)}
                data={data}
                columns={columns}
                tooltips={true}
                layout={"fitData"}
                options={options2}
                rowClick={this.rowClick}
                cellEdited={(cell) => {
                    var edited =new Object() 
                    edited.column = cell.getField()
                    edited.initialValue = cell.getInitialValue()
                    edited.oldValue = cell.getOldValue()
                    edited.value = cell.getValue()
                    edited.row = cell.getData()
                    this.props.setProps({cellEdited: edited})
                }}
                dataChanged={(newData) => {
                    this.props.setProps({dataChanged: newData})
                }}
            />
            </div>
        );
    }
}

DashTabulator.defaultProps = {};

DashTabulator.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    columns: PropTypes.array,

    /**
     * The value displayed in the input.
     */
    data: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Tabulator Options
     */

    options: PropTypes.object,

    
    /**
     * rowClick captures the row that was clicked on
     */
    rowClicked: PropTypes.object,

    /**
     * cellEdited captures the cell that was clicked on
     */
    cellEdited: PropTypes.object,

    /**
     * dataChanged captures the cell that was clicked on
     */
    dataChanged: PropTypes.array,
    
    
    /**
     * downloadButtonType, takes a css style, text to display on button, type is file type to download
     * e.g.
     *  downloadButtonType = {"css": "btn btn-primary", "text":"Export", "type":"xlsx"}
     */
    downloadButtonType: PropTypes.object,

    /**
     * clearFilterButtonType, takes a css style, text to display on button
     * e.g.
     *  clearFilterButtonType = {"css": "btn btn-primary", "text":"Export"}
     */
    clearFilterButtonType: PropTypes.object

};
