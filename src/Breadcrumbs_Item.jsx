/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Base_Element_Link from './Base_Content';
/* eslint-enable */

export default function Breadcrumbs_Item({ href, label }) {
    return (
        <li>
            <Base_Element_Link
                href={href}
                label={label}
            />
        </li>
    );
}
