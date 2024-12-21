"use client"
import { cn } from "@libs/utils";
import SplitNumber from "./SplitNumber";
import { MainPageType } from "@customTypes/MainPageTypes";

export default function HpOptionList({
  className,
  hpOptions,
  onSelect
}: MainPageType) { // I have reached my self imposed limit for passing props

  return (
    <div className={cn("flex py-3  m-auto", className)}>
      {hpOptions.map((option: string) => (
        <div
          key={option}
          className="group relative z-0 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
        >
          <div className="relative overflow-hidden rounded-full bg-white">
            <div className="bg-size pointer-events-none absolute size-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
            <div className="z-1 blur-lg" />
            <div className="rounded-full object-cover p-auto h-fit m-3 min-w-[15px]" role="button" onClick={() => onSelect(option)}>
              <SplitNumber text={option} className="text-[5px] sm:text-sm md:text-xl lg:text-2xl" />
            </div>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
            <p>{`HP = ${option}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

