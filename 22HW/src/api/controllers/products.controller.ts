import { apiConfig } from "../../config/apiConfig";
import { IRequestOptions } from "../../data/types/api.types";
import { IProduct } from "../../data/types/product.types";

class ProductsController {
  async create(productData: IProduct, token: string) {
    const url = apiConfig.baseUrl + apiConfig.endpoints.product;
    const options: IRequestOptions = {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    };
    return await fetch(url, options);
  }

  async get(productId: string, token: string) {
    const url = apiConfig.baseUrl + apiConfig.endpoints.product + productId + "/";
    const options: IRequestOptions = {
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetch(url, options);
  }

  async change(productId: string, token: string, productData: Partial<IProduct>) {
    const url = apiConfig.baseUrl + apiConfig.endpoints.product + productId + '/';
    console.log(url);
    const options: IRequestOptions = {
      method: "put",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    };
    return await fetch(url, options);
  }

  async getAll(token: string) {
    const url = apiConfig.baseUrl + apiConfig.endpoints.product;
    const options: IRequestOptions = {
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetch(url, options);
  }

  async delete(productId: string, token: string) {
    const url = apiConfig.baseUrl + apiConfig.endpoints.product + productId + "/";
    const options: IRequestOptions = {
      method: "delete",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetch(url, options);
  }
}

export default new ProductsController();
