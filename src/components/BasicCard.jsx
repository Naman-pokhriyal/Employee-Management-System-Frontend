import "../Styles/basicGrid.css"

export default function BasicCard({row}) {
    return (
        <div className="empCard">
            <div className="empPic"><img alt="dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z9vjM-_Ww_rUHKOYFQ3brhBsKWniGSN7jembYtImHkPzHReyZ4zNBlPF550WjI8a_eE&usqp=CAU"/></div>
            <div className="empContent">
                <div>
                    <label>Name:</label><span className="empName">{row.first_name + " " + row.last_name}</span>
                </div>
                <div>
                    <label>Email:</label><span className="empEmail">{row.email}</span>
                </div>
                <div>
                    <label>Phone No:</label><span className="empPhone">{row.phone_number}</span>
                </div>
            </div>
        </div>
    );
}