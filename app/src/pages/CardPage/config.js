import { DEFAULT_BTN } from "../../constants/common/constants";

export const entryFields = [
  {
    label: "Brand",
    name: "brand",
    type: "textInput",
    rules: [
      {
        required: true,
        message: `Please input cars brand!`,
      },
    ],
  },
  {
    label: "Age",
    name: "age",
    type: "textInput",
    rules: [
      {
        required: true,
        message: `Please input cars age!`,
      },
    ],
  },
  {
    label: "Mileage",
    name: "mileage",
    type: "textInput",
    rules: [
      {
        required: true,
        message: `Please input cars mileage!`,
      },
    ],
  },
  {
    label: "Price",
    name: "price",
    type: "textInput",
    rules: [
      {
        required: true,
        message: `Please input cars price!`,
      },
    ],
  },
];

export const CARD_PAGE_BTN = ({ onSubmit, text }) =>
  DEFAULT_BTN.submit({ onSubmit, text });
