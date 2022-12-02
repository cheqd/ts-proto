import Long from "long";
import _m0 from "protobufjs/minimal";
import { SignInfo } from "../../did/v2/tx";
import { AlternativeUri, Metadata } from "./resource";
export declare const protobufPackage = "cheqd.resource.v2";
export interface MsgCreateResource {
    $type: "cheqd.resource.v2.MsgCreateResource";
    payload: MsgCreateResourcePayload | undefined;
    signatures: SignInfo[];
}
export interface MsgCreateResourcePayload {
    $type: "cheqd.resource.v2.MsgCreateResourcePayload";
    data: Uint8Array;
    collectionId: string;
    id: string;
    name: string;
    version: string;
    resourceType: string;
    alsoKnownAs: AlternativeUri[];
}
export interface MsgCreateResourceResponse {
    $type: "cheqd.resource.v2.MsgCreateResourceResponse";
    resource: Metadata | undefined;
}
export declare const MsgCreateResource: {
    $type: "cheqd.resource.v2.MsgCreateResource";
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    fromPartial<I extends {
        payload?: {
            name?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            name?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                description?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                description?: string | undefined;
                uri?: string | undefined;
            } & {
                description?: string | undefined;
                uri?: string | undefined;
            } & { [K in Exclude<keyof I["payload"]["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["alsoKnownAs"], "$type" | keyof {
                description?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["payload"], "$type" | "name" | "data" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_4 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgCreateResource;
};
export declare const MsgCreateResourcePayload: {
    $type: "cheqd.resource.v2.MsgCreateResourcePayload";
    encode(message: MsgCreateResourcePayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload;
    fromJSON(object: any): MsgCreateResourcePayload;
    toJSON(message: MsgCreateResourcePayload): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: {
            description?: string | undefined;
            uri?: string | undefined;
        }[] | undefined;
    } & {
        name?: string | undefined;
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: ({
            description?: string | undefined;
            uri?: string | undefined;
        }[] & ({
            description?: string | undefined;
            uri?: string | undefined;
        } & {
            description?: string | undefined;
            uri?: string | undefined;
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof {
            description?: string | undefined;
            uri?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "name" | "data" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs">]: never; }>(object: I): MsgCreateResourcePayload;
};
export declare const MsgCreateResourceResponse: {
    $type: "cheqd.resource.v2.MsgCreateResourceResponse";
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                description?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                description?: string | undefined;
                uri?: string | undefined;
            } & {
                description?: string | undefined;
                uri?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], "$type" | keyof {
                description?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], "$type" | "name" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "resource">]: never; }>(object: I): MsgCreateResourceResponse;
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