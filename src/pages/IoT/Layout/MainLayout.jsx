import Header from "../componentsIoT/Header"
import Footer from "../componentsIoT/FooterIoT"

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
