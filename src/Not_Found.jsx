/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Button from '@ocdla/global-components/src/Button';
/* eslint-enable */

export default function Not_Found({}) {
    return (
        <div class='flex flex-col items-center gap-4 bg-black p-32 text-white'>
            <h1 class='text-center text-7xl font-black tracking-tighter'>
                404
            </h1>
            <h6 class='text-2xl font-thin'>Something Went Wrong</h6>
            <a
                class='rounded-md border border-black bg-white p-4 font-bold text-black'
                href='/'>
                RETURN HOME
            </a>
        </div>
    );
}