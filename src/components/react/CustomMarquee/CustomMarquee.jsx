import './CustomMarquee.scss'
import Marquee from "react-fast-marquee";

export const CustomMarquee = ({ children }) => {
  return (
    <div className={'marquee-container'}>
      <Marquee speed={200}>
        <div className="marquee-text">
          {children}
        </div>
      </Marquee>
    </div>
  )
}

export default CustomMarquee;
