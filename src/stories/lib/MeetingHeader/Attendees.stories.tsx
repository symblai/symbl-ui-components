import type { Meta, StoryObj } from '@storybook/react';
import { Attendees } from '../../../../lib/components/MeetingHeader/Attendees';
import "./meetingHeader.css";
import UsersIcon from "../../assets/users.svg?react"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/Attendees',
    component: Attendees,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {attendees: [{name: "Speaker 1"}, {name: "Speaker 2"}, {name: "Speaker 3"}]}
} satisfies Meta<typeof Attendees>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        attendees: [{name: "Speaker 1"}, {name: "Speaker 2"}, {name: "Speaker 3"}]
    },
};

export const AttendeesWithExternalLink: Story = {
    args: {
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"}, {name: "Speaker 2", link: "https://salesforce/speaker-2"}, {name: "Speaker 3", link: "https://salesforce/speaker-3"}]
    },
};
export const CustomIcon: Story = {
    args: {
        attendees: [{name: "Speaker 1"}, {name: "Speaker 2"}, {name: "Speaker 3"}],
        icon: <UsersIcon style={{width: "20px", height: "20px"}}/>
    },
};

export const CustomStyling: Story = {
    args: {
        attendees: [{name: "Speaker 1"}, {name: "Speaker 2"}, {name: "Speaker 3"}],
        classes: {
            icon: 'small-icon',
            headerField: 'custom--attendees-header-field',
            attendeesDropdown: 'custom-attendee-dropdown'
        }
    },
}
export const CustomAttendeeColorPallet: Story = {
    args: {
        attendees: [{name: "Speaker 1"}, {name: "Speaker 2"}, {name: "Speaker 3"}],
        attendeesGradientColors: ["lightPink", "brown", "gray"]
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
