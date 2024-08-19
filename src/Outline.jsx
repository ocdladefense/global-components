/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";
import Base_Element_Link from "./Base_Content";

export default function Outline({ children }) {
  return (
    <aside class="hidden h-[87.5vh] overflow-y-scroll lg:block sticky top-0">
      {recursiveRender(children)}
    </aside>
  );
}

function recursiveRender(children) {
  const level = children[0].level - 1;
  const ulClass = "border-l ml-" + level * 2;
  return (
    <ul class={ulClass}>
      {children.map((child) => {
        return (
          <>
            <Base_Element_Link
              extraClasses="flex px-4 py-2"
              href={"#" + child.href}
              label={child.content}
              id={child.href + "-outline-item"}
            >
              {child.content}
            </Base_Element_Link>
            {child.children.length > 0 ? recursiveRender(child.children) : ""}
          </>
        );
      })}
    </ul>
  );
}
