/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Breadcrumbs_Item from './Breadcrumbs_Item';
/* eslint-enable */

export default function Breadcrumbs({ crumbs = [] }) {
    return (
        <section class='flex items-center border border-t-0 p-4 text-black lg:h-16'>
            <ul class='flex flex-wrap items-center whitespace-pre'>
                {crumbs.map((crumb, i) => {
                    const seperatorString =
                        i !== crumbs.length - 1 ? ' / ' : ' ';

                    return (
                        <>
                            <Breadcrumbs_Item {...crumb} />
                            {seperatorString}
                        </>
                    );
                })}
            </ul>
        </section>
    );
}
