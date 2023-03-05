/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Resource
 */

export enum ResourceType {

    STATIC_IMAGE_URL = "STATIC_IMAGE_URL",
    STATIC_IMAGE_BASE64 = "STATIC_IMAGE_BASE64",
}

export type ResourcePayloadTypeMap = {

    [ResourceType.STATIC_IMAGE_URL]: {
        readonly url: string;
    };
    [ResourceType.STATIC_IMAGE_BASE64]: {
        readonly data: string;
    };
};

export interface IResourceConfig<T extends ResourceType> {

    readonly type: T;

    readonly payload: ResourcePayloadTypeMap[T];
}

export interface IResource<T extends ResourceType> extends IResourceConfig<T> {

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
