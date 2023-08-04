import React from 'react';
import ExpenseDate from './ExpenseDate'; // Make sure to import the ExpenseDate component

const ExpenseList = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      {/* Your other code */}
    </div>
  );
};

export default ExpenseList;
