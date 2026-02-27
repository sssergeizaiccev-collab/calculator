import { useState } from 'react'
import styles from './app.module.css';
import './App..css'

function App() {
  const [operand1, setOperand1] = useState('');
  const [operator, setOperator] = useState(null);
  const [operand2, setOperand2] = useState('');
  const [showResult, setShowResult] = useState(false);

  const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '=', 'C'];

  const numAdd = (num) => {
    setOperand1(prev => prev + num);
    setShowResult(false);
  }

  const clear = () => {
    setOperand1('');
    setOperand2('');
    setOperator(null);
  };

  const operations = (oper) => {
    if (oper === 'C') {
      clear()
    }

    if (oper === '+' || oper === '-') {
      setOperator(oper);
      setOperand2(operand1)
      setOperand1('')
      setShowResult(false)
    }

    if (oper === '=') {
      result();
    }

  };

  const result = () => {
    const num1 = Number(operand2);
    const num2 = Number(operand1);
    let res;

    if (operator === '+') {
      res = num1 + num2;
    }

    if (operator === '-') {
      res = num1 - num2
    }

    setOperand1(res.toString());
    setOperand2('');
    setOperator('')
    setShowResult(true);
  };

  return (
    <div className='container'>
      <div className={showResult ? styles.red : styles.black}>
        <p>
          {operand2}
          {operator}
          {operand1}
        </p>
      </div>
      <div className='numbersButton'>
        {NUMS
          .filter(item => typeof item === 'number')
          .map((num, index) =>
            <button className='buttonNum' key={index} onClick={() => numAdd(num)}>{num}</button>
          )
        }
      </div>
      <div className='operationsButtons'>
        {NUMS
          .filter(item => typeof item !== 'number')
          .map((oper, index) =>
            <button className='buttonOper' key={index} onClick={() => operations(oper)} >{oper}</button>
          )
        }
      </div>
    </div>
  )
}

export default App
