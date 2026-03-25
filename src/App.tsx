import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Vita } from "./Vita";
import { Media } from "./Media";
import { Contact } from "./Contact";
import { Menu } from "./components/Menu";
import { Body } from "./components/Body";

export const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Body>
                <Routes>
                    <Route path='/vita' element={<Vita />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </Body>
        </BrowserRouter>
    )
}
