/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Redeemable
 */

import { IRedeemableConfig } from "../interface/redeemable";
import { IRedeemableModel, RedeemableModel } from "../model/redeemable";

export type CreateUnsavedRedeemableConfig = {
    // Nothing
} & IRedeemableConfig;

export const createUnsavedRedeemable = (
    config: CreateUnsavedRedeemableConfig,
): IRedeemableModel => {

    const redeemableConfig: IRedeemableConfig = {
        ...config,
    };
    return new RedeemableModel(redeemableConfig);
};
