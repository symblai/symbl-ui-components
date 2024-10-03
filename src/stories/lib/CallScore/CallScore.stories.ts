import type { Meta, StoryObj } from '@storybook/react';
import { CallScore } from '../../../../lib/components/CallScore';
import {callScoreData} from "./callScoreData";
import "./callScore.css";

const meta = {
    title: 'v0.0.0/CallScore',
    component: CallScore,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary
    }
} satisfies Meta<typeof CallScore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleCallScore: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary
    },
}

export const HideCallScoreFactorDetails: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary,
        displayConfig: {
            hideFactorDetails: true
        }
    },
}
export const HideCallScoreFactorsSummary: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary,
        displayConfig: {
            hideFactorsSummary: true
        }
    },
}

export const HideCallScoreSummary: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary,
        displayConfig: {
            hideSummary: true
        }
    },
}

export const CustomStyling: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary,
        classes: {
            container: "call-score-main-container",
            title: "call-score-title",
            factorsSummaryContainer: "call-score-summary-container",
            factorSummaryTotalScore: "total-score-container",
            factorSummaryFactor: "factor-container",
            factorSummaryTooltip: "custom-call-summary-tooltip",
            factorDetailsContainer: "call-score-factor-details-container",
            factorDetailsTitle: 'factor-subject',
            factorDetailsAnswer: 'factor-answer',
        }
    },
}
export const CustomColors: Story = {
    parameters: {
        layout: 'padded',
    },
    args: {
        callScore: callScoreData.score,
        factors: callScoreData.criteria,
        summary: callScoreData.summary,
        colors: {
            "positiveTextColor": "black",
            "negativeTextColor": "red",
            "neutralTextColor": "brown",
            "positiveBackgroundColor": "lightgreen",
            "negativeBackgroundColor": "pink",
            "neutralBackgroundColor": "yellow"
        }
    },
}