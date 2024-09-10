/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";

export default function Legal({ className, year, association, children }) {
    return (
        <ul
            class={
                className ||
                "text-neutral-500 text-[0.625rem] font-thin leading-[0.75rem]"
            }>
            <li>
                ©{year} {association}
            </li>
            <li class="size-full text-wrap">{children || ""}</li>
        </ul>
    );
}
