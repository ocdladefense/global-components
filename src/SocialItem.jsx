/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import Link from "./Defaults";
/* eslint-enable */
// import abc from './images';
import logo_facebook from "./images/logo_facebook.png";
import logo_twitter from "./images/logo_twitter.png";
import logo_youtube from "./images/logo_youtube.png";
import fa_facebook from "./images/fa_facebook.png";
import fa_instagram from "./images/fa_instagram.png";
import fa_instagram_solid from "./images/fa_instagram_solid.png";

export default function SocialItem({ type, handle, src }) {
    // require.context('./', true, /\.(svg|png)$/gim);

    let domain;
    let alt;

    handle = handle || "";

    // console.log(abc);

    switch (type) {
        case "facebook":
        case "meta":
            domain = "https://facebook.com/";
            src = src || logo_facebook;
            alt = "Facebook logo";
            break;
        case "fa-facebook":
        case "fa-meta":
            domain = "https://facebook.com/";
            src = src || fa_facebook;
            alt = "Facebook logo";
            break;
        case "instagram":
        case "fa-instagram":
            domain = "https://instagram.com/";
            src = src || fa_instagram;
            alt = "Instagram logo";
            break;
        case "instagram-solid":
            domain = "https://instagram.com/";
            src = src || fa_instagram_solid;
            alt = "Instagram logo";
            break;
        case "twitter":
        case "x":
            domain = "https://x.com/";
            src = src || logo_twitter;
            alt = "Twitter logo";
            break;
        case "youtube":
            domain = "https://youtube.com/@";
            // Temp
            src = src || logo_youtube;
            alt = "YouTube logo";
            break;
        case "reddit":
            domain = "https://reddit.com/r/";
            // TBD
            src = src || logo_twitter;
            alt = "Reddit logo";
            break;
    }

    const href = domain + handle;
    // const src = './images/' + type + '.png';

    return (
        <li>
            <Link
                classes="hover:opacity-[67.5%]"
                href={href}>
                <img
                    class="w-8"
                    src={src}
                    alt={alt}
                />
            </Link>
        </li>
    );
}
