import React from 'react'

const Header = () => {
    return (
        <div>
            <header class="header sticky sticky--top js-header">

                <div class="grid">

                    <nav class="navigation">
                        <ul class="navigation__list navigation__list--inline">
                            <li class="navigation__item"><a href="#" class="navigation__link navigation__link--is-active">Home</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">About Us</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Work</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Clients</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Contact</a></li>
                        </ul>
                    </nav>

                </div>

            </header>

        </div>
    )
}

export default Header