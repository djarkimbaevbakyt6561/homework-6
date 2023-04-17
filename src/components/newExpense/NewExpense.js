import { Button } from '../UI/Button';
import './NewExpense.css'
import { ExpensesForm } from './ExpensesForm'
import { useState } from 'react';

export const NewExpense = ({ onSubmit }) => {
    const [showForm, setShowForm] = useState(false);
    const [containerStyle, setContainerStyle] = useState('');

    function openAndCloseExpensesFormHandler() {
        setShowForm((prev) => !prev);
        setContainerStyle(showForm ? '' : 'button-container-2');
    }
    return (
        <div className={`button-container ${containerStyle}`}>
            {showForm ? (
                <ExpensesForm onSubmit={onSubmit} onClick={openAndCloseExpensesFormHandler} />
            ) : (
                <Button onClick={openAndCloseExpensesFormHandler}>
                    Добавить новый расход
                </Button>
            )}
        </div>
    );
};