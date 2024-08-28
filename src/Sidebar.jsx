/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Sidebar({ children, id, sticky = false }) {
    let classList = `list-none hidden h-[87.5vh] overflow-y-scroll lg:block ${sticky ? 'sticky top-0' : ''}`;
    return (
        <aside
            id={id || null}
            class={classList}>
            {children}
        </aside>
    );
}
