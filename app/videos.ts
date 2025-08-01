export interface Video {
  index: number;
  id: string;
  title: string;
  url: string;
  shorts: string[];
  code: string;
}

export const videos: Video[] = [
  {
    index: 1,
    id: "9-Dg1JV-A3s",
    title: "Hello World: pt 1",
    url: "https://www.youtube.com/watch?v=9-Dg1JV-A3s",
    shorts: [
      "qG5y4fDJbDk",
      "5dHGYIrbQLA",
      "LkpBeZDwuU0",
      "fHlSZRY0_fA",
      "ZPbj8nsF_Fs",
      "vYxx-FbkEDc",
      "smIwyjP13IY",
      "svHxvn3Fh1M",
      "em92oRa1KOs",
      "ZjgltVAz4V8",
      "9EkptZDP1S4",
      "H-9T-NWnMBc",
    ],
    code: `

  use aiken/collection/list
  use aiken/crypto.{VerificationKeyHash}
  use aiken/primitive/string
  use cardano/transaction.{OutputReference, Transaction}
  
  pub type Datum {
    owner: VerificationKeyHash,
  }
  
  pub type Redeemer {
    msg: ByteArray,
  }
  
  validator hello_world {
    spend(
      datum: Option<Datum>,
      redeemer: Redeemer,
      _own_ref: OutputReference,
      self: Transaction,
    ) {
      trace @"redeemer": string.from_bytearray(redeemer.msg)
      expect Some(Datum { owner }) = datum
      let must_say_hello = redeemer.msg == "Hello, World!"
      let must_be_signed = list.has(self.extra_signatories, owner)
      must_say_hello? && must_be_signed?
    }
  
    else(_) {
      fail
    }
  }
  
  test hello_world_example_1() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Aiken Rocks!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      transaction.placeholder,
    )
  }
  
  test hello_world_example_2() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Hello, World!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      transaction.placeholder,
    )
  }
  
  test hello_world_example_3() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Hello, World!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      Transaction { ..transaction.placeholder, extra_signatories: [datum.owner] },
    )
  }
    `,
  },
  {
    index: 2,
    id: "FK4YAarinvA",
    title: "Hello World: pt 2",
    url: "https://www.youtube.com/watch?v=FK4YAarinvA",
    shorts: [
      "LA-exHepAqo",
      "A-CE-OpOGo0",
      "tqr3tx6mof8",
      "WbwNXhOxR4c",
      "nhtsUCaXAuo",
      "pXReC4PX2zU",
      "2xb6goKIDyE",
      "TpL_nzz-7Ec",
      "eO-qWHueE3k",
      "PJvVdj7OcD0",
    ],
    code: `

   use aiken/collection/list
  use aiken/crypto.{VerificationKeyHash}
  use aiken/primitive/string
  use cardano/transaction.{OutputReference, Transaction}
  
  pub type Datum {
    owner: VerificationKeyHash,
  }
  
  pub type Redeemer {
    msg: ByteArray,
  }
  
  validator hello_world {
    spend(
      datum: Option<Datum>,
      redeemer: Redeemer,
      _own_ref: OutputReference,
      self: Transaction,
    ) {
      trace @"redeemer": string.from_bytearray(redeemer.msg)
      expect Some(Datum { owner }) = datum
      let must_say_hello = redeemer.msg == "Hello, World!"
      let must_be_signed = list.has(self.extra_signatories, owner)
      must_say_hello? && must_be_signed?
    }
  
    else(_) {
      fail
    }
  }
  
  test hello_world_example_1() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Aiken Rocks!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      transaction.placeholder,
    )
  }
  
  test hello_world_example_2() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Hello, World!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      transaction.placeholder,
    )
  }
  
  test hello_world_example_3() {
    let datum =
      Datum { owner: #"00000000000000000000000000000000000000000000000000000000" }
    let redeemer = Redeemer { msg: "Hello, World!" }
    let placeholder_utxo = OutputReference { transaction_id: "", output_index: 0 }
    hello_world.spend(
      Some(datum),
      redeemer,
      placeholder_utxo,
      Transaction { ..transaction.placeholder, extra_signatories: [datum.owner] },
    )
  }
    `,
  },
];
