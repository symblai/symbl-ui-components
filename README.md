# symbl-ui-components

You can read the docs for the Symbl UI Components at https://docs.symbl.ai/docs/ui-components

>Integrate Symbl UI components with your application in customized way

To view, test and experience the UI components and the customization options available, visit storybook at https://symbl-ui-components-demo.symbl.ai/

## Supported Browsers
The following web browsers supported with the Symbl UI Components are given below:

Operating System | Chrome | Edge | Firefox | Safari |
---------- | ------- | ------- | ------ | ------ |
macOS | ✅ | - | ✅ | ✅ | 
Windows | ✅ | ✅ | ✅ | - |
Linux| ✅ | - | ✅ | - | 

## Prerequisites

Before using the Symbl UI Components you must [Sign up with Symbl.ai](https://platform.symbl.ai) to generate your own App ID and App Secret values, which is used for authentication.

## Authentication

To use symbl ui components, you need an access token generated using [Symbl’s Authentication method](https://docs.symbl.ai/docs/developer-tools/authentication/). Alternatively, you can use the App ID and App Secret from the [Symbl Platform](https://platform.symbl.ai). **Using the App ID and App Secret is not meant for production usage, as those are meant be secret.**

## Process a conversation

Process a conversation using one of async or streaming API by passing `insights` and `callScore` in `featureList` array. Read more [Process a conversation](https://docs.symbl.ai/docs/overview-process-a-conversation).
```js
features: {
    featureList: ["insights", "callScore"]
}
```

## Installation

### Using npm

Install the Symbl UI Component Library using `npm` with the following command:

```shell
npm i  @symblai/symbl-ui-components
```

### Importing

You can import the Symbl UI Components in your project, ES5 and ES6 syntax. For eg - For importing CallScore Component, use the following:

#### ES6
```js
import {CallScore} from '@symblai/symbl-ui-components';
```

#### ES5
```js
const {CallScore} = require('@symblai/symbl-ui-components');
```

### Importing

Pass generated conversation id and access token to the UI component

```js
<CallScore conversationId={""} accessToken={""} />
```

