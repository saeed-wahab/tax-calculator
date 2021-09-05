import React from "react";
function TableBody({list}){
    const allRows = list.map((row,key)=>(
        <tr key={key}>
            <td>{row.chargeable}</td>
            <td>{row.rate}</td>
            <td>{row.tax}</td>
        </tr>
    ))
    return(
        <tbody>
            {allRows}
        </tbody>
    )
}
function Table(props){ 
    return(
        <table className="table is-striped">
            <thead>
                <tr>
                    <th>Taxable Income</th>
                    <th> Rate{'(%)'}</th>
                    <th>Tax Deducted </th>
                </tr>
            </thead>
            <TableBody list={props.list} />
            
            <tfoot>
                <tr>
                    <td colSpan="2">Total Tax to pay</td>
                    <td>{props.tax}</td>
                </tr>
                
            </tfoot>
        </table>
    );
}

export default Table;