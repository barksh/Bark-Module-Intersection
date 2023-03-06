/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Account
 */

import { IAccountConfig } from "../interface/account";
import { AccountModel, IAccountModel } from "../model/account";

export const createUnsavedAccount = (
    domain: string,
    identifier: string,
): IAccountModel => {

    const accountConfig: IAccountConfig = {

        domain,
        identifier,
    };
    return new AccountModel(accountConfig);
};
