import Carousel from "nuka-carousel";
import React, { Component } from "react";
import styled from "styled-components";

interface ImagesProp {
  images: string[];
}
class ImageView extends Component<ImagesProp> {
  render(): JSX.Element {
    const { images } = this.props;

    return (
      <SliderFrame>
        <Carousel
          width="100%"
          defaultControlsConfig={{
            nextButtonStyle: { display: "none" },
            prevButtonStyle: { display: "none" },
            pagingDotsStyle: { fill: "white" },
          }}
        >
          {images.map((image, i) => (
            <Slide key={i}>
              <img src={image} style={{ width: "100%", height: "auto" }} />
            </Slide>
          ))}
        </Carousel>
      </SliderFrame>
    );
  }
}

export default ImageView;

const SliderFrame = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
`;

const Slide = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  text-align: center;
`;
