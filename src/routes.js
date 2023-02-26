import ScrollToTop from "components/ScrollToTop";
import CorpoDaPagina from "pages/CorpoDaPagina";
import Inicio from "pages/Inicio";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoDaPagina />}>
                    <Route index element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;