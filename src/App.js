import './App.css';
import myImage from "./images/logo512.png"

function App() {
  return (
    <div className="App">
<div style={{border:"solid 1px" , color: "black" , maxWidth:100 }} >
<h1 className="title red">Your name here</h1>
<br />
<img src={myImage} alt = "my pho" />
<br />
<img src="/logo192.png" alt=""/>
</div>
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>


    </div>
  );
}

export default App;
