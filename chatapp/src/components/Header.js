import React from 'react'
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {

    const onlineStatus = useOnlineStatus();
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
                            <li className="online-status">
                                Online Status:{onlineStatus ? "✅" : "🔴"}

                            </li>
                        </ul>
                    </nav>

                </div>

            </header>

        </div>
    )
}

export default Header;

