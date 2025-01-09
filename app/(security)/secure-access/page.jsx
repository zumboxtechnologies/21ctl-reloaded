import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SecurityHero from '@/components/security/SecurityHero';
import Equal from '@/components/security/Equal';
import PolygonBox from '@/components/security/PolygonBox';
import React from 'react';
import Button from '@/components/Button';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import SaseService from '@/components/security/SaseService';
import SliderContainer from '@/components/security/slider-container';
import FAQs from '@/components/FAQs';
import ContactUs from '@/components/ContactUs';

const SecureAccessServices = ()=>{
    return (
        <>
            <SecurityHero
                title={
                    <>Secure Access Service <br /> Edge (SASE)</>
                }
                subTitle={
                    <>
                        Stay ahead of cyber threats with innovative solutions designed to protect your <br /> data and strengthen your digital infrastructure.
                    </>
                }
            />

            <div className='myContainer'>
                <div className="bg-dimGray min-h-[85vh] flex justify-center items-center p-6">
                    <div className="space-y-2 max-w-[700px] text-center">
                        <h2>Fastest Internet Speed <br /> With Top Security</h2>
                        <h5>Request Demo</h5>
                    </div>
                </div>
            </div>

            <div className="myContainer mt-20">
                <Button
                cta="Academy"
                className="bg-cerise text-white"
                polycolor="bg-dimGray"
                />
                <h4 className="text-2xl md:text-[24px] md:leading-[38.8px] text-primaryGray">
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
                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    <SmallGrayCard
                        button="Academy"
                        title="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
                        smallText="Get Demo"
                    />
                    <SmallGrayCard
                        button="Academy"
                        title="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
                        smallText="Get Demo"
                    />
                    <SmallGrayCard
                        button="Academy"
                        title="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
                        smallText="Get Demo"
                    />
                </div>
            </div>
            
            <SaseService/>

            <div className="myContainer">
                <Button
                cta="Full Scale Remodel"
                className="bg-cerise-light text-white"
                polycolor="bg-white"
                />
                <h2 className="mt-3 mb-8">Unified SASE Solution</h2>
                <Equal>
                <SmallGrayCard
                    button="Network"
                    title={<>Global <br /> Backbone Network</>}
                    smallText="Learn More"
                />
                <SmallGrayCard
                    button="Academy"
                    title={<>Zero Trust Network <br /> Access(ZTNA)</>}
                    smallText="Learn More"
                />
                </Equal>
            </div>

            <div className="myContainer">
                <div className='relative'>
                    <div className='absolute right-0'>
                    <div className="flex transform rotate-180 flex-col">
                        <div>
                        {Array.from({ length: 3 }, (_, i) => (
                            <Button
                                key={i}
                                className="bg-cerise-light"
                                polycolor="bg-dimGray"
                            />
                        ))}
                        </div>
                        <div>
                        {Array.from({ length: 3 }, (_, i) => (
                            <Button
                                key={i}
                                className="bg-cerise-light"
                                polycolor="bg-dimGray"
                            />
                        ))}
                        </div>
                    </div>
                    </div>

                    <div className='bg-dimGray min-h-[450px] flex items-center p-7'>
                    <Equal>
                        <h2>Beyond Speed. <br /> Beyond Connection.</h2>
                        <div>
                        <h4 className="text-2xl md:text-[24px] md:leading-[36.8px] text-primaryGray">
                        Remember when 4G felt fast? That&apos;s like comparing a paper
                        airplane to a rocket ship. Welcome to the realm where milliseconds
                        matter and possibilities explode. 
                        </h4>
                        <Button 
                            cta="Start Learning"
                            className="bg-transparent transition-all duration-300 p-0 hover:text-gray-700"
                        />
                        </div>
                    </Equal>
                    </div>
                    <div className='absolute bottom-0 left-0'>
                    <div className="flex flex-col">
                        <div>
                        {Array.from({ length: 3 }, (_, i) => (
                            <Button
                                key={i}
                                className="bg-cerise-light"
                                polycolor="bg-dimGray"
                            />
                        ))}
                        </div>
                        <div>
                        {Array.from({ length: 3 }, (_, i) => (
                            <Button
                                key={i}
                                className="bg-cerise-light"
                                polycolor="bg-dimGray"
                            />
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

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

export default SecureAccessServices;