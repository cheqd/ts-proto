import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
export interface KeyValuePair {
    $type: "cheqdid.cheqdnode.cheqd.v1.KeyValuePair";
    key: string;
    value: string;
}
export declare const KeyValuePair: {
    $type: "cheqdid.cheqdnode.cheqd.v1.KeyValuePair";
    encode(message: KeyValuePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyValuePair;
    fromJSON(object: any): KeyValuePair;
    toJSON(message: KeyValuePair): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(object: I): KeyValuePair;
};
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
//# sourceMappingURL=common.d.ts.map