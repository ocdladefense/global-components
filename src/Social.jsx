/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Base_Element_Link from './Base_Content';
/* eslint-enable */

export default function Social({ type }) {
    // Default = 'facebook'
    const href =
        type === 'twitter'
            ? 'https://twitter.com/oregondefense'
            : 'https://facebook.com/OregonCriminalDefenseLawyersAssociation';
    const src =
        type === 'twitter'
            ? 'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-twitter-icon.png'
            : 'https://ocdla.org/wp-content/themes/wireframe/assets/images/default-facebook-icon.png';
    const alt = type === 'twitter' ? 'Twitter logo' : 'Facebook logo';

    return (
        <li>
            <Base_Element_Link
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
