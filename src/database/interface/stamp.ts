/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Stamp
 */

import { ObjectId } from "mongodb";

export interface IStampConfig {

    readonly stampNameDisplay: string;

    readonly resourceId: ObjectId;
}

export interface IStamp extends IStampConfig {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
