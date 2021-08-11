/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MarketFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createMarket(string)": FunctionFragment;
    "logic()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createMarket",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "logic", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;

  events: {
    "marketDeployed(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "marketDeployed"): EventFragment;
}

export class MarketFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MarketFactoryInterface;

  functions: {
    createMarket(
      _foundationLayerURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    logic(overrides?: CallOverrides): Promise<[string]>;
  };

  createMarket(
    _foundationLayerURI: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  logic(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createMarket(
      _foundationLayerURI: string,
      overrides?: CallOverrides
    ): Promise<string>;

    logic(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    marketDeployed(
      contractAddress?: string | null,
      creator?: string | null,
      foundationURI?: null
    ): TypedEventFilter<
      [string, string, string],
      { contractAddress: string; creator: string; foundationURI: string }
    >;
  };

  estimateGas: {
    createMarket(
      _foundationLayerURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    logic(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createMarket(
      _foundationLayerURI: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    logic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
