/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Breadcrumbs_Item from './Breadcrumbs_Item';
/* eslint-enable */

export default function Breadcrumbs({ items }) {
    return (
        <section class='flex items-center border border-t-0 p-4 text-black lg:h-16'>
            <ul class='flex flex-wrap items-center whitespace-pre'>
                {items.map((item, i) => {
                    const seperatorString =
                        i !== items.length - 1 ? ' / ' : ' ';

                    return (
                        <>
                            <Breadcrumbs_Item {...item} />
                            {seperatorString}
                        </>
                    );
                })}
            </ul>
        </section>
    );
}
