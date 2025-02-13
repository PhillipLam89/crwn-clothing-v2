import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import './nav.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
         <Link to='/' className="logo-container">
          <CrwnLogo className="logo" />
         </Link>

         <div className="nav-links-container">
           <Link className="nav-link" to='/shop'>
                SHOP
           </Link>
           <Link className="nav-link" to='/signin'>
                SIGN IN
           </Link>
         </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
