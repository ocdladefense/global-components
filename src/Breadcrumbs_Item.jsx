/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import BaseElementLink from './Base_Content';
/* eslint-enable */

export default function Breadcrumbs_Item({ href, label }) {
    return (
        <li>
            <BaseElementLink
                href={href}
                label={label}
            />
        </li>
    );
}
