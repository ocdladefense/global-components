/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Hamburger from "./Hamburger";

export default function Navigation({routes}) {



    let top = routes.map(item => {
        let phoneDisplay = !!item.hidden ? "hidden phone:hidden tablet:inline-block" : "phone:inline-block";
        return (
            <li class={`hidden ${phoneDisplay} p-2`}>
                <a href={item.url}>
                    <button class={`font-marketing text-base subpixel-antialiased hover:text-wb-cordovan`}>{item.label}</button>
                </a>
            </li>
        );
    });


    let all = routes.map(item => {
        // let phoneDisplay = !!item.hidden ? "hidden phone:hidden tablet:inline-block" : "phone:inline-block";
        return (
            <li class="p-2 text-center">
                <a href={item.url}>
                    <button class="text-center font-marketing text-base subpixel-antialiased hover:text-wb-cordovan">{item.label}</button>
                </a>
            </li>
        );
    });

    return (
        <nav class="tablet:px-8">


            <ul class="inline-block">

                <li style="vertical-align:middle;" class="inline-block p-2">
                    <a href="/">
                        <img style="inline-block vertical-align:middle;" width="30" height="30" src="../images/logos/logo.svg" />
                    </a>
                </li>

                {top}

            </ul>



            <Hamburger />


            <ul id="mobile-menu" class="block hidden min-h-[100vh] pt-[15vh]">


                {all}

            </ul>


        </nav>
    );
}
