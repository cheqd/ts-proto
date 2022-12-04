import _m0 from "protobufjs/minimal";
import { SignInfo } from "../../did/v1/tx";
import { Resource } from "./resource";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateResource {
    payload: MsgCreateResourcePayload | undefined;
    signatures: SignInfo[];
}
export interface MsgCreateResourcePayload {
    collectionId: string;
    id: string;
    name: string;
    resourceType: string;
    data: Uint8Array;
}
export interface MsgCreateResourceResponse {
    /** Not necessary */
    resource: Resource | undefined;
}
export declare const MsgCreateResource: {
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    fromPartial<I extends {
        payload?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            data?: Uint8Array | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            data?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["payload"], keyof MsgCreateResourcePayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgCreateResource>]: never; }>(object: I): MsgCreateResource;
};
export declare const MsgCreateResourcePayload: {
    encode(message: MsgCreateResourcePayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload;
    fromJSON(object: any): MsgCreateResourcePayload;
    toJSON(message: MsgCreateResourcePayload): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateResourcePayload>]: never; }>(object: I): MsgCreateResourcePayload;
};
export declare const MsgCreateResourceResponse: {
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        } | undefined;
    } & {
        resource?: ({
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        } & {
            header?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["header"], keyof import("./resource").ResourceHeader>]: never; }) | undefined;
            data?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["resource"], keyof Resource>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "resource">]: never; }>(object: I): MsgCreateResourceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=tx.d.ts.map