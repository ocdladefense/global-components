/** @jsx vNode */
import { vNode } from "@ocdla/view";
import Link from "@ocdla/global-components/src/Defaults";

// <li class="size-full"> This was wrapping the entire return. We may need to keep size-full when using this.
// [{title: "SERVICES", links: [{href="/", label: "Membership Directory"}, {} ]}, {}]
export default function Sitemap({ categories }) {
    return (
        <ul class="flex flex-col gap-8 text-nowrap text-[#516490] lg:flex-row lg:gap-16">
            {/* Categories */}
            {categories.map(category => (
                <li>
                    <ul class="flex flex-col gap-1">
                        {/* Category title */}
                        <li>
                            <p class="text-base font-bold">{category.title}</p>
                        </li>
                        {/* Links in each category */}
                        {category.links.map(link => (
                            <li>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
