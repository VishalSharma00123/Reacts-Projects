import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';


function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
    // updated To 'New Title' and button is cliked
  }, []);

  const listitems = useMemo(() => [5, 3, 1, 10, 9], [])

  return (
    <div className='app'>
      <DemoList title={listTitle} items={listitems} />
      {/* send the array list as a props value to sort in other component */}
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
