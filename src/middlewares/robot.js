import { CHATS_MESSAGE_SEND, chatsMessageSend } from 'actions/chats';

const timers = {};

export default (store) => (next) => (action) => {
  if (action.type === CHATS_MESSAGE_SEND) {
    const { chatIndex, author } = action.payload;
    if (author !== 'NDR-114') {
      clearTimeout(timers[chatIndex]);
      timers[chatIndex] = setTimeout(() => {
        store.dispatch(
          chatsMessageSend({
            chatIndex,
            author: 'NDR-114',
            content: `Hello, ${author}, my name is Andrew`,
          }),
        );
      }, 1000);
    }
  }
  return next(action);
};
