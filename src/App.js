import './App.scss';
import {Route, Routes,} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import {useEffect, useState} from "react";
// import Loading from "./component/loading/loading.component";

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
                        <Route exact path="/about" element={<HomePage/>}/>
                        <Route exact path="/contact" element={<HomePage/>}/>
                    </Routes>
            {/*    )*/}
            {/*}*/}
        </main>
    );
}

export default App;
