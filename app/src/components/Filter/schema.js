export const schema = {
  type: "object",
  properties: {
    OnlyNewCars: {
      title: "Show only new cars",
      type: "boolean",
      default: false,
    },
    brand: {
      type: "string",
      title: "Brand",
    },
    price: {
      type: "integer",
      title: "Price",
    },
  },
  allOf: [
    {
      if: {
        properties: {
          OnlyNewCars: {
            const: true,
          },
        },
      },
      then: {
        properties: {},
      },
    },
    {
      if: {
        properties: {
          OnlyNewCars: {
            const: false,
          },
        },
      },
      then: {
        properties: {
          age: {
            type: "string",
            title: "Age",
          },
          mileage: {
            type: "string",
            title: "Mileage",
          },
        },
      },
    },
  ],
};
export const uiSchema = {
  conditional: {
    "ui:title": false,
  },
  simple: {
    "ui:title": false,
  },
};
