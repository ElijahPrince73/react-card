import BackgroundImage from './images/background.jpg'

const App = () => {
  return (
    <div className="container">
      <a href='https://www.neworleans.com/' className="card-container">
        <div className="card-image">
          <img src={BackgroundImage} alt="background"/>
        </div>
        <div className="card-content">
          <h3>New Orleans</h3>
          <p>New Orleans is world-renowned for its distictive music, Creole cuisine, unique dialects, and its annual celebrations and festivals, most notably Mardi Gras</p>
          <div className="card-button">
            Read More
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;
