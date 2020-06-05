import update from 'react-addons-update';
import {
  CHATS_MESSAGE_SEND,
  CHATS_ADD,
  CHATS_DELETE,
  CHATS_MARKED,
  CHATS_NOT_MARKED,
  CHATS_ACTIVE,
  CHATS_NOT_ACTIVE,
  CHATS_REQUEST,
  CHATS_SUCCESS,
  CHATS_FAILURE,
} from 'actions/chats';

const initialState = {
  loading: false,
  entries: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHATS_MESSAGE_SEND:
      return update(state, {
        entries: {
          [action.payload.chatIndex]: {
            messages: {
              $push: [
                {
                  author: action.payload.author,
                  content: action.payload.content,
                },
              ],
            },
          },
        },
      });
    case CHATS_ADD:
      return update(state, {
        entries: {
          $merge: {
            [action.payload.newChatIndex]: {
              id: action.payload.id,
              name: action.payload.name,
              messages: [],
              unread: false,
              avatarSrc: action.payload.avatarSrc,
            },
          },
        },
      });
    case CHATS_DELETE:
      return update(state, {
        $merge: {
          entries: { ...action.payload.newState },
        },
      });
    case CHATS_MARKED:
      return update(state, {
        entries: {
          [action.payload.chatIndex]: {
            $merge: {
              marked: true,
            },
          },
        },
      });
    case CHATS_NOT_MARKED:
      return update(state, {
        entries: {
          [action.payload.index]: {
            $merge: {
              marked: false,
            },
          },
        },
      });
    case CHATS_ACTIVE:
      return update(state, {
        entries: {
          [action.payload.chatIndex]: {
            $merge: {
              unread: true,
            },
          },
        },
      });
    case CHATS_NOT_ACTIVE:
      if (!state.entries[action.payload.chatIndex]) {
        return state;
      }
      return update(state, {
        entries: {
          [action.payload.chatIndex]: {
            $merge: {
              unread: false,
            },
          },
        },
      });
    case CHATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
      };
    case CHATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
