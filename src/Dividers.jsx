/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export const Divider_Desktop = () => (
    <li class='hidden text-neutral-300 lg:block'>|</li>
);

export const Divider_Mobile = () => {
    return (
        <li class='block size-full lg:hidden'>
            <hr />
        </li>
    );
};
