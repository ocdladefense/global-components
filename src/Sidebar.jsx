/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";

export default function Sidebar({ id, children }) {
  return (
    <aside class="hidden h-[87.5vh] overflow-y-scroll lg:block sticky top-0">
      <ul id={id || null}>{children}</ul>
    </aside>
  );
}
