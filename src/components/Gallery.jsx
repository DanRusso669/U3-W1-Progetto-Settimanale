import { Component } from "react";
import { Alert, Carousel, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { AspectRatio } from "react-bootstrap-icons";

class Gallery extends Component {
  state = {
    movieList: [],
    isLoading: true,
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
        this.setState({ isLoading: false });
        this.setState({ movieList: movieList.Search });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchedImg();
  }

  render() {
    return (
      <>
        {!this.state.isLoading & (this.state.movieList.length === 0) ? (
          <>
            <h4 className="sectionTitle mt-3">{this.props.query.toLowerCase()}</h4>
            <Alert variant="danger">Non è stato possibile caricare i film.</Alert>
          </>
        ) : (
          <>
            <h4 className="sectionTitle mt-3">{this.props.query.toLowerCase()} </h4>
          </>
        )}
        {this.state.isLoading && <Spinner animation="border" variant="secondary" className="my-2" />}

        <Row xs={1} sm={2} md={3} xl={6} className="gy-2 gx-1">
          {this.state.movieList.slice(0, 6).map(movie => (
            <Col className="mb-2 text-center px-1" key={movie.imdbID}>
              <Image src={movie.Poster} fluid style={{ aspectRatio: "2/3" }}></Image>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Gallery;
