import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm mb-5" id="mainNav">
            <div class="container px-5">
                <a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Dont kill the bug'))}><i class="bi bi-bug-fill"></i></a>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li class="nav-item"><a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Home Sweet Home'))}><i class="bi bi-house-door-fill"></i></a></li>
                        <li class="nav-item"><a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Fire Offerts'))}><i class="bi bi-fire"></i></a></li>
                        <li class="nav-item"><a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Taking u to products'))}><i class="bi bi-lightning-charge-fill"></i></a></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
  )
}

export default Navbar