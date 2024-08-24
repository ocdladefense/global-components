/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";
import Hyperlink from "./Hyperlink";

export default function Outline({ children }) {
  return (
    <aside class="hidden h-[87.5vh] overflow-y-scroll lg:block sticky top-0">
      {recursiveRender(children)}
    </aside>
  );
}

function recursiveRender(children) {
  return (
    <ul class="border-l ml-4">
      {children.map((child) => {
        return (
          <>
            <Hyperlink
              type="outline"
              href={"#" + child.href}
              label={child.content}
              id={child.href + "-outline-item"}
            >
              {child.content}
            </Hyperlink>
            {child.children.length > 0 ? recursiveRender(child.children) : ""}
          </>
        );
      })}
    </ul>
  );
}
