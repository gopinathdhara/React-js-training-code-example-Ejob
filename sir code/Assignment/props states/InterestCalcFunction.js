const InterestCalcFunction= (props)=>{
  var simpleInterest;
  var actualAmount; 
  simpleInterest=props.principalParam*props.rateParam*props.timeParam/100;
  actualAmount=parseFloat(props.principalParam)+parseFloat(simpleInterest);
  simpleInterest=simpleInterest.toFixed(2);
  actualAmount = actualAmount.toFixed(2);
  var data='';
  if(actualAmount>0 && props.timeParam>0){
    data= <div>
                <h4 style={{color:'blue'}}>Simple Interest: {simpleInterest}</h4>
                <h4 style={{color:'red'}}>Actual Amount: {actualAmount}</h4>
          </div>
  }
  return(
      <div>
          {data}
      </div>
  )
}

export default InterestCalcFunction;