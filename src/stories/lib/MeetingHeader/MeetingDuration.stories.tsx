import type { Meta, StoryObj } from '@storybook/react';
import { MeetingDuration } from '../../../../lib/components/MeetingHeader/MeetingDuration';
import "./meetingHeader.css";
import DurationIcon from "../../assets/Duration.svg?react"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/MeetingDuration',
    component: MeetingDuration,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {duration: "0:12:04"}
} satisfies Meta<typeof MeetingDuration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        duration: "0:12:04",
        icon: null
    },
};

export const CustomIcon: Story = {
    args: {
        duration: "0:12:04",
        icon: <DurationIcon style={{width: "20px", height: "20px"}}/>
    },
};

export const CustomStyling: Story = {
    args: {
        duration: "0:12:04",
        classes: {
            icon: 'svg-icon',
            headerField: 'custom-header-field'
        }
    },
}