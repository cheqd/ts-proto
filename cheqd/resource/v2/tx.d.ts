import _m0 from "protobufjs/minimal";
import { SignInfo } from "../../did/v2/tx";
import { AlternativeUri, Metadata } from "./resource";
export interface MsgCreateResource {
    payload: MsgCreateResourcePayload | undefined;
    signatures: SignInfo[];
}
export interface MsgCreateResourcePayload {
    data: Uint8Array;
    collectionId: string;
    id: string;
    name: string;
    version: string;
    resourceType: string;
    alsoKnownAs: AlternativeUri[];
}
export interface MsgCreateResourceResponse {
    resource: Metadata | undefined;
}
export declare const MsgCreateResource: {
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    fromPartial<I extends {
        payload?: {
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["payload"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["payload"], keyof MsgCreateResourcePayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_4 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof MsgCreateResource>]: never; }>(object: I): MsgCreateResource;
};
export declare const MsgCreateResourcePayload: {
    encode(message: MsgCreateResourcePayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload;
    fromJSON(object: any): MsgCreateResourcePayload;
    toJSON(message: MsgCreateResourcePayload): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: {
            uri?: string | undefined;
            description?: string | undefined;
        }[] | undefined;
    } & {
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: ({
            uri?: string | undefined;
            description?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            description?: string | undefined;
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateResourcePayload>]: never; }>(object: I): MsgCreateResourcePayload;
};
export declare const MsgCreateResourceResponse: {
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "resource">]: never; }>(object: I): MsgCreateResourceResponse;
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