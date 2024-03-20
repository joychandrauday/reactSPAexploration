import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './homepage.css'

const Homepage = () => {
    const navigation=useNavigation();
    // const location=useLocation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading"?
                <p>loading...</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Homepage;