import React, { useState, useEffect } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import gsap from 'gsap';

import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

let tl = gsap.timeline()

const Header = ({history, dimensions}) => {
    const [menuState, setMenuState] = useState({ menuOpenned: false })

    useEffect(() => {

        // Fermer la nav quand on change de page
        history.listen(() => {
            setMenuState({menuOpenned: false})
        })



        if (menuState.menuOpenned === true) {
            // Run open animations
            tl.to('body', { duration: 0.01, css: { overflow: 'hidden' } })
            .to('.app', {
                duration: 1,
                // Condition en fonction de la taille de l'écran
                y: dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
                ease: 'expo.inOut'
            })
            .to('.hamburger-menu span', {
                duration: .6,
                delay: -1,
                scaleX: 0,
                transformOrigin: '50% 0%',
                ease: 'expo.inOut'
            })
            // On attrape un ID du SVG en particulier
            .to('#Path_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 5
                }
            })
            .to('#Path_2', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 20
                }
            })
            .to('#Line_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 18
                }
            })
            .to('#circle', {
                duration: .6,
                delay: -.8,
                css: {
                    strokeDashoffset: 0
                }
            })
            .to('.hamburger-menu-close', {
                duration: .6,
                delay: -.8,
                css: {
                    display: 'block'
                }
            })
        } else {
            // Run close menu animation
            tl.to('.app', {
                duration: 1,
                y: 0,
                ease: 'expo.inOut'
            })
            .to('#circle', {
                duration: .6,
                delay: -.6,
                css: {
                    strokeDashoffset: -193,
                    strokeDasharray: 227
                }
            })
            .to('#Path_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Path_2', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }
            })
            .to('#Line_1', {
                duration: .4,
                delay: -.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                }
            })
            .to('.hamburger-menu span', {
                duration: .6,
                delay: -.6,
                scaleX: 1,
                transformOrigin: '50% 0%',
                ease: 'expo.inOut'
            })
            .to(".hamburger-menu-close", {
                duration: 0,
                css: {
                    display: 'none'
                }
            })
            .to('body', {
                css: {
                    overflow: 'auto'
                }
            })
        }
    }, [menuState.menuOpenned, dimensions.width, dimensions.height, history])


    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to="/" exact>AGENCY.</NavLink>
                    </div>
                    <div className="nav-toggle">
                        <div onClick={() => setMenuState({menuOpenned: true})} className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div onClick={() => setMenuState({menuOpenned: false})} className="hamburger-menu-close">
                            <UpArrow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Header);
