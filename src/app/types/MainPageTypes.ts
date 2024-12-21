import type { Dispatch, SetStateAction } from "react";

export interface MainPageType {
  hpOptions: string[];
  errorMessage: string | undefined;
  selected?: string;
  onSelect: Dispatch<SetStateAction<string>>;
  className?: string;
}
