/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import SidebarItemLeft from '@ocdla/global-components/src/SidebarItemLeft';
import SidebarItemRight from '@ocdla/global-components/src/SidebarItemRight';
/* eslint-enable */

export default function Sidebar({ type, items = [] }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>
                {(() => {
                    switch (type) {
                        case 'left':
                            return items.map(props => (
                                <SidebarItemLeft {...props} />
                            ));
                        case 'right':
                            return items.map(props => (
                                <SidebarItemRight {...props} />
                            ));
                    }
                })()}
            </ul>
        </aside>
    );
}
