import React from "react";
import {Button} from 'react-bootstrap';

function calculator() {
  return (
    <div className="Calculator">
      <div className="Calculator-wrapper">
        <div className="Calculator-Heading">
          <h3 className="disable">Calculator in react</h3>
        </div>
        <div className="Calculator-screen">
          <div className="Calculator-output">
            <span>

            </span>
          </div>
          <div className="Calculator-Backspace">
            <button className="Backspace-Btn">
              <i className=""> </i>
            </button>
            <span>

            </span>
          </div>
          <div className="Calculator_Button"> 
                <Button type='button' className='Top-Btn' value='AC'>
                  AC
                </Button>
                <button type="button" className='Top-Btn' value=''>
                  <sup>+</sup>/<sub>-</sub>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default calculator;
