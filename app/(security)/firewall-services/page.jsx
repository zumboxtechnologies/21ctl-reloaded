import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SecurityHero from '@/components/security/SecurityHero';
import { AccordionDemo } from '@/components/security/Accordion';
import Equal from '@/components/security/Equal';
import PolygonBox from '@/components/security/PolygonBox';
import { info } from '@/constants/FAQs';
import React from 'react';
import Button from '@/components/Button';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import FAQs from '@/components/FAQs';
import ContactUs from '@/components/ContactUs';
import { ProgressComponent } from '@/components/security/progress';
import { firewallServicesProgress } from '../../../constants/firewall-services-progress';

const FirewallService = ()=>{
    return(
        <>
            <SecurityHero
                title="Firewall Services"
                subTitle={
                    <>
                        Comprehensive management and monitoring of firewalls.
                        <br className="hidden sm:block" />
                        including Next-Generation
                    </>
                }
            />

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

            <div className="myContainer">
                <Equal>
                    <div>
                        <Button
                        cta="Full Scale Remodel"
                        className="bg-cerise-light text-white"
                        polycolor="bg-white"
                        />
                        <h2 className="mt-3 mb-8">We've got your back, <br /> no matter your stack</h2>
                        <AccordionDemo data={info} />
                    </div>
                    <SmallGrayCard />
                </Equal>
            </div>

            <div className="myContainer">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
                {/* First Grid Item */}
                <div className="lg:col-span-3 space-y-3">
                  <h4 className='text-3xl'>You're free to choose the best <br /> technology for now.</h4>
                  <SmallGrayCard/>
                </div>

                {/* Second Grid Item */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {firewallServicesProgress.map((progress, i) => (
                      <ProgressComponent
                        key={i}
                        title={progress.title}
                        percent={progress.percent}
                        subText={progress.subText}
                      />
                    ))}
                    </div>
                  </div>
                </div>
            </div>

          <div className="myContainer mt-20">
            <Button
            cta="Academy"
            className="bg-cerise text-white"
            polycolor="bg-dimGray"
            />
            <h4 className="text-3xl md:text-[28px] md:leading-[46.8px] text-primaryGray">
            Everything you need to build <br /> high quality generative AI at {'–'} it&apos;s a portal to tomorrow.
            </h4>
        
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 mt-6">
                {Array.from({ length: 6 }, (_, i) => (
                    <PolygonBox
                    key={i}
                    classname="bg-white w-10 h-10"
                    otherclasses="bg-dimGray min-h-[212px] justify-center gap-5 flex flex-col p-5"
                    >
                    <h3 className="text-2xl">
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

export default FirewallService;