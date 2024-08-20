/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Sidebar_Item_Left from '@ocdla/global-components/src/Sidebar_Item_Left';
import Sidebar_Item_Right from '@ocdla/global-components/src/Sidebar_Item_Right';
/* eslint-enable */

export default function Sidebar({ type, items }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll lg:block'>
            <ul>
                {(() => {
                    switch (type) {
                        case 'left':
                            return items.map(props => (
                                <Sidebar_Item_Left {...props} />
                            ));
                        case 'right':
                            return items.map(props => (
                                <Sidebar_Item_Right {...props} />
                            ));
                    }
                })()}
            </ul>
        </aside>
    );
}
