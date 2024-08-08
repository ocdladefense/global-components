/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { BaseElementLink } from './Base_Content';
/* eslint-enable */

export default function Social({ type }) {
    let href;
    let src;
    let alt;

    switch (type) {
        case 'facebook':
            href =
                'https://facebook.com/OregonCriminalDefenseLawyersAssociation';
            src =
                'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-facebook-icon.png';
            alt = 'Facebook logo';
            break;
        case 'twitter':
            href = 'https://twitter.com/oregondefense';
            src =
                'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-twitter-icon.png';
            alt = 'Twitter logo';
            break;
    }

    return (
        <li>
            <BaseElementLink
                classes='hover:opacity-[67.5%]'
                href={href}
                label={
                    <img
                        class='size-8'
                        src={src}
                        alt={alt}
                    />
                }
            />
        </li>
    );
}
