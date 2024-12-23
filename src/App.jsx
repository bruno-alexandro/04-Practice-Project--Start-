import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learner & Master GitHub Actions a</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
