import { MercadoPagoInstance } from "../../mercadoPago/initMercadoPago";
import type { TIssuersParams } from "./types";

/**
 * Returns a issuers list.
 * 
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md#mp-instancegetissuersissuersparams method documentation}.
 */
const getIssuers = async (issuersParams: TIssuersParams) => {
  const instanceMercadoPago = await MercadoPagoInstance.init();
  return instanceMercadoPago?.getIssuers(issuersParams);
};

export default getIssuers;
