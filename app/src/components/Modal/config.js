import { DEFAULT_BTN } from "../../constants/common/constants";

const { submit, cancel } = DEFAULT_BTN;

export const MODAL_BTN = ({ onSubmit, onCancel }) => [
  submit({ onSubmit, text: "Create" }),
  cancel({ onCancel }),
];
