
import { Component } from 'react'
import { Container,Row,Col,Spinner,Alert } from 'react-bootstrap';



class MyCard extends Component {
    state = {
    movies : [],
    isLoading : true,
    isError : false,
    }
    showFilm = () => {
        fetch (
           ' https://www.omdbapi.com/?apikey=7d1f4fc7&s=harry%20potter'
        )
        .then ((res) => {
            if(res.ok) {
                console.log(res)
                return res.json()
            }else {
                throw new Error ('errore')
            }
            })
            .then((data) => {
                console.log('dati recuperati',data)
            
                this.setState({ movies:data,
                    isLoading : false,
               
            

                   
            })
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                isLoading : false,
                isError: true,
            })
        })

        }
        componentDidMount() {
            this.showFilm()
        }
        render () {
            return (
                <Container fluid className='bg.dark text light'>
            <h4> Treding Now</h4>
            <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-4'>
            {this.state.isLoading && (
                <div className='text-center mb-3'>
                    <Spinner animation='border' variant='danger'/>
                    </div>
            )}
            {this.state.isError && (<Alert variant='danger' className='text-center'>Error!</Alert>
            )}   
            {this.state.Search.map((movie) => {
                return (
                    <Col key={movie.imdbID} className='mb-2 text-center px-2'>
                    <div>
                        <img src={movie.Poster}  alt = {movie.Title}className='grow ' />
                        </div>    
                        </Col>
                         )
            })}
        </Row>
        </Container>
            )
        }
    }
    export default MyCard
    