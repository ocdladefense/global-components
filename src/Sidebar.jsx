/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
/* eslint-enable */

export default function Sidebar({ component: Component, items }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>
                {items.map(item => (
                    <Component {...item} />
                ))}
            </ul>
        </aside>
    );
}
