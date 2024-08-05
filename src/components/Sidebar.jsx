/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import SidebarItem from './SidebarItem';
import SectionEntry from './SectionEntry';
/* eslint-enable */

export default function Sidebar({ items }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>
                {items.map(item => (
                    // <SidebarItem {...item} />
                    <SectionEntry {...item}>
                        <p class={item.active ? 'text-white' : ''}>{item.text}</p>
                    </SectionEntry>
                ))}
            </ul>
        </aside>
    );
}
