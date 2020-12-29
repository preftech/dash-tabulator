import React, {Component} from 'react';
import PropTypes, { array } from 'prop-types';

import 'react-tabulator/lib/styles.css'; // required styles
//import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'
import {resolveProps, resolveProp} from 'dash-extensions'

/**
 * DashTabulator is an implementation of the React Tabulator from 
 * https://github.com/ngduc/react-tabulator/ and https://github.com/olifolkerd/tabulator.
 * It takes a property, `column`, and `data`
 * displays it in tabulator.
 * The `options` property is passed to Tabulator to perform regular options
 * downloading as xlsx is enabled by default.
 */
export default class DashTabulator extends Component {
    constructor(props) {

        super(props);
        this.ref = null;
        
        this.theme = props.theme;
        switch(this.theme) {
            
            case null : // theme not set use default
            case 'tabulator': // name of default theme
            case 'default' : // default - expect the unexpected 
                require('react-tabulator/lib/css/tabulator.min.css');
                break
            case 'tabulator_modern' : 
                require('react-tabulator/lib/css/tabulator_modern.min.css');
                break;
            case 'tabulator_midnight':
                require('react-tabulator/lib/css/tabulator_midnight.min.css');
                break;
            case 'tabulator_simple' :
                require('react-tabulator/lib/css/tabulator_simple.min.css');
                break;
            case 'tabulator_site' :
                require('react-tabulator/lib/css/tabulator_site.min.css');
                break;
            case 'bootstrap/tabulator_bootstrap' :
                require('react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css');
                break;
            case 'bootstrap/tabulator_bootstrap4' :
                require('react-tabulator/lib/css/bootstrap/tabulator_bootstrap4.min.css');
                break;   
            case 'bulma/tabulator_bulma' :
                require('react-tabulator/lib/css/bulma/tabulator_bulma.min.css');
                break;
            case 'materialize/tabulator_materialize' :
                require('react-tabulator/lib/css/materialize/tabulator_materialize.min.css'); 
                break;
            case 'semantic-ui/tabulator_semantic-ui':
                require('react-tabulator/lib/css/semantic-ui/tabulator_semantic-ui.min.css'); 
                break; 
        }
    }
    
    /*
     * setProps calls render() which can break DOM updates like changing a cell to an editor 
     *          or resetting a filter field as it's being typed, shouldRerender can be used to turn off render
     *          as setProps is being called
     */
    shouldRerender = false; 
    
    rowClick = (e, row) => {
        //console.log('ref table: ', this.ref.table); // this is the Tabulator table instance
        //console.log('rowClick id: ${row.getData().id}', row, e);
        //console.log( this.ref.table.getSelectedData());
        this.props.setProps({rowClicked: row._row.data})
    };

    rowSelected = (data, row) => {
        this.shouldRerender = false;
        this.props.setProps({multiRowsClicked: data }) 
        this.shouldRerender = true;
    }

    downloadData = () => {
        let type = this.props.downloadButtonType.type || "csv";
        let filename = this.props.downloadButtonType.filename || "data";
        filename += `.${type}`
        this.ref.table.download(type, filename);
    };

    clearFilters = () => {
        this.ref.table.clearFilter(true);
    }

    shouldComponentUpdate() {
        return this.shouldRerender;
    }

    render() {
        const {id, data, setProps, columns, options, rowClicked, multiRowsClicked, cellEdited, dataChanged,
            downloadButtonType, clearFilterButtonType, initialHeaderFilter, dataFiltering, dataFiltered} = this.props;
        
        // Interpret column formatters as function handles.
        // TODO: resolve any columns method
        for(let i=0; i < columns.length; i++){
            columns[i] = resolveProps(columns[i], ["formatter"])
        }

        // check all options for a global windows function in the assets folder
        for (let key in options) {
            let o = options[key] 
            if (o instanceof Object) {
                options[key] = resolveProp(o, this)    
            }
        } 
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
                    //console.log(cell)
                    var edited =new Object() 
                    edited.column = cell.getField()
                    edited.initialValue = cell.getInitialValue()
                    edited.oldValue = cell.getOldValue()
                    edited.value = cell.getValue()
                    edited.row = cell.getData()
                    this.props.setProps({cellEdited: edited})
                }}
                rowSelectionChanged={this.rowSelected}
                dataChanged={(newData) => {
                    this.props.setProps({dataChanged: newData})
                }}
                dataFiltering={(filters) => {
                    //this.props.setProps({dataFiltering: this.getHeaderFilters()})
                    var filterHeaders = new Array()
                    if (this.ref) {
                        filterHeaders =this.ref.table.getHeaderFilters() 
                    }
                    this.shouldRerender = false;
                    this.props.setProps({dataFiltering:filterHeaders})
                    this.shouldRerender = true;
                }}
                dataFiltered={(filters, rows) => {
                    let rowData = new Array(rows.length)
                    rows.forEach(r => rowData.push(r.getData()))
                    var filterHeaders = new Array()
                    if (this.ref) {
                        filterHeaders =this.ref.table.getHeaderFilters() 
                        //console.log(this.ref.table.getHeaderFilters())
                        
                    }
                    
                    this.shouldRerender = false;
                    this.props.setProps(
                                        {
                                            dataFiltered: {
                                                            filters: filterHeaders,
                                                            rows: rowData
                                                        }
                                        }
                                        )
                    this.shouldRerender = true;
                    }
                } // dataFiltered end

                initialHeaderFilter={initialHeaderFilter}

            />
            </div>
        );
    }
}

