import './ExpensItem.css'

function ExpenseItem(props){
    
    return(

        <div className ="expense-item">
            <div className="expense-item__description">{props.title}</div>
            <div className="expense-item__price">{props.amount}</div>
            <div className="expense-item__img">{props.thumb}</div>
        </div>
    );

}

export default ExpenseItem;