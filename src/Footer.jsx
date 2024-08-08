/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { baseStyleLink, BaseElementLink } from './Base_Content';
import Logo from './Logo';
import Social from './Social';
/* eslint-enable */

export default function Footer({
    showFacebook,
    showTwitter,
    useGoogleMapsIFrame
}) {
    return (
        <footer class='container mx-auto border border-b-0 p-4 pb-16 lg:p-8 lg:pb-32'>
            {/* Resources */}
            <ul class='flex flex-col gap-4 text-nowrap lg:gap-8'>
                <li>
                    {/* Organization */}
                    <ul class='flex flex-col gap-1'>
                        {/* Brand + Social */}
                        <li>
                            <ul class='flex items-center gap-1'>
                                <li>
                                    <Logo type='footer' />
                                </li>
                                {showFacebook ? (
                                    <Social
                                        show={showFacebook}
                                        type='facebook'
                                    />
                                ) : (
                                    <></>
                                )}
                                {showTwitter ? (
                                    <Social
                                        show={showTwitter}
                                        type='twitter'
                                    />
                                ) : (
                                    <></>
                                )}
                            </ul>
                        </li>
                        {/* Copyright */}
                        <li>
                            <ul class='text-[0.625rem] font-thin leading-[0.75rem]'>
                                <li>
                                    © 2024 Oregon Criminal Defense Lawyers
                                    Association
                                </li>
                                <li class='text-wrap'>
                                    Oregon Criminal Defense Lawyers Association
                                    is a 501(c)(3) nonprofit educational
                                    association. Contributions to OCDLA may be
                                    tax deductible - check with your tax
                                    advisor. Electronic downloads are for the
                                    sole use of the purchasing member. Files may
                                    not be distributed to others.
                                </li>
                            </ul>
                        </li>
                        {/* Contact */}
                        <li>
                            <ul class='text-neutral-300'>
                                <BaseElementLink
                                    classes={baseStyleLink}
                                    href='https://ocdla.org'
                                    label='ocdla.org'
                                />{' '}
                                {!useGoogleMapsIFrame ? (
                                    <>
                                        |{' '}
                                        <BaseElementLink
                                            classes={baseStyleLink}
                                            href='https://maps.app.goo.gl/7dCYKBEyJbmo8tzS7'
                                            label='101 East 14th Ave, Eugene, OR 97401 '
                                        />{' '}
                                    </>
                                ) : (
                                    <></>
                                )}
                                |{' '}
                                <BaseElementLink
                                    classes={baseStyleLink}
                                    href='mailto:info@ocdla.org'
                                    label='info@ocdla.org'
                                />{' '}
                                |{' '}
                                <BaseElementLink
                                    classes={baseStyleLink}
                                    href='tel:+15416868716'
                                    label='(+1) 541-686-8716'
                                />
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class='flex flex-col gap-1'>
                        <li>
                            <strong>Services</strong>
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='https://pubs.ocdla.org/directory/members'
                                label='Membership Directory'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='https://pubs.ocdla.org/directory/experts'
                                label='Expert Directory'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='/'
                                label='Online store'
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class='flex flex-col gap-1'>
                        <li>
                            <strong>Research</strong>
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='https://pubs.ocdla.org/car/list'
                                label='Research Criminal Appellate Review'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='https://lod.ocdla.org/'
                                label='Library of Defense'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='https://lod.ocdla.org/Public:Subscriptions'
                                label='Books Online'
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class='flex flex-col gap-1'>
                        <li>
                            <strong>Resources</strong>
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='/'
                                label='CLEs'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='/'
                                label='Videos'
                            />
                        </li>
                        <li>
                            <BaseElementLink
                                classes={baseStyleLink}
                                href='/'
                                label='Seminars & Events'
                            />
                        </li>
                    </ul>
                </li>
                {/* Location */}
                {useGoogleMapsIFrame ? (
                    <li>
                        <ul>
                            <iframe
                                class='aspect-square w-full border-0 lg:w-64'
                                src='https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.8775315978623!2d-123.09091950000001!3d44.0445852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e41b2e3f7ad%3A0xa7600cd512aa10ed!2s101%20E%2014th%20Ave%2C%20Eugene%2C%20OR%2097401!5e0!3m2!1sen!2sus!4v1722628072318!5m2!1sen!2sus'
                                allowfullscreen
                                referrerpolicy='no-referrer-when-downgrade'></iframe>
                        </ul>
                    </li>
                ) : (
                    <></>
                )}
            </ul>
        </footer>
    );
}