DashTabulator.defaultProps = {
    columns : [],
    data: [],
    theme: null
};

DashTabulator.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * theme
     */
    theme : PropTypes.string,

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
     * multiRowsClicked, when multiple rows are clicked
     */
    multiRowsClicked: PropTypes.array,

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
    clearFilterButtonType: PropTypes.object,

    /**
     * initialHeaderFilter based on http://tabulator.info/docs/4.8/filter#header
     * can take array of filters 
     */
    initialHeaderFilter: PropTypes.array, 

    /**
     * dataFiltering based on http://tabulator.info/docs/4.8/callbacks#filter
     * The dataFiltering callback is triggered whenever a filter event occurs, before the filter happens.
     */
    dataFiltering: PropTypes.array ,

    /**
     * dataFiltered based on http://tabulator.info/docs/4.8/callbacks#filter
     * The dataFiltered callback is triggered after the table dataset is filtered
     */
    dataFiltered: PropTypes.object,


    /**
     * standard props not used by dash-tabulator directly
     * can be used as part of custom javascript implementations
     */
    rowClick : PropTypes.any,
    tableBuilding : PropTypes.any,
    tableBuilt : PropTypes.any,
    rowDblClick : PropTypes.any,
    rowContext : PropTypes.any,
    rowTap : PropTypes.any,
    rowDblTap : PropTypes.any,
    rowTapHold : PropTypes.any,
    rowAdded : PropTypes.any,
    rowDeleted : PropTypes.any,
    rowMoved : PropTypes.any,
    rowUpdated : PropTypes.any,
    rowSelectionChanged : PropTypes.any,
    rowSelected : PropTypes.any,
    rowDeselected : PropTypes.any,
    rowResized : PropTypes.any,
    cellClick : PropTypes.any,
    cellDblClick : PropTypes.any,
    cellContext : PropTypes.any,
    cellTap : PropTypes.any,
    cellDblTap : PropTypes.any,
    cellTapHold : PropTypes.any,
    cellEditing : PropTypes.any,
    cellEditCancelled : PropTypes.any,
    columnMoved : PropTypes.any,
    columnResized : PropTypes.any,
    columnTitleChanged : PropTypes.any,
    columnVisibilityChanged : PropTypes.any,
    headerClick : PropTypes.any,
    headerDblClick : PropTypes.any,
    headerContext : PropTypes.any,
    headerTap : PropTypes.any,
    headerDblTap : PropTypes.any,
    headerTapHold : PropTypes.any,
    htmlImporting : PropTypes.any,
    htmlImported : PropTypes.any,
    dataLoading : PropTypes.any,
    dataLoaded : PropTypes.any,
    ajaxRequesting : PropTypes.any,
    ajaxResponse : PropTypes.any,
    ajaxError : PropTypes.any,
    dataSorting : PropTypes.any,
    dataSorted : PropTypes.any,
    renderStarted : PropTypes.any,
    renderComplete : PropTypes.any,
    pageLoaded : PropTypes.any,
    localized : PropTypes.any,
    dataGrouping : PropTypes.any,
    dataGrouped : PropTypes.any,
    groupVisibilityChanged : PropTypes.any,
    groupClick : PropTypes.any,
    groupDblClick : PropTypes.any,
    groupContext : PropTypes.any,
    groupTap : PropTypes.any,
    groupDblTap : PropTypes.any,
    groupTapHold : PropTypes.any,
    movableRowsSendingStart : PropTypes.any,
    movableRowsSent : PropTypes.any,
    movableRowsSentFailed : PropTypes.any,
    movableRowsSendingStop : PropTypes.any,
    movableRowsReceivingStart : PropTypes.any,
    movableRowsReceived : PropTypes.any,
    movableRowsReceivedFailed : PropTypes.any,
    movableRowsReceivingStop : PropTypes.any,
    validationFailed : PropTypes.any,
    clipboardCopied : PropTypes.any,
    clipboardPasted : PropTypes.any,
    clipboardPasteError : PropTypes.any,
    downloadReady : PropTypes.any,
    downloadComplete : PropTypes.any,
    selectableCheck : PropTypes.any

};
