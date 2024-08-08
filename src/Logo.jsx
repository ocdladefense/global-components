/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ type }) {
    let div;
    let img;

    switch (type) {
        case 'navbar':
            div = 'flex items-center';
            img = '';
            break;
        case 'footer':
            div = '';
            img = '-my-6';
            break;
    }
    return (
        <a
            class='-m-4 p-4 lg:py-8'
            href='https://ocdla.org'>
            <div class={div || null}>
                <img
                    class={`${img ? `${img} ` : ''}h-16`}
                    src='https://ocdla.org/wp-content/uploads/2019/10/cropped-ocdla-logo.png'
                />
            </div>
        </a>
    );
}
