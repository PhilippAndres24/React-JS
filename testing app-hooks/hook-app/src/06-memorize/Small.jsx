import { memo } from 'react';

export const Small = memo(( {value } ) => {
    console.log('me volvia a dibujar')
  return (
    <small> { value }</small>
  )
})
