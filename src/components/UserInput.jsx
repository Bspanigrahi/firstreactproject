// const UserInput = ({onInitialInvestment,onAnnualInvestment,onExpectedReturn,onDuration}) => {
  const UserInput = ({userInput,onInput}) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            // placeholder="123"
              name="initialInvestment"
              value = {userInput.initialInvestment}
              onInput={onInput}
            // onInput={
            //   (e)  => onInitialInvestment(e.target.value)}
            // value={onInitialInvestment}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            // placeholder="123"
              name="annualInvestment"
              value = {userInput.annualInvestment}
              onInput={onInput}
            // onInput={(e) => onAnnualInvestment(e.target.value)}
            // value={onAnnualInvestment}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            // placeholder="123"
              name="expectedReturn"
              value = {userInput.expectedReturn}
              onInput={onInput}
            // onInput={(e) => onExpectedReturn(e.target.value)}
            // value={onExpectedReturn}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            // placeholder="123"
             name="duration"
             value={userInput.duration}
            // onInput={(e) => onDuration(e.target.value)}
             onInput={onInput}
            
            // value={onDuration}
          />
        
        </p>
      </div>
    </div>
  );
};
export default UserInput; 
