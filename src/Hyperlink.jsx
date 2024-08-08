/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Hyperlink({ type, extraClasses, href, body }) {
    let classes;

    switch (type) {
        case 'navbar-link':
            classes =
                'text-nowrap text-neutral-500 hover:opacity-[67.5%] hover:underline hover:underline-offset-2 -ms-4 lg:m-0 px-4 py-8';
            break;
        case 'navbar-dropdown':
            classes =
                'border border-t-0 hover:border-neutral-200 bg-neutral-50 px-12 py-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600';
            break;
        case 'navbar-button-feedback':
            classes =
                'bg-neutral-50 hover:bg-transparent text-neutral-500 hover:text-neutral-400 border border-neutral-300 hover:border-neutral-200 px-4 py-2 rounded-md';
            break;
        case 'body-button':
            classes =
                'border border-blue-600 hover:opacity-[67.5%] text-blue-600 px-4 py-2 rounded-md contrast-[0] saturate-0';
            break;
    }

    return (
        <a
            class={`${classes ?? ''}${extraClasses ?? ''}`}
            href={href || null}>
            {body}
        </a>
    );
}
