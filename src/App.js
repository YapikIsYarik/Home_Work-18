
import './App.css';
import Posts from "./Components/Posts/posts";
import ANAKIN_IMAGE from './assets/Anakin.jpg'

function App() {
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
    const posts = [
        {
            id: 1,
            author: {
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader",
            },
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date: "28 лютого"
        },



    ]

  return (

    <div className="App">
        <div className="wrapper">
            <div className="container">
                {
                    posts.map((post) => <Posts data = {post} key={post.id}/> )
                }

            </div>
        </div>

    </div>
  );
}

export default App;
