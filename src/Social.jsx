/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Base_Element_Link from './Base_Content';
// import abc from './icons';
import twitter from './icons/twitter.png';
import facebook from './icons/facebook.png';
/* eslint-enable */

export default function Social({ type, handle, src }) {
    // require.context('./', true, /\.(svg|png)$/gim);

    let domain;

    handle = handle || '';

    // console.log(abc);

    switch (type) {
        case 'twitter':
        case 'x':
            domain = 'https://x.com/';
            src = src || twitter;
            break;
        case 'facebook':
        case 'meta':
            domain = 'https://facebook.com/';
            src = src || facebook;
            break;
        case 'youtube':
            domain = 'https://youtube.com/loremipsumloremipsum';
            domain = 'https://youtube.com/@abc';
            break;
        case 'reddit':
            domain = 'https://reddit.com/r/';
            break;
    }

    // const src =
    //     type === 'twitter'
    //         ? 'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-twitter-icon.png'
    //         : 'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-facebook-icon.png';
    const alt = type === 'twitter' ? 'Twitter logo' : 'Facebook logo';

    // r/abc
    const href = domain + handle;
    // const src = './icons/' + type + '.png';

    return (
        <li>
            <Base_Element_Link
                classes='hover:opacity-[67.5%]'
                href={href}
                label={
                    <img
                        class='size-8'
                        // src={src}
                        src={src}
                        alt={alt}
                    />
                }
            />
        </li>
    );
}
