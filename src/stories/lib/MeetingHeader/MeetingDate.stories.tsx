import type { Meta, StoryObj } from '@storybook/react';
import { MeetingDate } from '../../../../lib/components/MeetingHeader/MeetingDate';
import "./meetingHeader.css";
import CalenderIcon from "../../assets/calendar.svg?react"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/MeetingDate',
    component: MeetingDate,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {dateTime: "2023-09-08T09:21:11.000Z"}
} satisfies Meta<typeof MeetingDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z",
        icon: null
    },
};

export const CustomIcon: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z",
        icon: <CalenderIcon style={{width: "20px", height: "20px"}}/>
    },
};
export const CustomStyling: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z",
        classes: {
            icon: 'svg-icon',
            headerField: 'custom-header-field'
        },
        icon: null
    },
}
