import "./App.css";
import Graph from "./Components/Graph/Home/Home";
import Sorting from "./Components/Sorting/Home/Home";
import Sudoku from "./Components/Sudoku/Home/Home";
import Index from "./Components/Index/Index";
import Nqueens from "./Components/Nqueens/Home/Home";
import SegmentTree from "./Components/SegmentTrees/Home/Home";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="main-container">
                    <Routes>
                        <Route path="/" exact element={
                            <div className="page-transition">
                                <Index />
                            </div>
                        } />
                        <Route path="/graph" exact element={
                            <div className="page-transition">
                                <Graph />
                            </div>
                        } />
                        <Route path="/sorting" exact element={
                            <div className="page-transition">
                                <Sorting />
                            </div>
                        } />
                        <Route path="/sudoku" exact element={
                            <div className="page-transition">
                                <Sudoku />
                            </div>
                        } />
                        <Route path="/nqueens" exact element={
                            <div className="page-transition">
                                <Nqueens />
                            </div>
                        } />
                        <Route path="/segment" exact element={
                            <div className="page-transition">
                                <SegmentTree />
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
