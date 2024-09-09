/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";

export default function Legal({ className, copyright, children }) {
  return (
    <ul class={className}>
      <li>{copyright || ""}</li>
      <li class="size-full text-wrap">{children || ""}</li>
    </ul>
  );
}
