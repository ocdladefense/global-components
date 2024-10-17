/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navigation from "./navigation/Navigation";



export default function Header({navItems, logo, logoWidth, logoHeight}) {
    return (
        <header class="w-full mb-0 p-[10px] sticky top-0 bg-wb-black z-50">
            <img style="inline-block vertical-align:middle;" class="inline-block" width={logoWidth} height={logoHeight} src={logo} />
            <Navigation routes={navItems} />
        </header>
    );
}
