import express from "express";
import {
  getNodeInfo,
  getASeed,
  getAddresses,
  getBalanceAddress,
} from "../controllers/iota";
import { handleValidationError } from "../middleware/functions";
import { checkAddress } from "../validators/parameters";

export default function iotaRouter() {
  const router = express.Router();

  router.get("/nodeinfo", getNodeInfo);
  router.get("/seed", getASeed);
  router.get("/addresses", getAddresses);
  router.get(
    "/balance/:address",
    checkAddress(),
    handleValidationError,
    getBalanceAddress
  );
  return router;
}
