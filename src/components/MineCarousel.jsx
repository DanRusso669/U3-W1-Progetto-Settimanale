import { Component } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

class MineCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 1500,
      responsive: [
        {
          breakpoint: 1554,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1154,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {this.props.list.map(movie => (
            <div key={movie.imdbID} className="slickItem">
              <Image src={movie.Poster} alt={movie.Title} fluid style={{ aspectRatio: "2/3" }} className="posters" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MineCarousel;
