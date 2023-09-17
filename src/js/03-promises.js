const form = document.querySelector('.form')
form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault()
  const {delay, step, amount} = evt.currentTarget.elements;
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  if (delayValue < 0 || stepValue < 0 || amountValue < 0) {
    alert('Please use positive numbers');
    return
}



  let position = 0;
  let rescheduling = 0;

  for (let i = 1; i <= amountValue; i++){
    position += 1;
    rescheduling = delayValue + stepValue * (i - 1);
    
  createPromise(position, rescheduling)
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}



function createPromise(position, delay) {
  const promis = new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({
          position: `${position}`,
          delay: `${delay}`
        }) 
      } else {
        rej({
          position: `${position}`,
          delay: `${delay}`
        })
      }
    }, delay);
  });
  return promis
}
