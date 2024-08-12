/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Sidebar({ children }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>{children}</ul>
        </aside>
    );
}
