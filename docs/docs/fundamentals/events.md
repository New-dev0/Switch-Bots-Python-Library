---
sidebar_position: 2
---

# Events

SwiBots is an event-driven framework. This means that the framework is designed to respond to events. Events are the primary way that SwiBots interacts with the outside world. Events are generated by the network, by the user, or by the framework itself. Events are handled by [handlers](./handlers).

## Event types

There are several types of events that can be handled by SwiBots:

#### `Generic event`
All events inherit from the `Event` class. This class contains the following properties:

- `type:EventType` - The type of the event.
- `community_id:str` - The ID of the community where the event was triggered.
- `community:Community`- The community where the event was triggered.
- `channel_id:str`- The ID of the channel where the event was triggered.
- `channel:Channel`- The channel where the event was triggered.
- `group_id:str` - The ID of the group where the event was triggered.
- `group:Group` - The group where the event was triggered.
- `action_by_id:str` - The ID of the user that triggered the event.
- `action_by:User` - The user that triggered the event.

### Chat events

#### `MessageEvent`
A message was sent to a chat.

**Additional properties:**
- `message:Message` - The message that was sent.
- `message_id:str` - The ID of the message that was sent.
- `user_id:str` - The ID of the user that sent the message.
- `user:User` - The user that sent the message.
- `receiver_id:str` - The ID of the user that received the message.
- `receiver:User` - The user that received the message.


#### `ComandEvent`
A command was sent to a chat.

**Additional properties:**
- `command:str` - The command name.
- `args:str` - The arguments (the message text without the command name and the '/').
- `message:Message` - The message that was sent.
- `message_id:str` - The ID of the message that was sent.
- `user_id:str` - The ID of the user that sent the message.
- `user:User` - The user that sent the message.
- `receiver_id:str` - The ID of the user that received the message.
- `receiver:User` - The user that received the message.


#### `CallbackQueryEvent` 
A query callback was sent (user pressed a button, for example).
- `callback_data:str` - The callback data.
- `command:str` - The command name.
- `args:str` - The arguments (the message text without the command name and the '/').
- `message:Message` - The message that was sent.
- `message_id:str` - The ID of the message that was sent.
- `user_id:str` - The ID of the user that sent the message.
- `user:User` - The user that sent the message.
- `receiver_id:str` - The ID of the user that received the message.
- `receiver:User` - The user that received the message.

#### `InlineQueryEvent`
An inline query was sent. This event is triggered when a user starts typing '@botname' in a chat.
- `query_id:str` - The unique identifier of this query.
- `query:str` - The text of the query.
- `offset:str` - The offset of the results to be returned, can be controlled by the bot (when you handle this event and set the next_offset value, the value will be returned in this field).

### Community events

These events inherit from the `Event` class. **And none of them have additional properties.**

- `CommunityUpdatedEvent` - A community was updated
- `MemberJoinedEvent` - A community was joined by an user
- `MemberLeftEvent` - A community was left by an user
- `ChannelCreatedEvent` - A channel was created
- `ChannelUpdatedEvent` - A channel was updated
- `ChannelDeletedEvent` - A channel was deleted
- `GroupCreatedEvent` - A group was created
- `GroupUpdatedEvent` - A group was updated
- `GroupDeletedEvent` - A group was deleted
- `UserBannedEvent` - An user was banned
