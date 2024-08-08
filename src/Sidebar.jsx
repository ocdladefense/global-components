/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Sidebar_Item from '@ocdla/global-components/src/Sidebar_Item';
/* eslint-enable */

export default function Sidebar({ sidebarType, items }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>
                {items.map(item => (
                    <Sidebar_Item
                        sidebarType={sidebarType}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}
