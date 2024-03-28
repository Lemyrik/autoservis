export const schema = {
  type: "object",
  required: ["brand", "price", "age", "mileage"],
  properties: {
    brand: {
      type: "string",
      title: "Brand",
    },
    price: {
      type: "integer",
      title: "Price",
    },
    age: {
      type: "integer",
      title: "Age",
    },
    mileage: {
      type: "integer",
      title: "Mileage",
    },
  },
};