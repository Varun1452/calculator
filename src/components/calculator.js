import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import {FaBackspace} from 'react-icons/fa'

function Calculator() {
  const [input, setInput]= useState ("");
  const handleInput = (e) => {
    const value = e.target.value;

    setInput((input)=> input + value );
  }
  return (
    <div className="Calculator">
      <div className="Calculator-Wrapper">
        <div className="Calculator-Heading Aligned">
          <h3 className="Disable">Calculator in react</h3>
        </div>
        <div className="Calculator-screen Aligned">
          <div className="Calculator-output">
            <span>
            
            </span>
          </div>
        </div>
          <div className="Calculator-Input Aligned">
            <span>
            {input?  input : "0"}
            </span>
          </div>
          <div className="Calculator-Button"> 
                <Button type='button' className='Top-Btn' value='AC'>
                  AC
                </Button>
                <Button type="button" className='Top-Btn' value='+/-'>
                +/-
                </Button>
                
                <Button type="button" className='Top-Btn' value='%'>
                %
                </Button>
               
                <Button type="button" className='Special-Btn' value='backspace'>
                <FaBackspace/>
                </Button>

                <Button type='button' className='Normal-Btn' value='7' onClick={handleInput}>
                  7
                </Button>
                <Button type="button" className='Normal-Btn' value='8' onClick={handleInput}>
                  8
                </Button>

                <Button type="button" className='Normal-Btn' value='9' onClick={handleInput}>
                  9
                </Button>
                
                <Button type="button" className='Special-Btn' value='X'>
                X
                </Button>
               
                <Button type="button" className='Normal-Btn' value='4' onClick={handleInput}>
                4
                </Button>

                <Button type='button' className='Normal-Btn' value='5' onClick={handleInput}>
                  5
                </Button>
                <Button type="button" className='Normal-Btn' value='6' onClick={handleInput}>
                  6
                </Button>
                  
                <Button type="button" className='Special-Btn' value='÷'>
                  ÷
                </Button>
               
                <Button type="button" className='Normal-Btn' value='1' onClick={handleInput}>
                  1
                </Button>

                <Button type='button' className='Normal-Btn' value='2' onClick={handleInput}>
                  2
                </Button>
                <Button type="button" className='Normal-Btn' value='3' onClick={handleInput}>
                  3
                </Button>
                
                <Button type="button" className='Special-Btn' value='-'>
                -
                </Button>
               
                <Button type="button" className='Normal-Btn' value='.'>
               .
                </Button>

                <Button type="button" className='Normal-Btn' value='0' onClick={handleInput}>
               0
                </Button>

                <Button type='button' className='Special-Btn' value='+'>
                  +
                </Button>
                <Button type="button" className='Special-Btn' value='='>
                =
                </Button>
          </div>
      </div>
    </div>
  );
}
export default Calculator;
