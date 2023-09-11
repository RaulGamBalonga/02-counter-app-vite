import PropTypes from 'prop-types';

/**
 *   if (!title) {
        throw new Error('el title no existe');
    }
 */



// const getResult = (a,b) => {
//     return a * b ;
// }


// const newMessage = {
//     message: 'Hola Mundo',
//     tittle: 'Fernando'
// }

/**
 * PROPS -propiedades que mandamos a la función , es un objeto que normalmente desestructuramos
 * 
 */

// eslint-disable-next-line react/prop-types
export  const FirstApp = ( { title, subTitle, name }) => {

    // console.log( props );
  

  return (
    <>
    <h1 data-testid='test-title'> { title} </h1>
    {/* <code> { JSON.stringify(newMessage) } </code> */}
    <p> {subTitle} </p>
    <p> {subTitle} </p>
    <p> { name } </p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name:'Raúl',
    subTitle: ' No hay subtítulo',
    title: ' No hay título'
}


