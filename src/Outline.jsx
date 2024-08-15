/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";
import Sidebar_Item from "@ocdla/global-components/src/Sidebar_Item";

export default function Outline({ children }) {
  return (
    <aside class="hidden h-[87.5vh] overflow-scroll lg:block sticky top-0">
      {recursiveRender(children)}
    </aside>
  );
}

function recursiveRender(children) {
  return (
    <ul>
      {children.map((child) => {
        return (
          <>
            <Sidebar_Item
              href={"#" + child.href}
              label={child.content}
              id={child.href + "-outline-item"}
            />
            {child.children.length > 0 ? recursiveRender(child.children) : ""}
          </>
        );
      })}
    </ul>
  );
}
