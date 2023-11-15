function Expense({option,expAmt,expDescription,dispatch}){
    function handleAddExp(){
        const outFlow = {
            id:Date.now(),
            type:"out",
            category:[...option].at(0),
            amt:expAmt,
            description:expDescription,
            date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        }

        dispatch({type:'setTransaction',payload:outFlow});

    }
    return(
        <div className="operation operation--expense">
            <h2>Expenses</h2>
            <form className="form__expense">
                <select className="form__input" value={option} onChange={(e) => dispatch({type:"setOption",payload:e.target.value} )}>
                    <option>🍔 Food</option>
                    <option>🚌 Transport</option>
                    <option>🎬 Entertainment</option>
                </select>

                <input type="number" className="form__input" value={expAmt} onChange={(e)=>dispatch({type:'setExpAmt', payload:e.target.value})}/>

                <label className="form__label">Category</label>
                <label className="form__label">Amount</label>

                <input type="text" className="form__input" value={expDescription} onChange={(e)=>dispatch({type:'setExpDsp', payload:e.target.value})}/>

                <button className="form__btn" onClick={(e)=>{
                    e.preventDefault();
                    if(expAmt === "" || expDescription === "") return alert('Fill the info');
                    return handleAddExp()}}>
                    &rarr;</button>
                <label className="form__label">Description</label>
            </form>
        </div>
    );
}

export default Expense
