import './style/App.css';
import Row from './components/Row'
import request from './components/requests'
import Banner from './components/Banner'
import Nav from './components/Nav'
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
      <Row title='Action' fetchUrl={request.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={request.fetchComedyMovies}/>
      <Row title='Documentary' fetchUrl={request.fetchDocumentaries}/>
      <Row title='Horror' fetchUrl={request.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={request.fetchRomanceMovies}/>
      
    </div>
  );
}

export default App;
