import PropTypes from "prop-types";
import { useState } from "react";

export const DemoApp = ({ value }) => {

    const [ counter, setCounter] = useState(value)

    const handleAdd = (  ) => {
        setCounter( counter + 1)
    }
    const handleSub = (  ) => {
        setCounter( counter - 1)
    }
    const handleRes = (  ) => {
        setCounter( value )
    }
 
  return (
    <>
      <h1>DemoApp</h1>
      <h2>{ counter }</h2>

    <button onClick={ handleAdd } > +1 </button>
    <button onClick={ handleSub } > -1 </button>
    <button onClick={ handleRes } > Reset </button>

    </>
  );
};

DemoApp.propTypes = {
    value: PropTypes.number.isRequired
}
