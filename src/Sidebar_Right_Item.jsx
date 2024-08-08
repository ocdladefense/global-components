/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Hyperlink from './Hyperlink';
/* eslint-enable */

export default function Sidebar_Right_Item({ type, href, label }) {
    return (
        <li>
            <Hyperlink
                type={type}
                href={href}
                body={label}
            />
        </li>
    );
}
