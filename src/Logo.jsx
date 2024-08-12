/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ type }) {
    // Default = 'footer'
    const li =
        type === 'navbar' ? 'px-4 size-full flex items-center text-white' : '';
    const div = type === 'navbar' ? 'flex items-center' : '';
    const img = type === 'navbar' ? '' : '-my-6';

    return (
        <li class={li}>
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
        </li>
    );
}
