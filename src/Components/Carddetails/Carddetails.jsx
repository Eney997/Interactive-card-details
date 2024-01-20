import React, { useState } from 'react';
import './Carddetails.css';
import Card from '../Card/Card';
import Thankyoupage from '../Thankyoupage/Thankyoupage';

const Carddetails = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [valueCvv, setValueCvv] = useState('');
  const [valueCard, setValueCard] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const [nameError, setNameError] = useState('');
  const [cardError, setCardError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handleInputChangeCvv = (e) => {
    let inputValueCvv = e.target.value;
    inputValueCvv = inputValueCvv.slice(0, 3);
    setValueCvv(inputValueCvv);
    setCvvError('');
  };

  const handleInputChangeCard = (e) => {
    let inputValueCard = e.target.value;
    inputValueCard = inputValueCard.slice(0, 16);
    setValueCard(inputValueCard);
    setCardError('');
  };

  const handleInputChangeName = (e) => {
    let inputCardholderName = e.target.value;
    setCardholderName(inputCardholderName);
    setNameError('');
  };

  const handleInputChangeMonth = (e) => {
    let inputExpiryMonth = e.target.value;
    setExpiryMonth(inputExpiryMonth);
    setExpiryError('');
  };

  const handleInputChangeYear = (e) => {
    let inputExpiryYear = e.target.value;
    setExpiryYear(inputExpiryYear);
    setExpiryError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!cardholderName.match(/^[A-Za-z\s]+$/)) {
      setNameError('Wrong format, letters only');
      isValid = false;
    }

    if (!valueCard.match(/^\d+$/)) {
      setCardError('Wrong format, numbers only');
      isValid = false;
    }

    if (!expiryMonth || !expiryYear) {
      setExpiryError("Can't be blank");
      isValid = false;
    }

    if (!valueCvv) {
      setCvvError("Can't be blank");
      isValid = false;
    }

    return isValid;
  };

  const handleConfirmClick = () => {
    if (validateForm()) {
      setConfirmed(true);
    }
  };

  return (
    <Card>
      {!confirmed && (
        <div className='whiteBox'>
          <h1 className='saerto'>CARDHOLDER NAME</h1>
          <input
            className={`fullName ${nameError && 'redBorder'}`}
            maxLength={40}
            type='text1'
            placeholder='First Name'
            value={cardholderName}
            onChange={handleInputChangeName}
          />
          <p className={`errorOne ${nameError && 'activeDisplay'}`}>{nameError}</p>

          <h2 className='saerto'>CARD NUMBER</h2>
          <input
            onChange={handleInputChangeCard}
            value={valueCard}
            className={`cardNumbersec ${cardError && 'redBorder'}`}
            type='text2'
            placeholder='Card Number'
          />
          <p className={`errorTwo ${cardError && 'activeDisplay'}`}>{cardError}</p>

          <h3 className='saerto'>Exp. Date (MM/YY)</h3>
          <input
            className={`monthIn1 ${expiryError && 'redBorder'}`}
            type='text4'
            placeholder='MM'
            maxLength='2'
            size='2'
            onChange={handleInputChangeMonth}
          />
          <input
            className={`yearIn3 ${expiryError && 'redBorder'}`}
            type='text5'
            placeholder='YY'
            maxLength='2'
            size='2'
            onChange={handleInputChangeYear}
          />
          <p className={`errorThree ${expiryError && 'activeDisplay'}`}>{expiryError}</p>

          <h4 className='saerto'>CVV</h4>
          <input
            value={valueCvv}
            onChange={handleInputChangeCvv}
            className={`cvv ${cvvError && 'redBorder'}`}
            type='text6'
            placeholder='CCV'
          />
          <p className={`errorFour ${cvvError && 'activeDisplay'}`}>{cvvError}</p>

          <button className='butOne' onClick={handleConfirmClick}>
            <span className='conSpan'>Confirm</span>
          </button>
        </div>
      )}
      {confirmed && <Thankyoupage setConfirmed={setConfirmed} />}
    </Card>
  );
};

export default Carddetails;
        
        