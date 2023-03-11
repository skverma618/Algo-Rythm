import "./App.css";
import Graph from "./Components/Graph/Home/Home";
import Sorting from "./Components/Sorting/Home/Home";
import Sudoku from "./Components/Sudoku/Home/Home";
import Index from "./Components/Index/Index";
import Nqueens from "./Components/Nqueens/Home/Home";
import SegmentTree from "./Components/SegmentTrees/Home/Home";
// import Nqueens from "./Components/Nqueens/Home/Home";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<Index></Index>}></Route>
                    <Route
                        path="/graph"
                        exact
                        element={<Graph></Graph>}
                    ></Route>
                    <Route
                        path="/sorting"
                        exact
                        element={<Sorting></Sorting>}
                    ></Route>
                    <Route
                        path="/sudoku"
                        exact
                        element={<Sudoku></Sudoku>}
                    ></Route>
                    <Route
                        path="/nqueens"
                        exact
                        element={<Nqueens></Nqueens>}
                    ></Route>
                    <Route
                        path="/segment"
                        exact
                        element={<SegmentTree></SegmentTree>}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
