import React, { useEffect, useRef, useContext } from 'react';
import './Stepper.scss';

import { ShopifyData } from '../../Context/ShopifyData';

const Stepper = ({ step }) => {
  const { stepToPersonalDetails, setStepToPersonalDetail } = useContext(
    ShopifyData,
  );

  const bar = useRef();

  const stepperContainer = useRef();
  const prevSetRef = useRef();

  //custom Hook
  const usePrevious = data => {
    const ref = useRef();
    useEffect(() => {
      ref.current = data;
    }, [data]);
    return ref.current;
  };

  let prevStep = usePrevious(step);

  useEffect(() => {
    prevSetRef.current = step;

    if (step > prevStep && !stepToPersonalDetails) {
      bar.current.classList.add(`bar${parseInt(step + 2)}`);
      stepperContainer.current
        .querySelector(`.label${parseInt(step + 2)}`)
        .classList.add('active');

      stepperContainer.current
        .querySelector(`.step${parseInt(step + 2)}`)
        .classList.add('active');
    } else if (step < prevStep && !stepToPersonalDetails) {
      bar.current.classList.remove(`bar${parseInt(prevStep + 2)}`);
      stepperContainer.current
        .querySelector(`.label${parseInt(prevStep + 2)}`)
        .classList.remove('active');

      stepperContainer.current
        .querySelector(`.step${parseInt(prevStep + 2)}`)
        .classList.remove('active');
    } else if (step == 0 && stepToPersonalDetails) {
      bar.current.classList.remove(`bar${parseInt(step + 2)}`);
      bar.current.classList.remove(`bar${parseInt(step + 3)}`);
      stepperContainer.current
        .querySelector(`.label${parseInt(step + 2)}`)
        .classList.remove('active');

      stepperContainer.current
        .querySelector(`.label${parseInt(step + 3)}`)
        .classList.remove('active');

      stepperContainer.current
        .querySelector(`.step${parseInt(step + 2)}`)
        .classList.remove('active');
      stepperContainer.current
        .querySelector(`.step${parseInt(step + 3)}`)
        .classList.remove('active');

      setStepToPersonalDetail(false);
    }
  }, [step]);

  return (
    <div className="stepper-container" ref={stepperContainer}>
      <div className="stepper-container__stepper">
        <div className="bar1 bar2 bar3" ref={bar}></div>
        <div className="step step1 active">1</div>
        <div className="step step2 active">2</div>
        <div className="step step3 active">✓</div>
        <div className="labels__container">
          <label className="label label1 active">Personal</label>
          <label className="label label2 active">Delivery</label>
          <label className="label label3 active">Payment</label>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
