import { Outlet } from "react-router-dom"
import MainHeader from '../components/MainHeader/MainHeader'

export default function RootLayout() {
    return <>
        <MainHeader/>
        <Outlet/>
    </>
}