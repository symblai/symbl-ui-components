# symbl-ui-components

>Integrate Symbl UI components with your application in customized way

## Supported Browsers
The following web browser supported with the Web SDK are given below:

Operating System | Chrome | Edge | Firefox | Safari |
---------- | ------- | ------- | ------ | ------ |
macOS | ✅ | - | ✅ | ✅ | 
Windows | ✅ | ✅ | ✅ | - |
Linux| ✅ | - | ✅ | - | 

## Prerequisites

Before using the Symbl UI Components you must [Sign up with Symbl.ai](https://platform.symbl.ai) to generate your own App ID and App Secret values, which is used for authentication.

## Authentication

To use symbl ui components, you need an access token generated using [Symbl’s Authentication method](https://docs.symbl.ai/docs/developer-tools/authentication/). Alternatively, you can use the App ID and App Secret from the [Symbl Platform](https://platform.symbl.ai). **Using the App ID and App Secret is not meant for production usage, as those are meant be secret.**

## Create new conversation

Create new conversation using one of conversation API by passing `insights` in `featureList` array. Read more [Symbl’s Conversation APIs](https://docs.symbl.ai/docs/overview-process-a-conversation).

## Installation

### Using npm

Install the Web SDK using `npm` with the following command:

```shell
npm i  @symblai/symbl-ui-components
```

### Importing

You can import the Symbl UI Components in your project, ES5 and ES6 syntax:

#### ES6
```js
import {CallScoreWithAPI} from '@symblai/symbl-ui-components';
```

#### ES5
```js
const {CallScoreWithAPI} = require('@symblai/symbl-ui-components');
```

### Importing

Pass generated conversation id and access token to the UI component

```js
<CallScoreWithAPI conversationId={""} accessToken={""} />
```

