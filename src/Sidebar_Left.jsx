/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import ItemPage from './ItemPage';
/* eslint-enable */

export default function Sidebar_Left({ items }) {
    return (
        <aside class='hidden h-[87.5vh] overflow-scroll border-x lg:block'>
            <ul>
                {items.map((item) => <ItemPage {...item} />)}
            </ul>
        </aside>
    );
}
