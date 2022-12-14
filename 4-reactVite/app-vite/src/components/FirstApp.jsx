
// const newMessage =  {
//   message: 'Hola Felipe',
//   title: 'Mundo'
// };
// const getResult = () => {
//     return (
//         <>
//           Esto son { 1+1 } Mundos
//         </>
//       );
//     };
    import '../styles/global.css';
    import PropTypes from 'prop-types';

export const FirstApp = ( {title} ) => {
  // console.log(title);
if (!title){
  throw new Error ('El titulo no existe');
}

  return (
    <>
      {/* <h1> { getResult() }</h1> */}
      {/* <h1>{ newMessage.title }</h1> */}
      {/* <h1>{ JSON.stringify(newMessage) }</h1> nos permite mostrar todo el objeto*/}
      <h1>{ title }</h1>
      {/* <p>Esto es un subtitulo</p> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = { 
  title: 'No hay titulo'
}
