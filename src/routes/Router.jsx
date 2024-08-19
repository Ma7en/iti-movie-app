/* eslint-disable react/jsx-no-undef */
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Loader
import Loader from "../components/loader/Loader";

// lazy loading pages
const HomepageLayout = lazy(() =>
    import("../components/layouts/Homepagelayout")
);

const HomePage = lazy(() => import("../pages/home/HomePage"));

const WatchListPage = lazy(() =>
    import("../pages/WatchListPage/WatchListPage")
);

const MovieDetails = lazy(() => import("../pages/details/MovieDetails"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoute() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />

                            {/* watchlist page */}
                            <Route
                                path="/watchlist"
                                element={<WatchListPage />}
                            />

                            {/* Details pages */}
                            <Route
                                path="/movie/:id"
                                element={<MovieDetails />}
                            />
                        </Route>

                        {/* NotFound or Error */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}
export default AppRoute;
