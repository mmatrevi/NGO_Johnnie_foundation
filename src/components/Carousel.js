import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="home__image"
                src="https://assets.change.org/photos/1/aa/eh/BKAaEhkJUuQignO-800x450-noPad.jpg?1522768645"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="home__image"
                src="https://files.globalgiving.org/pfil/25359/pict_large.jpg?m=1476100454000"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="home__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8Jqx-o4DX4by-aBYi1TjhrK24HmPdXSqKA&usqp=CAU"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
