import './App.css';
import { Navbar, Button, CategoryMops } from './component';
import { cameraImg, chatImg, fireImg, headphoneImg, icon5Img, loopImg, noteImg, tapeImg } from './img';
import './scss/index.scss'


const App = () => {
  return (
    <div className="App" >
      <div>
        <Navbar />
        <Button textBtn={'open'} />
        <Button textBtn={'exit'} />
        <CategoryMops imgUrl={cameraImg} />
        <CategoryMops imgUrl={chatImg} />
        <CategoryMops imgUrl={fireImg} />
        <CategoryMops imgUrl={headphoneImg} />
        <CategoryMops imgUrl={noteImg} />
        <CategoryMops imgUrl={loopImg} />
        <CategoryMops imgUrl={tapeImg} />
        <CategoryMops imgUrl={icon5Img} />
      </div>
    </div>
  );
}

export default App;
