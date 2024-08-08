/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Sidebar({ component: Component, items }) {
    /* eslint-enable */
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
