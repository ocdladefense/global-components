/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Dropdown from './Dropdown';
/* eslint-enable */

export default function Profile({ bg, label }) {
    return (
        <li class='group relative'>
            {/* prettier-ignore */}
            <button class={`${bg ? `${bg} ` : ''}peer flex h-[34px] w-[34px] items-center justify-center rounded-full p-2 text-white hover:opacity-[67.5%] group-focus-within:opacity-[67.5%]`}>
                {label}
            </button>
            <ul class='absolute -left-full top-full z-10 mt-[15px] hidden -translate-x-1/2 flex-col text-nowrap shadow group-focus-within:flex lg:left-1/2'>
                <Dropdown
                    href='https://oregon.public.law/users/sign_in'
                    label='Login'
                />
            </ul>
        </li>
    );
}
