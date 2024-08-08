/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Hyperlink from './Hyperlink';
import Logo from './Logo';
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
                    <ul class='flex flex-col gap-8 text-nowrap lg:flex-row lg:gap-16'>
                        <li>
                            {/* Brand + Social */}
                            <li>
                                <ul class='flex flex-col gap-1'>
                                    <li>
                                        <ul class='flex items-center gap-1'>
                                            <li>
                                                <Logo href='https://ocdla.org'>
                                                    <img
                                                        class='-my-2 h-16'
                                                        src='https://ocdla.org/wp-content/uploads/2019/10/cropped-ocdla-logo.png'
                                                    />
                                                </Logo>
                                            </li>
                                            {showFacebook ? (
                                                <li>
                                                    <Hyperlink
                                                        type='footer-social'
                                                        href='https://facebook.com/OregonCriminalDefenseLawyersAssociation/'
                                                        body={
                                                            <img
                                                                class='size-8'
                                                                src='https://ocdla.org/wp-content/themes/wireframe/assets/images/default-facebook-icon.png'
                                                                alt='Facebook'
                                                            />
                                                        }
                                                    />
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                            {showTwitter ? (
                                                <li>
                                                    <Hyperlink
                                                        type='footer-social'
                                                        href='https://twitter.com/oregondefense?lang=en'
                                                        body={
                                                            <img
                                                                class='size-8'
                                                                src='https://ocdla.org/wp-content/themes/wireframe/assets/images/default-twitter-icon.png'
                                                                alt='Twitter'
                                                            />
                                                        }
                                                    />
                                                </li>
                                            ) : (
                                                <></>
                                            )}
                                        </ul>
                                    </li>
                                    {/* Copyright */}
                                    <li>
                                        <ul class='text-[0.625rem] font-thin leading-[0.75rem]'>
                                            <li>
                                                © 2024 Oregon Criminal Defense
                                                Lawyers Association
                                            </li>
                                            <li class='text-wrap'>
                                                Oregon Criminal Defense Lawyers
                                                Association is a 501(c)(3)
                                                nonprofit educational
                                                association. Contributions to
                                                OCDLA may be tax deductible -
                                                check with your tax advisor.
                                                Electronic downloads are for the
                                                sole use of the purchasing
                                                member. Files may not be
                                                distributed to others.
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Contact */}
                                    <li>
                                        <ul class='text-neutral-300'>
                                            <Hyperlink
                                                type='standard'
                                                href='https://ocdla.org'
                                                body='ocdla.org'
                                            />{' '}
                                            {!useGoogleMapsIFrame ? (
                                                <>
                                                    |{' '}
                                                    <Hyperlink
                                                        type='standard'
                                                        href='https://maps.app.goo.gl/7dCYKBEyJbmo8tzS7'
                                                        body='101 East 14th Ave, Eugene, OR 97401 '
                                                    />{' '}
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            |{' '}
                                            <Hyperlink
                                                type='standard'
                                                href='mailto:info@ocdla.org'
                                                body='info@ocdla.org'
                                            />{' '}
                                            |{' '}
                                            <Hyperlink
                                                type='standard'
                                                href='tel:+15416868716'
                                                body='(+1) 541-686-8716'
                                            />
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul class='flex flex-col gap-1'>
                        <li>
                            <strong>Services</strong>
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='https://pubs.ocdla.org/directory/members'
                                body='Membership Directory'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='https://pubs.ocdla.org/directory/experts'
                                body='Expert Directory'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='/'
                                body='Online store'
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
                            <Hyperlink
                                type='standard'
                                href='https://pubs.ocdla.org/car/list'
                                body='Research Criminal Appellate Review'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='https://lod.ocdla.org/'
                                body='Library of Defense'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='https://lod.ocdla.org/Public:Subscriptions'
                                body='Books Online'
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
                            <Hyperlink
                                type='standard'
                                href='/'
                                body='CLEs'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='/'
                                body='Videos'
                            />
                        </li>
                        <li>
                            <Hyperlink
                                type='standard'
                                href='/'
                                body='Seminars & Events'
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
