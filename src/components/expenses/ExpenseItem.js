import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
export const ExpenseItem = ({ el, onClick, id }) => {
    return (
        <li className="li">
            <ExpenseDate date={el.date} />
            <div className="info">
                <p className="title-p">{el.title}</p>
                <p className="number-p">$ {el.price}</p>
            </div>
            <button className='btn' onClick={() => {
                onClick(id)
            }}>Delete</button>
        </li>
    )
}