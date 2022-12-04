import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export interface StateValue {
    data: Any | undefined;
    /** optional */
    metadata: Metadata | undefined;
}
/** metadata */
export interface Metadata {
    created: string;
    updated: string;
    deactivated: boolean;
    versionId: string;
    resources: string[];
}
export declare const StateValue: {
    encode(message: StateValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateValue;
    fromJSON(object: any): StateValue;
    toJSON(message: StateValue): unknown;
    fromPartial<I extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_1 in Exclude<keyof I["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof StateValue>]: never; }>(object: I): StateValue;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: string[] | undefined;
    } & {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: (string[] & string[] & { [K in Exclude<keyof I["resources"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Metadata>]: never; }>(object: I): Metadata;
};
//# sourceMappingURL=stateValue.d.ts.map