import React from "react";

type authprops = {
  name: string;
  onclick?: any;
};

const Authblock = (props: authprops) => {
  return (
    <button
      type='submit'
      className='authbox'
      onClick={props.onclick}
      id='authblock'
    >
      {props.name}
    </button>
  );
};

export default Authblock;
