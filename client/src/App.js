// Analytics
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-2DWCKVD9WK');
  ReactGA.pageview('/');
  ReactGA.pageview('/contact');
  ReactGA.pageview('/design');
  ReactGA.pageview('/portfolio');
  ReactGA.pageview('/login');
  ReactGA.pageview('/store');
  ReactGA.pageview('/new-project');
  return <>Hello World</>;
}

export default App;
