import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

function Home() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>NDO</h1>
      </div>
    </div>
  );
}

export default withStyles(s)(Home);
