/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Logo from './Logo';
import Navlink from './Navlink';
import { Divider_Mobile, Divider_Desktop } from './Dividers';
import Profile from './Profile';
import Feedback from './Feedback';
/* eslint-enable */

export default function Navbar() {
    return (
        <nav class='flex flex-col border border-0 border-b lg:h-16 lg:flex-row lg:border lg:border-t-0'>
            <ul class='flex size-full flex-col items-start lg:flex-row lg:items-center'>
                <li class='size-full lg:size-max'>
                    <ul class='flex flex-col items-center lg:flex-row'>
                        <Logo type='navbar' />
                        <Navlink
                            href='https://oregon.public.law/rules'
                            label='Oregon Administrative Rules'
                        />
                        <Navlink
                            active={true}
                            href='https://oregon.public.law/statutes'
                            label='Oregon Revised Statutes'
                        />
                    </ul>
                </li>
                <Divider_Mobile />
                <li class='size-full lg:ms-auto lg:size-max'>
                    <ul class='flex size-full flex-row-reverse items-center p-4 lg:flex-row lg:gap-2'>
                        {/* <li>
                    <search class='rounded-md border border-neutral-300 focus:border-neutral-200'>
                        <input
                            class='w-full px-3 py-2 text-black lg:rounded-lg'
                            type='search'
                            placeholder='Search'
                        />
                    </search>
                </li>
                <li class='hidden text-neutral-300 lg:block'>|</li> */}
                        <Profile
                            bg='bg-[#516490]'
                            label='G'
                        />
                        <Divider_Desktop />
                        <Feedback
                            href='/'
                            label='Give Feedback'
                        />
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
