import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [MobileMenu , setMobileMenu] = useState(false)

  return (
    <div>
        <header className='header'>
            <div className="container d_flex">

                <div className="categories d_flex">
                <h4>
                    Kategória <i className='fa fa-chevron-down'></i>

                </h4>
                    <span className='fa-solid fa-border-all'></span>
                </div>

                <div className="navlink">
                    <ul className='nav'>
                        <li>
                            <Link to='/'>Kezdőlap</Link>
                        </li>

                        <li>
                            <Link to='/pages'>Rólunk</Link>
                        </li>

                        <li>
                            <Link to='/user'>Felhasználói fiók</Link>
                        </li>

                        <li>
                            <Link to='/vendor'>Szállítási fiók</Link>
                        </li>

                        <li>
                            <Link to='/track'>Rendelésem nyomonkövetése</Link>
                        </li>

                        <li>
                            <Link to='/contact'>Kapcsolat</Link>
                        </li>
                    </ul>

                    <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu? <i className='fas fa-times close home-bth'></i> : <i className='fas fa-bars open'></i>
                        }
                    </button>
                </div>

            </div>

        </header>
    </div>
  )
}

export default Navbar