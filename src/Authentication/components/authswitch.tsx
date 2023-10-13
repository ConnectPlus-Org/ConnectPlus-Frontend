import React from "react";

type switchprops = {
  status: string;
  action: string;
  destination: () => void;
};

const Switch = (props: switchprops) => {
  return (
    <div className='authbox'>
      <p id='switch'>
        {props.status} Have An Account?
        <p id='' onClick={props.destination}>
          {` ${props.action}`}
        </p>
      </p>
    </div>
  );
};

export default Switch;
