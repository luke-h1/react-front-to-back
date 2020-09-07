import React, { Fragment } from 'react';
// import spinner from './spinner.gif' | if you were importing a gif
const Spinner = () => {
  return (
    <Fragment>
      <img
        src='https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif'
        // src={spinner}
        alt=''
        style={{ width: '500px', margin: 'auto', display: 'block' }} // double curly braces for styles
      />
    </Fragment>
  );
};

export default Spinner;
