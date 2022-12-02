import Long from "long";
import _m0 from "protobufjs/minimal";
import { SignInfo } from "../../did/v1/tx";
import { Resource } from "./resource";
export declare const protobufPackage = "cheqdid.cheqdnode.resource.v1";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateResource {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResource";
    payload: MsgCreateResourcePayload | undefined;
    signatures: SignInfo[];
}
export interface MsgCreateResourcePayload {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResourcePayload";
    collectionId: string;
    id: string;
    name: string;
    resourceType: string;
    data: Uint8Array;
}
export interface MsgCreateResourceResponse {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResourceResponse";
    /** Not necessary */
    resource: Resource | undefined;
}
export declare const MsgCreateResource: {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResource";
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    fromPartial<I extends {
        payload?: {
            id?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
        } & {
            id?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], "$type" | "id" | "data" | "collectionId" | "name" | "resourceType">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgCreateResource;
};
export declare const MsgCreateResourcePayload: {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResourcePayload";
    encode(message: MsgCreateResourcePayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload;
    fromJSON(object: any): MsgCreateResourcePayload;
    toJSON(message: MsgCreateResourcePayload): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & {
        id?: string | undefined;
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "data" | "collectionId" | "name" | "resourceType">]: never; }>(object: I): MsgCreateResourcePayload;
};
export declare const MsgCreateResourceResponse: {
    $type: "cheqdid.cheqdnode.resource.v1.MsgCreateResourceResponse";
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            data?: Uint8Array | undefined;
            header?: {
                id?: string | undefined;
                created?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
                collectionId?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                checksum?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        resource?: ({
            data?: Uint8Array | undefined;
            header?: {
                id?: string | undefined;
                created?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
                collectionId?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                checksum?: Uint8Array | undefined;
            } | undefined;
        } & {
            data?: Uint8Array | undefined;
            header?: ({
                id?: string | undefined;
                created?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
                collectionId?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                checksum?: Uint8Array | undefined;
            } & {
                id?: string | undefined;
                created?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
                collectionId?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                checksum?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["resource"]["header"], "$type" | "id" | "created" | "nextVersionId" | "previousVersionId" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["resource"], "$type" | "data" | "header">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "resource">]: never; }>(object: I): MsgCreateResourceResponse;
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
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
//# sourceMappingURL=tx.d.ts.map