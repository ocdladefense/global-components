/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Logo from './Logo';
import Navlink from './Navlink';
import { Divider_Mobile, Divider_Desktop } from './Dividers';
import Search from './Search';
import Profile from './Profile';
import Button from './Button';
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
                    <ul class='flex flex-col-reverse items-start gap-4 p-4 lg:flex-row lg:items-center lg:gap-2 lg:p-0'>
                        {/* <Search placeholder='Search' />
                        <Divider_Desktop /> */}
                        <ul class='flex size-full flex-row-reverse items-center gap-0 lg:flex-row lg:gap-2'>
                            <Profile
                                bg='bg-[#516490]'
                                label='G'
                            />
                            <Divider_Desktop />
                            <Button
                                href='/'
                                label='Give Feedback'
                            />
                        </ul>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
