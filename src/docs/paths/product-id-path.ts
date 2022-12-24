export const productIdPath = {
  put: {
    tags: ["Product"],
    summary: "Atualiza um produto",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "",
        required: true,
        style: "simple",
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/product",
          },
          example: {
            name: "Produto 1",
            price: "12.00",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/product",
            },
            example: {
              id: "1",
              name: "Produto 1",
              price: "12.00",
              createdAt: "2022-12-23T15:06:57.000Z",
              updatedAt: "2022-12-23T15:06:57.000Z",
            },
          },
        },
      },
      404: {
        description: "Produto não encontrado",
      },
    },
  },
};