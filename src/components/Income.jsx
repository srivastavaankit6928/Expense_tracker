function Income({inAmt,inDescription,dispatch}){
    function handleAddIn(){
        const inFlow = {
            id:Date.now(),
            type:"in",
            category:"💰",
            amt:inAmt,
            description:inDescription,
            date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        }

        dispatch({type:'setTransaction',payload:inFlow});
        
    }
    return(
        <div className="operation operation--income ">
            <h2>Income</h2>
            <form className="form__income">
                <input type="text" className="form__input" value={inDescription} onChange={(e) => dispatch({type:'setInDsp',payload:e.target.value})}/>

                <input type="number" className="form__input" value={inAmt} onChange={(e) => dispatch({type:'setInAmt',payload:e.target.value})}/>
                
                <button className="form__btn" onClick={(e)=> {
                    e.preventDefault();
                    if(inAmt === "" || inDescription === "") return alert("Fill the info");
                    return handleAddIn();
                }}>&rarr;</button>
                <label className="form__label">Description</label>
                <label className="form__label">Amount</label>
            </form>
        </div>
    );
}

export default Income
