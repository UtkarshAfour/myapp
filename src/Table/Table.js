import React,{useState} from 'react';
import MUIDataTable from "mui-datatables";

const Table = (props) => {
    const [selectedRows, setselectedRows] = useState(0);
    const extraOptions ={ rowsSelected: selectedRows,
                        onRowsSelect: (rowsSelected, allRows) => {
                        console.log(rowsSelected, allRows);
                        //this.setState({ rowsSelected: allRows.map(row => row.dataIndex) });
                        },
                        onRowClick: (rowData, rowState) => {
                        console.log(rowData, rowState);
                        }};
    //console.log(props.options);

    const modifiedOption = {...props.options,...extraOptions};
    console.log(modifiedOption);    
    //console.log(props.columns);
    return (
        <div>
           <MUIDataTable
            title={"Employee List"}
            data={props.data}
            columns={props.columns}
            options={modifiedOption}
            />
        </div>
    )
};

export default Table;