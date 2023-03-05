/**
 * @author WMXPY
 * @namespace Database_Model
 * @description Resource
 */

import { Document, model, Model, Schema } from "mongoose";
import { IResource, ResourceType } from "../interface/resource";

const ResourceSchema: Schema<IResourceModel> = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        payload: {
            type: Schema.Types.Mixed,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

export interface IResourceModel extends IResource<ResourceType>, Document {
}

export const ResourceModel: Model<IResourceModel> = model<IResourceModel>('Resource', ResourceSchema);
