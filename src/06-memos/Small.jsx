import { memo } from "react"

export const Small = memo(({ value }) => { // Memorizar el componente que se esta renderizando
  console.log('Small dibujado')
  return (
    <div>{value}</div>
  );
});
