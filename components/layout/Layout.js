import GlobalStyles from '../../GlobalStyles/GlobalStyles'
import Navbar from '../Navbar/Navbar'
import Meta from './meta'

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <GlobalStyles />
      <Meta pageTitle={pageTitle} />
      <Navbar />

      <main>{children}</main>
    </div>
  )
}
