import React from "react";

import Slide1 from "../img/slide-1.jpg";
import Slide2 from "../img/slide-2.jpg";
import Slide3 from "../img/slide-3.jpg";
import Slide4 from "../img/slide-4.jpg";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { eachSlide: `url(${Slide1})` },
        { eachSlide: `url(${Slide2})` },
        { eachSlide: `url(${Slide3})` },
        { eachSlide: `url(${Slide4})` }
      ],
      autoplay: false,
      active: 0,
      max: 0
    };
    this.state.max = this.state.slides.length;
  }
  mount() {}
  unmount() {}
  changeActiveSlide() {
    if (this.state.autoplay === true) {
      if (this.state.active === this.state.max - 1) {
        this.state.active = 0;
      } else {
      }
    }
  }
  render() {
    return <>Hello</>;
  }
}
