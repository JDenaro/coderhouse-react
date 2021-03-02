import React from 'react'

export const NavBar = () => {
    return (
        <>
        <nav class="navbar navbar-dark bg-dark">
            <div className="container">
                <div>
                <a class="navbar-brand" href="#">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcgOS43NjF2LTQuNzYxYzAtMi43NjEtMi4yMzgtNS01LTUtMi43NjMgMC01IDIuMjM5LTUgNXY0Ljc2MWMtMS44MjcgMS40NjYtMyAzLjcxNC0zIDYuMjM5IDAgNC40MTggMy41ODIgOCA4IDhzOC0zLjU4MiA4LThjMC0yLjUyNS0xLjE3My00Ljc3My0zLTYuMjM5em0tOC00Ljc2MWMwLTEuNjU0IDEuMzQ2LTMgMy0zczMgMS4zNDYgMyAzdjMuNTg3Yy0uOTI3LS4zNzYtMS45MzgtLjU4Ny0zLS41ODdzLTIuMDczLjIxMS0zIC41ODd2LTMuNTg3em0zIDE3Yy0zLjMwOSAwLTYtMi42OTEtNi02czIuNjkxLTYgNi02IDYgMi42OTEgNiA2LTIuNjkxIDYtNiA2em0yLTZjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L3N2Zz4=" width="30" height="30" class="d-inline-block align-top" alt=""/>REACT WALLET</a>
                </div>
                <div>
                    <ul className="nav text-light">
                            <li className="nav-item">
                                <a class="nav-link text-light" href="#">NOSOTROS</a>
                            </li> 
                            <li className="nav-item">
                                <a class="nav-link text-light" href="#">SHOP</a>
                            </li>   
                            <li className="nav-item">
                                <a class="nav-link text-light" href="#">CONTACTO</a>
                            </li>       
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
