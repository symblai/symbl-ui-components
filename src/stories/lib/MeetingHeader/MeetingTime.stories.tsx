import type { Meta, StoryObj } from '@storybook/react';
import { MeetingTime } from '../../../../lib/components/MeetingHeader/MeetingTime';
import "./meetingHeader.css";
import TimeIcon from "../../assets/Time.svg?react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/MeetingTime',
    component: MeetingTime,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {dateTime: "2023-09-08T09:21:11.000Z"}
} satisfies Meta<typeof MeetingTime>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z"
    },
};

export const CustomIcon: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z",
        icon: <TimeIcon style={{width: "20px", height: "20px"}}/>
    },
};

export const CustomStyling: Story = {
    args: {
        dateTime: "2023-09-08T09:21:11.000Z",
        classes: {
            icon: 'svg-icon',
            headerField: 'custom-header-field'
        }
    },
}


// export const Secondary: Story = {
//     args: {
//         label: 'Button',
//     },
// };
//
// export const Large: Story = {
//     args: {
//         size: 'large',
//         label: 'Button',
//     },
// };
//
// export const Small: Story = {
//     args: {
//         size: 'small',
//         label: 'Button',
//     },
// };
