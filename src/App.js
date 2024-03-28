//項目的根組件
//被index.js引入->public/index.html渲染
import './assets/sass/App.scss'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

import HomePage from './pages/Home';
import Comment from './pages/Comment';
import Nopage from './pages/Nopage';

const router=createBrowserRouter([
  {path:"/",element:<HomePage/>},
  {path:"/comment",element:<Comment/>},
  {path:"/nopage",element:<Nopage/>}
]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;