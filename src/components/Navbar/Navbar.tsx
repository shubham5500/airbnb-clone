import React from 'react';
import Container from "../Container/Container";
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

function Navbar(props) {
    return (
        <div className="fixed w-full shadow-sm">
            <div className="py-4 border-[1px]">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <Logo/>
                        <Search/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
