/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Resource
 */

import { IResourceConfig, ResourcePayloadTypeMap, ResourceType } from "../interface/resource";
import { IResourceModel, ResourceModel } from "../model/resource";

export const createUnsavedResource = <T extends ResourceType>(
    type: T,
    payload: ResourcePayloadTypeMap[T],
): IResourceModel => {

    const resourceConfig: IResourceConfig<T> = {

        type,
        payload,
    };
    return new ResourceModel(resourceConfig);
};
