import BasicCard from "./BasicCard";
import "../Styles/basicGrid.css"

export default function BasicGrid({rows}){
    return(
        <div className= "empCards">
            {
                rows.map((row)=> {
                    return <BasicCard key={row.employee_id} row={row}/>
                })
            }
        </div>
    );
}