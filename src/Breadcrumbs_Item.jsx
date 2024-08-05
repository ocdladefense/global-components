/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Hyperlink from './Hyperlink';
/* eslint-enable */

export default function Breadcrumbs_Item({ type, href, body }) {
    return (
        <li>
            <Hyperlink
                type={type}
                href={href}
                body={body}
            />
        </li>
    );
}