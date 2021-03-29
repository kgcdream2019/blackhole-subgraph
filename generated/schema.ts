// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DepositData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DepositData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DepositData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DepositData", id.toString(), this);
  }

  static load(id: string): DepositData | null {
    return store.get("DepositData", id) as DepositData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get commitment(): Bytes {
    let value = this.get("commitment");
    return value.toBytes();
  }

  set commitment(value: Bytes) {
    this.set("commitment", Value.fromBytes(value));
  }

  get leafIndex(): BigInt {
    let value = this.get("leafIndex");
    return value.toBigInt();
  }

  set leafIndex(value: BigInt) {
    this.set("leafIndex", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class WithdrawData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawData", id.toString(), this);
  }

  static load(id: string): WithdrawData | null {
    return store.get("WithdrawData", id) as WithdrawData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get nullifierHash(): Bytes {
    let value = this.get("nullifierHash");
    return value.toBytes();
  }

  set nullifierHash(value: Bytes) {
    this.set("nullifierHash", Value.fromBytes(value));
  }

  get relayer(): Bytes {
    let value = this.get("relayer");
    return value.toBytes();
  }

  set relayer(value: Bytes) {
    this.set("relayer", Value.fromBytes(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }
}
