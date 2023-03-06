/**
 * @author WMXPY
 * @namespace Database_Controller
 * @description Stamp
 */

import { ObjectId } from "mongodb";
import { IStampConfig } from "../interface/stamp";
import { IStampModel, StampModel } from "../model/stamp";

export const createUnsavedStamp = (
    stampNameDisplay: string,
    resourceId: ObjectId,
): IStampModel => {

    const StampConfig: IStampConfig = {

        stampNameDisplay,
        resourceId,
    };
    return new StampModel(StampConfig);
};
