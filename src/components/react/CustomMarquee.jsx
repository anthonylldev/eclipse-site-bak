import Marquee from "react-fast-marquee";

export const CustomMarquee = ({ children }) => {
  const css = {
    backgroundColor: '#5E3099',
    color: 'white',
    fontFamily: '\'Clash Display\', sans-serif',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }

  return (
    <Marquee speed={100} style={css}>
      {children}
    </Marquee>
  )
}

export default CustomMarquee;
