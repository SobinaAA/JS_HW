// //TODO: npm run test -- --spec="./src/api/tests/getAll.test.ts"
// import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../../config/environment";
// import { STATUS_CODES } from "../../data/api/statusCodes";
// import ProductsController from "../controllers/products.controller";
// import SignInController from "../controllers/signIn.controller";
// import { validateJsonSchema, valudateResponse } from "../../utils/validation/apiValidation";
// import { allProductsResponseSchema } from "../../data/jsonSchemas/product.schema";

// describe("[API] [Products] Get All", async function () {
//   const loginBody = {
//     username: ADMIN_USERNAME,
//     password: ADMIN_PASSWORD,
//   };

//   let token = "";

//   beforeEach(async function () {
//     const loginResponse = await SignInController.login(loginBody);
//     expect(loginResponse.status).toBe(STATUS_CODES.OK);
//     const responseToken = loginResponse.headers.get("authorization");
//     token = responseToken!;
//   });

//   it("Should get all products", async function () {
//     const getAllProductsResponse = await ProductsController.getAll(token);
//     expect(getAllProductsResponse.status).toBe(STATUS_CODES.OK);
//     const body = await getAllProductsResponse.json();
//     valudateResponse(body, true, null);
//     validateJsonSchema(allProductsResponseSchema, body);
//     console.log(body)
//   });
// });
