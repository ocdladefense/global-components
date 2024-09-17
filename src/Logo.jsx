/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ size, src }) {
    // Default = 'footer'
    const a = size ? 'flex px-4' : '';

    return (
            <a
                class={a}
                href='/'>
                <img
                    src={src}
                />
            </a>
  );
}
