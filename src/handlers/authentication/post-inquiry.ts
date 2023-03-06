/**
 * @author WMXPY
 * @namespace Handlers_Authentication
 * @description Inquiry
 */

import { InquiryAction, InquiryActionType } from "@barksh/authentication-types";
import { requestBarkInquiryV1, RequestBarkInquiryV1Response } from "@barksh/client-authentication-node";
import { LambdaVerifier, VerifiedAPIGatewayProxyEvent } from "@sudoo/lambda-verify";
import { createStrictMapPattern, createStringPattern } from "@sudoo/pattern";
import { APIGatewayProxyHandler, APIGatewayProxyResult, Context } from "aws-lambda";
import { Initializer } from "../../initialize/initializer";
import { createSucceedLambdaResponse } from "../common/response";
import { wrapHandler } from "../common/setup";

const verifier: LambdaVerifier = LambdaVerifier.create()
    .setBodyPattern(
        createStrictMapPattern({
            domain: createStringPattern(),
            callbackUrl: createStringPattern({
                optional: true,
            }),
        }),
    );

type Body = {

    readonly domain: string;
    readonly callbackUrl?: string;
};

export const authenticationPostInquiryHandler: APIGatewayProxyHandler = wrapHandler(verifier,
    async (
        event: VerifiedAPIGatewayProxyEvent,
        _context: Context,
    ): Promise<APIGatewayProxyResult> => {

        const body: Body = event.verifiedBody;

        const actions: Array<InquiryAction<InquiryActionType>> = [];

        if (typeof body.callbackUrl === 'string') {
            actions.push({
                type: InquiryActionType.CALLBACK,
                payload: body.callbackUrl,
            });
        }

        const inquiryResponse: RequestBarkInquiryV1Response =
            await requestBarkInquiryV1(body.domain, {
                domain: Initializer.getInstance().getSelfDomain(),
                actions,
            });

        return createSucceedLambdaResponse({
            exposureKey: inquiryResponse.exposureKey,
            hiddenKey: inquiryResponse.hiddenKey,
            redirectUrl: inquiryResponse.redirectUrl,
        });
    },
);
