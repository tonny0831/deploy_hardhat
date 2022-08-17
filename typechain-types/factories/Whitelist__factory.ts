/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Whitelist, WhitelistInterface } from "../Whitelist";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxWhitelistAddresses",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Whitelist_alreadyExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Whitelist_limitOverflow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "whitelistAddress",
        type: "address",
      },
    ],
    name: "addressAdded",
    type: "event",
  },
  {
    inputs: [],
    name: "addAddressToWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressesListedCount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxWhitelistAddresses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getWhitelistAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106b93803806106b983398181016040528101906100329190610090565b806000806101000a81548160ff021916908360ff160217905550506100bd565b600080fd5b600060ff82169050919050565b61006d81610057565b811461007857600080fd5b50565b60008151905061008a81610064565b92915050565b6000602082840312156100a6576100a5610052565b5b60006100b48482850161007b565b91505092915050565b6105ed806100cc6000396000f3fe608060405234801561001057600080fd5b506004361061004b5760003560e01c8062764f9e1461005057806313f27744146100805780638f4e97a01461008a578063a2da99d3146100a8575b600080fd5b61006a60048036038101906100659190610372565b6100c6565b60405161007791906103ba565b60405180910390f35b61008861011c565b005b6100926102e2565b60405161009f91906103f1565b60405180910390f35b6100b06102f9565b6040516100bd91906103f1565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156101ab57336040517fe769e2950000000000000000000000000000000000000000000000000000000081526004016101a2919061049e565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff161061020f576040517ff553c1110000000000000000000000000000000000000000000000000000000081526004016102069061053e565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600081819054906101000a900460ff16809291906102859061058d565b91906101000a81548160ff021916908360ff160217905550503373ffffffffffffffffffffffffffffffffffffffff167e72d7b5a6d066b81369ec908346284f0add888ef544b447dc56a6b58fd59f7f60405160405180910390a2565b6000600260009054906101000a900460ff16905090565b60008060009054906101000a900460ff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061033f82610314565b9050919050565b61034f81610334565b811461035a57600080fd5b50565b60008135905061036c81610346565b92915050565b6000602082840312156103885761038761030f565b5b60006103968482850161035d565b91505092915050565b60008115159050919050565b6103b48161039f565b82525050565b60006020820190506103cf60008301846103ab565b92915050565b600060ff82169050919050565b6103eb816103d5565b82525050565b600060208201905061040660008301846103e2565b92915050565b61041581610334565b82525050565b600082825260208201905092915050565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b600061048860238361041b565b91506104938261042c565b604082019050919050565b60006040820190506104b3600083018461040c565b81810360208301526104c48161047b565b905092915050565b7f4d6f7265206164647265737365732063616e742062652061646465642c206c6960008201527f6d69742072656163686564000000000000000000000000000000000000000000602082015250565b6000610528602b8361041b565b9150610533826104cc565b604082019050919050565b600060208201905081810360008301526105578161051b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610598826103d5565b915060ff8214156105ac576105ab61055e565b5b60018201905091905056fea2646970667358221220678e267ba53f7708eb9e09a4f36459faca433047d453cea850bcaf94e5894c5d64736f6c63430008090033";

type WhitelistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitelistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Whitelist__factory extends ContractFactory {
  constructor(...args: WhitelistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _maxWhitelistAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Whitelist> {
    return super.deploy(
      _maxWhitelistAddresses,
      overrides || {}
    ) as Promise<Whitelist>;
  }
  override getDeployTransaction(
    _maxWhitelistAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_maxWhitelistAddresses, overrides || {});
  }
  override attach(address: string): Whitelist {
    return super.attach(address) as Whitelist;
  }
  override connect(signer: Signer): Whitelist__factory {
    return super.connect(signer) as Whitelist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistInterface {
    return new utils.Interface(_abi) as WhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelist {
    return new Contract(address, _abi, signerOrProvider) as Whitelist;
  }
}
