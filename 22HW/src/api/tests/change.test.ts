// //TODO: npm run test -- --spec="./src/api/tests/Products/get.test.ts"

// import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../../config/environment";
// import { STATUS_CODES } from "../../data/api/statusCodes";
// import { generateProductData } from "../../data/products/generateProduct";
// import ProductsController from "../controllers/products.controller";
// import SignInController from "../controllers/signIn.controller";
// import { valudateResponse } from "../../utils/validation/apiValidation";

// describe("[API] [Products] Change Product", async function () {
//   const loginBody = {
//     username: ADMIN_USERNAME,
//     password: ADMIN_PASSWORD,
//   };
//   let token = "";

//   before(async function () {
//     const loginResponse = await SignInController.login(loginBody);
//     expect(loginResponse.status).toBe(STATUS_CODES.OK);
//     const responseToken = loginResponse.headers.get("authorization");
//     token = responseToken!;
//   });

//   it("Should change product", async function () {
//     const getAllProductsResponse = await ProductsController.getAll(token);
//     expect(getAllProductsResponse.status).toBe(STATUS_CODES.OK);
//     const body = await getAllProductsResponse.json();
//     const randomIndex = Math.floor((body.Products.length - 1) * Math.random()) 
//     const randomId = body.Products[randomIndex]._id;
//     const newProductData = generateProductData();
//     const changeProductResponse = await ProductsController.change(randomId, token, newProductData);
//     expect(changeProductResponse.status).toBe(STATUS_CODES.OK);
//     const bodyChanged = await changeProductResponse.json();
//     valudateResponse(bodyChanged, true, null);
//     const changedProduct = bodyChanged.Product;
//     expect(changedProduct).toMatchObject({ ...newProductData });
//   });



// });
