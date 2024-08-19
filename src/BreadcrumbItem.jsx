/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import Hyperlink from "./Hyperlink";
/* eslint-enable */

export default function BreadcrumbItem({ text, href, type }) {
  return (
    <li>
      <Hyperlink text={text} href={href} type={type} />
    </li>
  );
}
