import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const MyTable = (props) => {

    const average = props.netIncomesArray
        .map(item => item.income)
        .reduce((a, b) => {
            return a + b/props.netIncomesArray.length
        },0);
  
    return (
        <>
            <Table className='striped bordered hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>COMPANY NAME</th>
                        <th>NET INCOME AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {props.netIncomesArray.map(company => {
                        return (
                            <tr key={props.netIncomesArray.indexOf(company)}>
                                <th>{props.netIncomesArray.indexOf(company) + 1}</th>
                                <td>{company.brand}</td>
                                <td>{company.income}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
            <br />
            <p>Promedio de ingreso neto: {Number(average.toFixed(2))}</p>
        </> 
    )
};
  
MyTable.propTypes = {
    netIncomesArray: PropTypes.array
};

export default MyTable;