function Summary({totalIncome,totalExpense}){
    return(
        <div className="summary">
            <p className="summary__label">In</p>
            <p className="summary__value summary__value--in">{`₹ ${totalIncome}`}</p>
            <p className="summary__label">Out</p>
            <p className="summary__value summary__value--out">{`₹ ${totalExpense}`}</p>
        </div>
    );
}

export default Summary
