import React from "react";
import {Button} from 'react-bootstrap';
import {FaBackspace} from 'react-icons/fa'

function calculator() {
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

                <Button type='button' className='Normal-Btn' value='7'>
                  7
                </Button>
                <Button type="button" className='Normal-Btn' value='8'>
                  8
                </Button>

                <Button type="button" className='Normal-Btn' value='9'>
                  9
                </Button>
                
                <Button type="button" className='Special-Btn' value='X'>
                X
                </Button>
               
                <Button type="button" className='Normal-Btn' value='4'>
                4
                </Button>

                <Button type='button' className='Normal-Btn' value='5'>
                  5
                </Button>
                <Button type="button" className='Normal-Btn' value='6'>
                  6
                </Button>
                  
                <Button type="button" className='Special-Btn' value='÷'>
                  ÷
                </Button>
               
                <Button type="button" className='Normal-Btn' value='1'>
                  1
                </Button>

                <Button type='button' className='Normal-Btn' value='2'>
                  2
                </Button>
                <Button type="button" className='Normal-Btn' value='3'>
                  3
                </Button>
                
                <Button type="button" className='Special-Btn' value='-'>
                -
                </Button>
               
                <Button type="button" className='Normal-Btn' value='.'>
               .
                </Button>

                <Button type="button" className='Normal-Btn' value='0'>
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
export default calculator;
