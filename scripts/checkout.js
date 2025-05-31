import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { calculateCartQuantity } from "../data/cart.js";

renderOrderSummary();
renderPaymentSummary();

const returnToHomeLink = document.querySelector(".js-return-to-home-link");
const cartQuantity = calculateCartQuantity();
returnToHomeLink.innerText = `${cartQuantity} item${
  cartQuantity !== 1 ? "s" : ""
}`;
