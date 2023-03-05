/**
 * @author WMXPY
 * @namespace Database_Interface
 * @description Award
 */

import { ObjectId } from "mongodb";

export interface IAwardConfig {

    readonly accountId: ObjectId;
    readonly stampId: ObjectId;

    readonly awardedAt: Date;
}

export interface IAward extends IAwardConfig {

    active: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}
