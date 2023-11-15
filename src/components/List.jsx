function List({transaction,dispatch}){
    return(
        <li className={`movements__row ${transaction.type === "out" ? "movements__out" : "movements__in"}`}>
            <div>
                <div className="movements__category">{transaction.category}</div>
                <div className="movements__date">{transaction.date}</div>
            </div>

            <div className="movements__description">{transaction.description}</div>

            <div className="right">
                <div className="movements__value">{`₹ ${transaction.type === "out" ? "-" : "+"}${transaction.amt}`}</div>
                <button className="movements__dlt" onClick={(e) => {
                    e.preventDefault();
                    return dispatch({type:'dltTransaction',payload:transaction.id})
                }}>x</button>
            </div>
        </li> 
    );
}

export default List
