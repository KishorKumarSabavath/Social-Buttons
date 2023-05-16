const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div class="social-buttons-container">
    <div class="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div class="buttons-container">
        <Button className="Like-button" buttonText="Like" />
        <Button className="Comment-button" buttonText="Comment" />
        <Button className="Share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
