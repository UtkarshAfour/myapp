import React from 'react';
import MUIDataTable from "mui-datatables";

const Table = (props) => {
    console.log(props.columns);
    return (
        <div>
            <MUIDataTable>
            title={"Employee List"}
            data={props.data}
            columns={props.columns}
            options={props.options}
            </MUIDataTable>
        </div>
    )
};

export default Table;