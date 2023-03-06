/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Stamp
 */

import { Document, model, Model, Schema } from "mongoose";
import { IStamp } from "../interface/stamp";

const StampSchema: Schema<IStampModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        stampNameDisplay: {
            type: String,
            required: true,
        },
        resourceId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

export interface IStampModel extends IStamp, Document {
}

export const StampModel: Model<IStampModel> = model<IStampModel>('Stamp', StampSchema);
