import './App.css';
import Header from './Header.js';
import ImgSec from './ImageSection.js';
import Recipe from './Recipe.js';
import IngredientList from './IngredientList.js';
import Profile from './Profile.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <ImgSec />
      <Recipe />
      <IngredientList />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
