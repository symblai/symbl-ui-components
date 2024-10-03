import type { Meta, StoryObj } from '@storybook/react';
import { CallStage } from '../../../../lib/components/MeetingHeader/CallStage';
import "./meetingHeader.css";
import LadderIcon from "../../assets/Ladder.svg?react"
const meta = {
    title: 'v0.0.0/MeetingHeader/CallStage',
    component: CallStage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {callStage: "General", classes: {}}
} satisfies Meta<typeof CallStage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        callStage: "General"
    },
};
export const CustomIcon: Story = {
    args: {
        callStage: "General",
        icon: <LadderIcon style={{width: "20px", height: "20px"}}/>
    },
};

export const CustomStyling: Story = {
    args: {
        callStage: "General",
        classes: {
            icon: 'small-icon',
            headerField: 'custom--attendees-header-field',
        }
    },
};
