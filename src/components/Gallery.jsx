import { Component } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movieList: [],
  };

  fetchedImg = () => {
    fetch(` https://www.omdbapi.com/?s=${this.props.query}&apikey=13061775&type=movie`, {})
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella fetch.");
        }
      })
      .then(movieList => {
        console.log(movieList);
        this.setState({ movieList: movieList.Search });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchedImg();
  }

  render() {
    return (
      <>
        <h4 className="sectionTitle">{this.props.query.toLowerCase()}</h4>

        <Row xs={1} sm={2} md={3} lg={4} xl={6} className="gy-2 gx-1">
          {this.state.movieList.slice(0, 6).map(movie => (
            <Col className="mb-2 text-center px-1" key={movie.imdbID}>
              <Image src={movie.Poster} fluid></Image>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Gallery;
