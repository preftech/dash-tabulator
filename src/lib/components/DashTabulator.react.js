import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashTabulator extends Component {
    
    rowClick = (e, row) => {
        //console.log('ref table: ', this.ref.table); // this is the Tabulator table instance
        console.log('rowClick id: ${row.getData().id}', row, e);
        this.props.setProps({rowClicked: row._row.data})
    };
    render() {
        const {id, data, setProps, columns, options, rowClicked} = this.props;
        
        return (
            <ReactTabulator
                data={data}
                columns={columns}
                tooltips={true}
                layout={"fitData"}
                options={options}
                rowClick={this.rowClick}

            />
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
    
};
