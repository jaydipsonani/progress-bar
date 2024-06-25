import './App.css';
import Horizontalbar from './component/Horizontalbar';
// import Progressbar from './component/Progressbar';  
// import FullProgressBar from './component/FullProgressBar';
// import Htmltojpg from './Htmltojpg';
// import RcProgress from './component/Rcprogress';
// import Progress from './component/Progress';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Progress /> */}
        {/* <Htmltojpg /> */}
        {/* <FullProgressBar /> */}
        {/* <Progressbar /> */}
        <div style={{ textAlign: "center" }}>
          <Horizontalbar />
        </div>
        {/* <RcProgress /> */}
      </div>
    </>
  );
}

export default App;
