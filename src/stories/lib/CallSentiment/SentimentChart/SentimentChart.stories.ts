import type { Meta, StoryObj } from '@storybook/react';
import {SentimentChart} from "./SentimentChart.tsx";
import {callSentimentData} from "../callSentimentData.ts";
import "../callSentiment.css";

const meta = {
    title: 'v0.0.0/CallSentiment/SentimentChart',
    component: SentimentChart,
    parameters: {
        // layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        callSentiments: callSentimentData.chunks
    },
} satisfies Meta<typeof SentimentChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleSentimentChart: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks
    },
} satisfies Story;

export const DifferentChartColors: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        chartBackgroundColors: ["#d378f200", "#d378f240"],
        chartColors: [ "yellow", "pink"],
        chartBorderWidth: 3
    },
} satisfies Story;


export const HideTooltip: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        hideSummaryTooltip: true
    },
} satisfies Story;

export const ChangeTooltipSentimentColors: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        toolTipSentimentColors: {
            positiveText: "black",
            negativeText: "red",
            neutralText: "brown",
            positiveBackground: "lightgreen",
            negativeBackground: "pink",
            neutralBackground: "yellow"
        }
    },
} satisfies Story;

export const CustomizeLookAndFeelWithClasses: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callSentiments: callSentimentData.chunks,
        classes: {
            container: "sentiment-chart",
            tooltip: "sentiment-chart-tooltip"
        }
    },
} satisfies Story;
