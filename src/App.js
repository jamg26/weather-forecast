import Navigation from './Components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, Home, Weather } from './Pages';
import { getScreenResolution } from './Helpers/getScreenResolution';


const resolution = getScreenResolution();

function App() {
    const router = createBrowserRouter([
        { path: '/', element: <Landing /> },
        { path: '/home', element: <Home /> },
        { path: '/weather/:city', element: <Weather /> },
    ]);


    return (
        <div>
            <Navigation />
            <div style={styles.body}>
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;

const styles = {
    body: {
        margin: resolution.width > 768 ? '10% 20%' : '10% 5%',
    },
};
