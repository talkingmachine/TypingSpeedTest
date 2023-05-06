import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./pages/start";
import { GetReady } from "./pages/getReady";
import { TypingTest } from "./pages/typingTest";
import { Finish } from "./pages/finish";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Start/>}
        />
        <Route
          path='/get-ready'
          element={<GetReady/>}
        />
        <Route
          path='/typing-test'
          element={<TypingTest/>}
        />
        <Route
          path='/finish'
          element={<Finish/>}
        />
      </Routes>
  </BrowserRouter>
  );
}

export {App};
