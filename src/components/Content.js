import { Carousel, Image } from "react-bootstrap"
import '../App.css'

const Content = () => {
  return (
    <>
      <Carousel className=" carousel w-100">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://picsum.photos/2000/1331?random=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://picsum.photos/2000/1331?random=2 "
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://picsum.photos/2000/1331?random=3"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
    </>
  )
}

export default Content