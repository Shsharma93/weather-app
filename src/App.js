import React from 'react';
import classes from './app.module.scss';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  return (
    <div className={classes.app}>
      <Wrapper />
    </div>
  );
};

export default App;
