import List from "./List";

function History({transaction,dispatch}){
    return(
        <ul className="movements">
            {transaction.map((item) => <List transaction={item} dispatch={dispatch} key={item.description}/>)}
        </ul>
    );
}

export default History
