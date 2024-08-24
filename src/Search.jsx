/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { defaultButtonStyle } from '@ocdla/global-components/src/Defaults';
/* eslint-enable */

export default function Search({ placeholder }) {
    return (
        <li class='flex size-full justify-center'>
            <input
                class='size-full rounded-l-md border border-neutral-300 px-3 py-2 focus:border-neutral-200'
                type='search'
                placeholder={placeholder}
            />
            <button class={`${defaultButtonStyle} rounded-l-none`}>GO</button>
        </li>
    );
}
