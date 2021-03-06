import { BigInt } from "@graphprotocol/graph-ts"
import {
  BNBBlackHole,
  Deposit,
  Withdrawal
} from "../generated/BNBBlackHole/BNBBlackHole"
import { DepositData, WithdrawData, StaticData } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = DepositData.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new DepositData(event.transaction.hash.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.commitment = event.params.commitment
  entity.leafIndex = event.params.leafIndex
  entity.timestamp = event.params.timestamp  
  entity.to = event.transaction.to.toHex()
  entity.from = event.transaction.from.toHex()
  // Entities can be written to the store with `.save()`
  entity.save()

  // Statics Data //  
  let staticDataEntity = StaticData.load(event.transaction.to.toHex())
  
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (staticDataEntity == null) {
    staticDataEntity = new StaticData(event.transaction.to.toHex())

    // Entity fields can be set using simple assignments
    staticDataEntity.depositCount = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  staticDataEntity.depositCount = staticDataEntity.depositCount + BigInt.fromI32(1)
  // Entities can be written to the store with `.save()`
  staticDataEntity.save()
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
7  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.FIELD_SIZE(...)
  // - contract.ROOT_HISTORY_SIZE(...)
  // - contract.ZERO_VALUE(...)
  // - contract.commitments(...)
  // - contract.currentRootIndex(...)
  // - contract.denomination(...)
  // - contract.filledSubtrees(...)
  // - contract.getLastRoot(...)
  // - contract.hashLeftRight(...)
  // - contract.isKnownRoot(...)
  // - contract.isSpent(...)
  // - contract.isSpentArray(...)
  // - contract.levels(...)
  // - contract.nextIndex(...)
  // - contract.nullifierHashes(...)
  // - contract.operator(...)
  // - contract.roots(...)
  // - contract.verifier(...)
  // - contract.zeros(...)
}

export function handleWithdrawal(event: Withdrawal): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = WithdrawData.load(event.transaction.hash.toHex())
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new WithdrawData(event.transaction.hash.toHex())
  }    
  // Entity fields can be set based on event parameters    
  entity.nullifierHash = event.params.nullifierHash
  entity.to = event.params.to
  entity.relayer = event.params.relayer
  entity.fee = event.params.fee
  entity.timestamp  = event.block.timestamp
  entity.from = event.transaction.to.toHex()   // which contract address does withdrawl?
  // Entities can be written to the store with `.save()`
  entity.save()
}
