/**
 * Central dictionary for Socket.io events to prevent typing errors across the app
 */
export const SOCKET_EVENTS = {
  // Connection Events
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  CONNECT_ERROR: 'connect_error',
  RECONNECT: 'reconnect',

  // Chat Events
  CHAT: {
    JOIN_ROOM: 'chat:join_room',
    LEAVE_ROOM: 'chat:leave_room',
    SEND_MESSAGE: 'chat:send_message',
    RECEIVE_MESSAGE: 'chat:receive_message',
    TYPING_START: 'chat:typing_start',
    TYPING_STOP: 'chat:typing_stop',
    USER_TYPING: 'chat:user_typing',
  },

  // Notification / Real-time System Events
  NOTIFICATIONS: {
    NEW_NOTIFICATION: 'notification:new',
  },

  // Dashboard Live Stream
  DASHBOARD: {
    METRIC_UPDATE: 'dashboard:metric_update',
    USER_ONLINE: 'dashboard:user_online',
  },
};
