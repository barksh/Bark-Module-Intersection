/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Stamp Award
 */

import { Document, model, Model, Schema } from "mongoose";
import { IStampAward, StampAwardSourceType } from "../interface/stamp-award";

const StampAwardSchema: Schema<IStampAwardModel> = new Schema(
    {
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        accountId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        stampId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        awardedAt: {
            type: Date,
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

export interface IStampAwardModel extends IStampAward<StampAwardSourceType>, Document {
}

export const AwardModel: Model<IStampAwardModel> = model<IStampAwardModel>('StampAward', StampAwardSchema);
