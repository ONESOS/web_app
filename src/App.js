import './css/rootCSS.css';
import {BrowserRouter as Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import JoinPage from "./component/JoinPage";
import LoginPage from "./component/LoginPage";

{/*TODO
    레이아웃 시발
    1. 메뉴아이콘 위치 css변경해야함 (우측 고정(반응형))
    2. 페이지 라우터 지정 및 구현
        2-1. 로그인 후 페이지
        2-2. 회원가입 페이지
*/}

function App() {
  return (
      <Routes>
        <div>
          <Navbar />
            <Route exact path="/join" component={JoinPage} />
            <Route exact path="/login" component={LoginPage} />
        </div>
      </Routes>
  );
}

export default App;
