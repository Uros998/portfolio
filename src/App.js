import './App.scss';
import {Route, Routes,} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import {useEffect, useState} from "react";
// import Loading from "./component/loading/loading.component";
import IsumPage from "./pages/isum-page/isum-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import IstPage from "./pages/ist-page/ist-page.component";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 5500)
    }, [])


    return (
        <main>
            {/*{*/}
            {/*    loading ? (*/}
            {/*        <div className='loader'>*/}
            {/*            <Loading/>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="/isum" element={<IsumPage/>}/>
                        <Route exact path="/ist-hours" element={<IstPage/>}/>
                        <Route exact path="/contact" element={<HomePage/>}/>
                        <Route exact path="/about" element={<AboutPage/>}/>
                    </Routes>
            {/*    )*/}
            {/*}*/}
        </main>
    );
}

export default App;
