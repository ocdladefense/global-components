/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { baseStyleLink } from './Base_Content';
/* eslint-enable */

export default function Breadcrumbs_Item({ href, label }) {
    return (
        <li>
            <a
                class={baseStyleLink}
                href={href || null}>
                {label}
            </a>
        </li>
    );
}
