/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Search({ placeholder }) {
    return (
        <li>
            <input
                class='rounded-md border border-neutral-300 px-4 py-2 focus:border-neutral-200'
                type='search'
                placeholder={placeholder}
            />
        </li>
    );
}
