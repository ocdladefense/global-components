/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import { interleave } from "../lib.js";
import BreadcrumbItem from "./BreadcrumbItem";
/* eslint-enable */

export default function Breadcrumbs({ items, separator }) {
  return (
    <section class="container mx-auto flex items-center border border-t-0 p-4 text-black lg:h-16">
      <ul class="flex flex-wrap items-center whitespace-pre">
        {interleave(
          items.map((item) => <BreadcrumbItem {...item} />),
          separator
        )}
      </ul>
    </section>
  );
}
