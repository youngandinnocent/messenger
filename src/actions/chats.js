export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_DELETE = 'CHATS_DELETE';
export const CHATS_MARKED = 'CHATS_MARKED';
export const CHATS_NOT_MARKED = 'CHATS_NOT_MARKED';
export const CHATS_ACTIVE = 'CHATS_ACTIVE';
export const CHATS_NOT_ACTIVE = 'CHATS_NOT_ACTIVE';
export const CHATS_REQUEST = 'CHATS_LOAD/CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_LOAD/CHATS_SUCCESS';
export const CHATS_FAILURE = 'CHATS_LOAD/CHATS_FAILURE';

export const chatsMessageSend = (message) => ({
  type: CHATS_MESSAGE_SEND,
  payload: message,
});

export const chatsAdd = (chat) => ({
  type: CHATS_ADD,
  payload: chat,
});

export const chatsDelete = (newState) => ({
  type: CHATS_DELETE,
  payload: newState,
});

export const chatsMarked = (chatIndex) => ({
  type: CHATS_MARKED,
  payload: chatIndex,
});

export const chatsNotMarked = (chatIndex) => ({
  type: CHATS_NOT_MARKED,
  payload: chatIndex,
});

export const chatsActive = (chatIndex) => ({
  type: CHATS_ACTIVE,
  payload: chatIndex,
});

export const chatsNotActive = (chatIndex) => ({
  type: CHATS_NOT_ACTIVE,
  payload: chatIndex,
});

export const chatsLoadRequest = () => ({
  type: CHATS_REQUEST,
});

export const chatsLoadSuccess = (data) => ({
  type: CHATS_SUCCESS,
  payload: data,
});

export const chatsLoadFailure = (error) => ({
  type: CHATS_FAILURE,
  payload: error,
});

export const chatsLoad = () => async (dispatch) => {
  try {
    dispatch(chatsLoadRequest());
    const result = await fetch('/api/chats.json');
    dispatch(chatsLoadSuccess(await result.json()));
  } catch (error) {
    dispatch(chatsLoadFailure(error));
  }
};
