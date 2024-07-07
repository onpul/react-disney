import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <Detail />
        </Route>
        {/* Q. 와 이거 순서 반대로 했더니 페이지 전환이 안 돼서 시간 한참 잡아먹었네 */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
