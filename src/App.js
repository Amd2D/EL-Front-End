import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from './components/Card'

function App() {
    return (
            <AwesomeSlider
                fillParent={true}
                infinite={false}
                bullets={false}
            >
                <div className="homepage">
                    <header className="header">
                        <h1>
                            Welcome
                        </h1>
                    </header>
                    <body className="body">
                    <p>
                        project description goes here...
                    </p>
                    <p>
                        Browse items
                    </p>
                    <p>
                        Add new item
                    </p>
                    </body>
                </div>
                <div className={"itemContainer"}>
                    <Card/>
                </div>
                <div className={"itemContainer"}>
                    <Card/>
                </div>
            </AwesomeSlider>
  );
}

export default App;
