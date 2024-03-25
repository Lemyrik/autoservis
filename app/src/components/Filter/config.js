import { DEFAULT_BTN } from "../../constants/common/constants";

const { submit, reset } = DEFAULT_BTN;

export const FILTER_BTN = ({ onSubmit, onReset }) => [
  submit({ onSubmit, text: "Search" }),
  reset({ onReset }),
];
