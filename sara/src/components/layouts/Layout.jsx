import Footer from '../footer/Footer'
import Header from '../header/Header'
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout