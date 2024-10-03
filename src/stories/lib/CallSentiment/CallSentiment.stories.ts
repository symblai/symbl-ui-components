import type { Meta, StoryObj } from '@storybook/react';
import {callSentimentData} from "./callSentimentData.ts";
import {CallSentiment} from "../../../../lib/components/CallSentiment";
import "./callSentiment.css";

const meta = {
    title: 'v0.0.0/CallSentiment',
    component: CallSentiment,
    parameters: {
        // layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary
    },
} satisfies Meta<typeof CallSentiment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleCallSentiment: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary
    },
} satisfies Story;

export const HiddenOverallSentiment: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary,
        displayConfig: {
            hideOverallSentiment: true
        }
    },
} satisfies Story;

export const HiddenCallSentimentSummary: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary,
        displayConfig: {
            hideSummary: true
        }
    },
} satisfies Story;

export const HiddenTitleBar: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary,
        displayConfig: {
            hideTitleBar: true
        }
    },
} satisfies Story;

export const CustomStyling: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        overallSentiment: callSentimentData.overallSentiment,
        summary: callSentimentData.summary,
        classes: {
            container: "call-sentiment-container",
            titleBar: "title-bar",
            chartContainer: "sentiment-chart",
            chartTooltip: "sentiment-chart-tooltip",
        }
    },
} satisfies Story;