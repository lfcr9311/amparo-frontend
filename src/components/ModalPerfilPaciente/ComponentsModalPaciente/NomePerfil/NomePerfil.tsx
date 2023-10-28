interface NomeProps {
  name: string;
}
const nameStyle = {
  fontFamily: 'Poppins',
  fontSize: '25px',
  fontWeight: 600,
  lineHeight: '38px',
};


export function Nome({ name }: NomeProps) {
  return (

    <p className="name" style={nameStyle}>{name}</p>
  );
}
