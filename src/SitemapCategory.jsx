/** @jsx vNode */
import { vNode } from "@ocdla/view";
import Link from "@ocdla/global-components/src/Defaults";

// <li class="size-full"> This was wrapping the entire return. We may need to keep size-full when using this.
// [{title: "SERVICES", links: [{href="/", label: "Membership Directory"}, {} ]}, {}]
export default function SitemapCategory({ title, path, labels, hrefs }) {
    // Split our labels and hrefs into arrays
    labels = labels.split(",");
    hrefs = hrefs.replace(" ", "").split(",");

    // Remove trailing '/' if there is one.
    path = path.at(-1) == "/" ? path.slice(0, -1) : path;
    return (
        <ul class="flex flex-col gap-8 text-nowrap text-[#516490] lg:flex-row lg:gap-16">
            <li>
                <ul class="flex flex-col gap-1">
                    {/* Category title */}
                    <li>
                        <p class="text-base font-bold">
                            <Link href="{path}">{title}</Link>
                        </p>
                    </li>
                    {/* Links in each category */}
                    {hrefs.map((href, i) => (
                        <li>
                            <Link href={href[0] == "/" ? path + href : href}>
                                {labels[i].trim()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}
