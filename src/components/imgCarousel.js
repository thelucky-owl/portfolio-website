import Carousel from 'react-bootstrap/Carousel';
export const ImgCarousel = ({imgSource})=>{
  console.log(imgSource[1])
      return (
        
        <Carousel className="img-carousel" interval={null}>
          {
             imgSource.map((imgSource,index)=>{
              console.log(imgSource[index])
              return(
                <Carousel.Item >
                  <div className="img-carousel-container">
                <img
                  className="img-carousel-img"
                  src={imgSource}
                  alt={"Slide number "+index}
                />
                </div>
              </Carousel.Item>
                  )
          })
          }
          {/* <Carousel.Item >
            <img
              className="img-carousel-img"
              src={imgSource[1]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="img-carousel-img"
              src={imgSource[2]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="img-carousel-img"
              src={imgSource[1]}
              alt="Third slide"
            />
            
          </Carousel.Item> */}
        </Carousel>
      );
}