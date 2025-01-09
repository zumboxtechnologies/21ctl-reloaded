'use client'
import Button from '@/components/Button';
import ContactUs from '@/components/ContactUs';
import FAQs from '@/components/FAQs';
import { AccordionDemo } from '@/components/security/Accordion';
import Equal from '@/components/security/Equal';
import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import PolygonBox from '@/components/security/PolygonBox';
import SecurityHero from '@/components/security/SecurityHero';
import SliderContainer from '@/components/security/slider-container';
import Service from '@/components/security/Service';
import { info } from '@/constants/FAQs';
import React from 'react';

const SecurityCloud = ()=>{
    
    return (
        <>
            <SecurityHero
                title="Security Cloud"
                lightbgTitle="Infrastructure"
                subTitle={
                    <>
                        Stay ahead of cyber threats with innovative solutions designed <br /> to protect your data and strengthen your digital infrastructure.
                    </>
                }
            />

            <div className="myContainer mt-20">
                <Button
                cta="Academy"
                className="bg-cerise text-white"
                polycolor="bg-dimGray"
                />
                <h4 className="text-2xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
                Everything you need to build <br /> high quality generative AI at {'–'} it&apos;s a portal to tomorrow.
                </h4>
            
                <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
                    {Array.from({ length: 6 }, (_, i) => (
                        <PolygonBox
                        key={i}
                        classname="bg-white w-10 h-10"
                        otherclasses="bg-dimGray min-h-[216px] justify-center gap-5 flex flex-col p-5"
                        >
                        <h3 className="text-xl">
                            Schedule regular, <br />
                            automated backups
                        </h3>
                        <Button
                            cta="Start learning"
                            className="bg-transparent transition-all duration-300 p-0 hover:text-gray-700"
                        />
                        </PolygonBox>
                    ))}
                </div>
            </div>

            <div className="myContainer">
                <Equal>
                    <div>
                        <h5 className='font-bold'>Case Studies/Success Stories</h5>
                        <h4 className='text-4xl font-medium'>Driving Impact <br /> Across the Globe</h4>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </Equal>
            </div>

            <div className="myContainer mt-0">
                <Equal>
                    <div>
                        <h2>
                            Beyond Speed. <br /> Beyond Connection.
                        </h2>
                        <GrayBgSection title="" container={false} />
                    </div>
                    <div>
                        <h4 className="text-2xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
                        Remember when 4G felt fast? That&apos;s like comparing a paper
                        airplane to a rocket ship. Welcome to the realm where milliseconds
                        matter and possibilities explode. Our 5G infrastructure isn&apos;t
                        just an upgrade {'–'} it&apos;s a portal to tomorrow.
                        </h4>
                        
                    </div>

                </Equal>
            </div>

            <div className="myContainer mt-0">
                <Equal>
                    <div>
                        <h2>
                            Beyond Speed. <br /> Beyond Connection.
                        </h2>
                    </div>
                    <div>
                        <h4 className="text-2xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
                        Remember when 4G felt fast? That&apos;s like comparing a paper
                        airplane to a rocket ship. Welcome to the realm where milliseconds
                        matter and possibilities explode. Our 5G infrastructure isn&apos;t
                        just an upgrade {'–'} it&apos;s a portal to tomorrow.
                        </h4>
                        <GrayBgSection title="" container={false} />
                    </div>

                </Equal>
            </div>
            
            <GrayBgSection
                buttontext="Academy"
                title="We provide world-class services to the top 1000 companies in Nigeria and key residential areas."
                smallText="Start Learning"
            />
            <SliderContainer />

            <div className="myContainer">
                <h4>Case Studies/Success Stories</h4>
                <h2>Driving Impact <br /> Across the Globe</h2>

                <div className="space-y-5 w-full max-w-full overflow-hidden">
            
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-5 transition-transform duration-500 ease-in-out"
                            >
                            {Array.from({ length: 3 }, (_, i) => (
                                <SmallGrayCard
                                key={i}
                                width="800px"
                                button="Academy"
                                title={
                                    <>
                                    Explore how 21CTL has <br />
                                    partnered with clients to deliver <br /> transformative results.
                                    </>
                                }
                                smallText="Learn More"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FAQs/>
            <ContactUs/>
        </>
    )
}

export default SecurityCloud;