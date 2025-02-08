import React from "react"
import NetworkStatus from "../../components/network-status/NetworkStatus"
import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Sales from "../../components/sales/Sales"

function Layout() {
  return (
    <>
    <NetworkStatus/>
    <Sales/>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default React.memo(Layout)