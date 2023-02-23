import React from "react";
import { Routes, Route} from 'react-router-dom'
import Bg from "./components/Bg";


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/par',
            element: <Bg/>,
            id: 1
        }
    ]

return (
    <Routes>
        {PUBLIC_ROUTES.map(item => (
            <Route path={item.link} element={item.element} key={item.id}/>
        ))}

    </Routes>
  )
}


export default MainRoutes