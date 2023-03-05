/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Account
 */

import { Document, model, Model, Schema } from "mongoose";
import { IAccount } from "../interface/account";

const AccountSchema: Schema<IAccountModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        domain: {
            type: String,
            required: true,
            index: true,
        },
        identifier: {
            type: String,
            required: true,
            index: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

export interface IAccountModel extends IAccount, Document {
}

export const AccountModel: Model<IAccountModel> = model<IAccountModel>('Account', AccountSchema);
