import { cn } from '@/lib/utils';
import Equal from './Equal';

const CeriseBgWithPolygonsEdge = ({ className }: { className?: string }) => {
  return (
    <div className={cn('myContainer', className)}>
      <div className="bg-cerise-light min-h-[400px] max-h-[50vw]  md:min-h-[90vh] relative">
        <div className="hidden lg:grid  bg-cerise-light min-w-[200px] max-w-[300px] min-h-[100px] max-h-[200px] absolute right-0  grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                clipPath:
                  'polygon(0% 0%, 63% 0%, 101% 53%, 101% 101%, 0% 101%, 0% 50%)',
              }}
              className={cn(
                'bg-white w-[100px] h-[100px] rotate-180 translate-x-1',
                i > 2 && ' mr-5 -translate-y-1',
                (i == 0 || i == 3) && ' translate-x-2'
              )}
            ></div>
          ))}
        </div>
        <div className="hidden lg:grid  bg-cerise-light w-[300px] h-[200px] absolute bottom-0  grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                clipPath:
                  'polygon(0% 0%, 63% 0%, 101% 53%, 101% 101%, 0% 101%, 0% 50%)',
              }}
              className={cn(
                'bg-white w-[100px] h-[100px] -translate-x-1',
                (i == 1 || i == 4) && ' -translate-x-2',
                (i == 2 || i == 5) && '-translate-x-3'
              )}
            ></div>
          ))}
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center p-5">
          <Equal>
            <div>
              <h2 className="text-white">
                Stop Threats, <br className="hidden sm:block" />
                Before They Strike.
              </h2>
            </div>
            <div>
              <h4 className="text-xl md:text-[24px] md:leading-[44.8px] text-white">
                Our integrated approach identifies risks before they can be
                exploited. Welcome to the realm where milliseconds matter and
                possibilities explode.
              </h4>
            </div>
          </Equal>
        </div>
      </div>
    </div>
  );
};

export default CeriseBgWithPolygonsEdge;
