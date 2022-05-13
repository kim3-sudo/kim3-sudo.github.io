import React from "react"
import useDarkMode from "use-dark-mode"

const DarkModeToggle = () => {
    const darkMode = useDarkMode(true)

    return (
        <div className="d-flex align-items-center">
            <div className="mx-3">
                <span className="main-bottom-tooltip d-flex">
                    <svg id="main-sunglasses-icon" className="main-social-svg" onClick={darkMode.disable} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24"><path d="M17.945 8c-1.139 0-2.377.129-3.395.491-2.283.828-2.791.838-5.102 0-1.016-.362-2.257-.491-3.393-.491-1.971 0-4.17.387-6.055.878v1.789c.848.255 1.068.627 1.203 1.493.381 2.443 1.256 4.84 5.068 4.84 3.037 0 4.051-2.259 4.723-4.345.34-1.06 1.662-1.087 2.008-.015.674 2.089 1.682 4.36 4.725 4.36 3.814 0 4.689-2.397 5.07-4.841.135-.866.355-1.237 1.203-1.493v-1.788c-1.887-.491-4.084-.878-6.055-.878zm-15.472 4.915c-.117-.357-.223-.724-.312-1.101-.352-1.473-.043-1.789.434-2.074.695-.418 1.973-.665 3.295-.732-2.437.554-3.474 1.117-3.417 3.907zm11.75 0c-.117-.357-.223-.724-.312-1.101-.352-1.473-.043-1.789.434-2.074.695-.418 1.973-.665 3.295-.732-2.437.554-3.474 1.117-3.417 3.907z"/></svg>
                    <svg id="main-sun-icon" className="main-social-svg" onClick={darkMode.enable} xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
                    <span className="main-bottom-tooltip-text d-sm-block d-none"><span id="main-dark-mode-tooltip"></span></span>
                </span>
            </div>
        </div>
    )
}

export default DarkModeToggle
