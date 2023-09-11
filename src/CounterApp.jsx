import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter( counter + 1 );
    // c valor nuevo del counter , una funcion que regrese el nuevo valor del counter
    setCounter((c) => c + 1);
  };

  const handleSub = () => {
    // setCounter( counter + 1 );
    // c valor nuevo del counter , una funcion que regrese el nuevo valor del counter
    setCounter( counter - 1);
  };
  const handleReset = () => {
    // setCounter( counter + 1 );
    // c valor nuevo del counter , una funcion que regrese el nuevo valor del counter
    setCounter( value);
  };

  return (
    <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>

        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSub}> -1 </button>
        <button onClick={handleReset}> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
