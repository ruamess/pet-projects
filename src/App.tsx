import './styles/global.sass'

import calculatorValue from './calculatorValue'
import { observer } from 'mobx-react-lite'

const App = observer(() => {

  return (
    <div className='App' >
      <div className='calculator_input'>
        <input type='text' value={calculatorValue.value} />
      </div>
      <div className='calculator_buttons'>
        <div className='delete_button' onClick={() => calculatorValue.delete()}>С</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('/')}>/</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('7')} >7</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('8')}>8</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('9')}>9</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('*')}>*</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('4')}>4</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('5')}>5</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('6')}>6</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('-')}>-</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('1')}>1</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('2')}>2</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('3')}>3</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('+')}>+</div>
        <div className='large_button' onClick={() => calculatorValue.addNumber('0')}>0</div>
        <div className='default_button' onClick={() => calculatorValue.addNumber('.')}>.</div>
        <div className='default_button' onClick={() => calculatorValue.getResult()}>=</div>
      </div>
    </div >
  )
})

export default App
