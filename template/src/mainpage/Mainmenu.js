import DesktopMenu from "./DekstopMenu";
import MobileMenu from "./Mobilemenu";
import { useEffect } from "react";
import { useState } from "react";
import useWhenResize from "./UseWhenResize";

function Mainmenu() {

    const [isOpenMenu, setMenu] = useState(false);

    let currentWidth = useWhenResize();

    function handleSetMenu(value) {
        setMenu(value)
    }


    useEffect(() => {
        if (currentWidth <= 1024) {
            setMenu(false)
        }
    }, [currentWidth])

    function MenuRes() {
        if (currentWidth <= 1024) {
            return (
                <MobileMenu  setMenu={handleSetMenu} isOpenMenu={isOpenMenu} />
            )
        }
        else {
            return (
                <DesktopMenu setMenu={handleSetMenu} />
            )
        }
    }
 return (
    <MenuRes/>
 )
}

export default Mainmenu




 