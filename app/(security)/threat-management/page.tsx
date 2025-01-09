import Button from '@/components/Button';
import ContactUs from '@/components/ContactUs';
import FAQs from '@/components/FAQs';
import CeriseBgWithPolygonsEdge from '@/components/security/ceriseBgWithPolygonsEdge';
import Equal from '@/components/security/Equal';
import GrayBgSection from '@/components/security/graybg/GrayBgSection';
import SmallGrayCard from '@/components/security/graybg/SmallGrayCard';
import SecurityHero from '@/components/security/SecurityHero';
import { cn } from '@/lib/utils';

const page = () => {
  return (
    <>
      <SecurityHero
        title="Threat Management"
        subTitle={
          <>
            Proactively identify, analyze, and mitigate potential risks
            <br className="hidden sm:block" />
            before they escalate into significant issues.
          </>
        }
      />
      <div className="myContainer">
        <Equal>
          <div>
            <h2>
              Beyond Speed. <br /> Beyond Connection.
            </h2>
          </div>
          <div>
            <h4 className="text-xl md:text-[24px] md:leading-[44.8px] text-primaryGray">
              Remember when 4G felt fast? That&apos;s like comparing a paper
              airplane to a rocket ship. Welcome to the realm where milliseconds
              matter and possibilities explode. Our 5G infrastructure isn&apos;t
              just an upgrade {'–'} it&apos;s a portal to tomorrow.
            </h4>
          </div>
        </Equal>
      </div>
      <CeriseBgWithPolygonsEdge />
      <div className="myContainer min-h-[1340px] grid grid-cols-1 md:grid-cols-2 gap-7">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i}>
            {
              <SmallGrayCard
                title="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
                classname={cn('h-full', i == 0 && 'bg-transparent')}
                button="Academy"
                smallText={i === 0 ? '' : 'Learn more'}
                bigTitle="82%"
                itemsEnd={i === 0 ? false : true}
                buttonPolyColor={i === 0 ? 'bg-white' : 'bg-dimGray'}
              />
            }
          </div>
        ))}
      </div>
      <div className="myContainer">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 flex items-end">
            <div className="w-full">
              <Button
                cta="Enterprise Platform"
                className="bg-cerise-light text-white"
                polycolor="bg-white"
              />
              <h2 className="mt-3 mb-8">
                Protecting Endpoint, Cloud,
                <br /> and Data, Powered by AI.
              </h2>
              <GrayBgSection
                title=""
                container={false}
                classname="min-h-[300px] mb-0"
              />
            </div>
          </div>
          <div className="lg:col-span-1 grid  items-start gap-5">
            {Array.from({ length: 2 }, (_, i) => (
              <div key={i} className="border border-t-cerise">
                <SmallGrayCard
                  title="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
                  smallText="Get Demo"
                  alternateBgColor="bg-carise"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="myContainer flex items-center flex-col">
        <Button
          cta="Academy"
          className="bg-cerise-light text-white"
          polycolor="bg-white"
        />
        <h2 className="mt-3 text-center">
          The First Security AI Platform to <br className="hidden sm:block" />{' '}
          Protect the Entire Enterprise.
        </h2>
      </div>
      <GrayBgSection
        classname="justify-center items-center text-center"
        title="Fastest Internet Speed With Top Security"
        smallText="Request Demo"
      />
      <div className="myContainer">
        <h2 className="mt-3 text-center">
          Take Control Of Your Entire Security Ecosystem
        </h2>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {Array.from({ length: 3 }, (_, i) => (
            <SmallGrayCard
              key={i}
              title="Schedule regular, automated backups."
              subTitle="Ensure your backups remain current and functional with continuous monitoring and periodic testing."
              smallText="Get Demo"
            />
          ))}
        </div>
      </div>
      <div className="myContainer">
        <Button
          cta="Full Scale Remodel"
          className="bg-cerise-light text-white"
          polycolor="bg-white"
        />
        <h2 className="mt-3 mb-8">Securing the Best of the Best</h2>
        <GrayBgSection
          title={
            <h3>
              Detect advanced threats with AI-powered behaviour analysis,
              malware analysis, and sensitive data identification.
            </h3>
          }
          container={false}
          classname="min-w-[50vw]"
        />
      </div>
      <FAQs />
      <ContactUs />
    </>
  );
};

export default page;
