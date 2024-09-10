/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";

export default function ContentRegion({ cols, children }) {
  return <section class={`columns-${cols}`}>{children}</section>;
}
