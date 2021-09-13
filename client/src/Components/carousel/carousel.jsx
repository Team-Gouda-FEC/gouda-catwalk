import React from 'react';
import './carousel.css';



const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [length, setLength] = useState(children.length);
  useEffect(() => {
    setLength(children.length)
}, [children])

  const { children } = props;

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
              {/* You can alwas change the content of the button to other things */}
              <button className="left-arrow">
                  &lt;
              </button>
              <div className="carousel-content-wrapper">
                  { /*...*/ }
              </div>
              {/* You can alwas change the content of the button to other things */}
              <button className="right-arrow">
                  &gt;
              </button>
          </div>
        </div>
    )
}

export default Carousel