import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PolygonBox from './PolygonBox';

type DataProp = {
  question: string;
  answer: string;
};

export function AccordionDemo({ data }: { data: DataProp[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {data.map((data, index) => (
        <PolygonBox key={index} classname="w-6 h-6 bg-white" otherclasses="">
          <AccordionItem
            value={`item-${index}`}
            className="bg-cerise-lighter border-none px-4"
          >
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              {data.question}
            </AccordionTrigger>
            <AccordionContent>{data.answer}</AccordionContent>
          </AccordionItem>
        </PolygonBox>
      ))}
    </Accordion>
  );
}
