import './App.css';
import Button from './Button';
import { buttonSizes, buttonTypes } from './buttonInfo';
function App() {
  return (
    <div className="App">
      <Button label="Click Me!" />
      <Button
        label="Click Me!"
        type={buttonTypes.SECONDARY}
        size={buttonSizes.LARGE}
      />
      <Button
        label="Click Me!"
        type={buttonTypes.TERTIARY}
        size={buttonSizes.MEDIUM}
      />
      <Button onClickHandler={() => alert('You Clicked me')} />
      <Button disabled />
    </div>
  );
}

export default App;
