import type { Meta, StoryObj } from '@storybook/react';
import { CallSentimentWithAPI } from '../../../../lib/components/WithAPI/CallSentimentWithAPI';
import {ACCESS_TOKEN, CONVERSATION_ID, INVALID_CONVERSATION_ID} from "../contants.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/WithAPI/CallSentimentWithAPI',
    component: CallSentimentWithAPI,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID
    },
} satisfies Meta<typeof CallSentimentWithAPI>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SampleCallSentiment: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID
    },
};

export const AccessTokenNotPassed: Story = {
    args: {
        accessToken: null,
        conversationId: INVALID_CONVERSATION_ID,
    },
};
export const DataNotFound: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: INVALID_CONVERSATION_ID,
    },
};
export const CustomErrorMessage: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: INVALID_CONVERSATION_ID,
        customErrorMessage: "Couldn't load Meeting Summary"
    },
};
export const CustomLoader: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID,
        customLoader: <p>Loading...</p>
    },
};