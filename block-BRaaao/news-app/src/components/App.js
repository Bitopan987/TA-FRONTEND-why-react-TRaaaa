import Header from './Header';
import Hero from './Hero';
import Articles, { Article } from './Articles';
import Footer from './Footer';
function App(props) {
  return (
    <>
      <Header />
      <Article title="This is the article above Hero Section" />
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
