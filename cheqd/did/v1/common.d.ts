import _m0 from "protobufjs/minimal";
export interface KeyValuePair {
    key: string;
    value: string;
}
export declare const KeyValuePair: {
    encode(message: KeyValuePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyValuePair;
    fromJSON(object: any): KeyValuePair;
    toJSON(message: KeyValuePair): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeyValuePair>]: never; }>(object: I): KeyValuePair;
};
//# sourceMappingURL=common.d.ts.map