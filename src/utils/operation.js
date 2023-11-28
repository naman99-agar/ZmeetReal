// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import { tezos } from "./tezos";

export const buyTicketOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1XaDtz3rGKvKQQkiy61VsT49Fd8QVn2fxA"
    );
    const op = await contract.methods.buy_ticket().send({
      amount: 1,
      mutez: false,
    });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1XaDtz3rGKvKQQkiy61VsT49Fd8QVn2fxA"
    );
    const op = await contract.methods.end_game().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const tempFuncCall = async () => {
  try {
    const contract = await tezos.wallet.at(
      "KT1GTgiWhfW5bdBCbsBVKEeEnPJNftHs4uzp"
    );
    const op = await contract.methods
      .poke(1, "tz1ZRFzk6pyiTqL25tSPLftc2VJtWGQWA6RA")
      .send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
