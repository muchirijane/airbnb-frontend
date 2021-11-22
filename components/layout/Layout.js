import GlobalStyles from '../../GlobalStyles/GlobalStyles'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Meta from './Meta'

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <GlobalStyles />
      <Meta pageTitle={pageTitle} />
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  )
}
