interface ProgressComponentProps {
  title: string;
  percent: number;
  subText: string;
}

export const ProgressComponent = ({
  title,
  subText,
  percent,
}: ProgressComponentProps) => {
  return (
    <div className="max-w-xs space-y-5 p-2">
      <h4 className="text-2xl md:text-4xl  md:leading-[44.8px] text-primaryBlack">
        {title}
      </h4>
      <h1 className="text-7xl">{percent.toString()}%</h1>
      <div className="h-[7px] bg-[#FEE5F5]">
        <div
          style={{ width: `${percent}%` }}
          className="h-[7px] bg-[#FA3AA9]"
        ></div>
      </div>
      <p>{subText}</p>
    </div>
  );
};
