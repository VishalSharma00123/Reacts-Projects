import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

// useCallback() is used to terminate unwanted re-rendering or re-executing of the funciton ot component whereas 
// useMemo() is used to terminate unwanted re-rendering or re-executing of the particular code in this case sorting array we dont want re execute the arrays even though if its value is not changing

const DemoList = (props) => {
  // we have pulled out items from the props using object destructuring
  const { items } = props

  const sortedList = useMemo(() => {
    console.log('Items Sorted');
    return items.sort((a, b) => a - b)
  }, [items])//sorting the array
  // by using
  console.log("DEMO RUNNING");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      {/* //displaying the title using props */}
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>//mapping all the sorted array to the list
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
// this whole component re render only when when something or some value like {props.title} changes in this component bcz running the same component again and again even though the value not change doesnt make sense