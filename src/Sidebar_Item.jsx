/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import BaseElementLink from './Base_Content';
/* eslint-enable */

export default function Sidebar_Item({ href, label }) {
    return (
        <li>
            <BaseElementLink
                extraClasses='flex border-b px-4 py-2'
                href={href}
                label={label}
            />
        </li>
    );
}
