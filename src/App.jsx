import { useReducer } from "react";

import Balance from "./components/Balance";
import Expense from "./components/Expense";
import History from "./components/History";
import Income from "./components/Income";
import Navigation from "./components/Navigation";
import Summary from "./components/Summary";
import "./index.css"

const initialState ={
  transaction:[],
  option:"🍔 Food",
  expAmt:"",
  expDescription:"",
  inAmt:"",
  inDescription:"",
  totalBalance:0,
  totalExpense:0,
  totalIncome:0
}

function reducer(state,action){
  switch(action.type){
    case 'setOption': return {...state,option:action.payload}

    case 'setExpAmt': return {...state,expAmt:action.payload}

    case 'setExpDsp': return {...state,expDescription:action.payload}

    case 'setInAmt': return {...state,inAmt:action.payload}

    case 'setInDsp': return {...state,inDescription:action.payload}

    case 'setTransaction': 
        const newTransaction = action.payload;
        // if(newTransaction.length === 0) return;
        const newIncome = state.totalIncome + (newTransaction.type === 'in' ? Number(newTransaction.amt) : 0);
        const newExpense = state.totalExpense + (newTransaction.type === 'out' ? Number(newTransaction.amt) : 0);
        const newBalance = newIncome - newExpense;
        return {...state,transaction:[...state.transaction,action.payload],option:"🍔 Food",expAmt:"",expDescription:"",inAmt:"",inDescription:"", totalIncome:newIncome, totalExpense:newExpense, totalBalance:newBalance}

    case 'dltTransaction': 
        const newDltTransaction = state.transaction.find((item) => item.id === action.payload);
        const reCalcIncome = state.totalIncome - (newDltTransaction.type === "in"? newDltTransaction.amt : 0);
        const reCalcExpense = state.totalExpense - (newDltTransaction.type === "out"? newDltTransaction.amt : 0);
        const newCalcBalance = reCalcIncome - reCalcExpense;
        return {...state,transaction: state.transaction.filter(item => item.id !== action.payload),totalIncome:reCalcIncome,totalExpense:reCalcExpense,totalBalance:newCalcBalance}
    
    default: 
      throw new Error("Invalid action");
  }
}

function App(){
  const [{transaction,option,expAmt,expDescription,inAmt,inDescription,totalIncome,totalExpense,totalBalance},dispatch] = useReducer(reducer,initialState);

  return(
    <div>
      <Navigation />
      <main className="app">
        <Balance total={totalBalance}/>
        <History transaction={transaction} dispatch={dispatch}/>
        <Summary totalIncome={totalIncome} totalExpense={totalExpense}/>
        <Expense option={option} expAmt={expAmt} expDescription={expDescription} dispatch={dispatch}/>
        <Income inAmt={inAmt} inDescription={inDescription} dispatch={dispatch}/>
      </main>
    </div>
  );
}

export default App
