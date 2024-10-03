import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MeetingHeader } from '../../../../lib/components/MeetingHeader';
import "./meetingHeader.css"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader',
    component: MeetingHeader,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { title: "Contact Support call center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1"},{name: "Speaker 2"}],
        showAttendeeNames: false
    },
} satisfies Meta<typeof MeetingHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SampleMeetingHeader: Story = {
    args: {
        title: "Contact Support call center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"},{name: "Speaker 2", link: "https://salesforce/speaker-2"}],
        showAttendeeNames: false
    },
};

export const WithMeetingLink: Story = {
    args: {
        title: "Contact Support call center",
        meetingLink: "https://salesforce/contact-support-call-center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"},{name: "Speaker 2", link: "https://salesforce/speaker-2"}],
        showAttendeeNames: false
    },
};

export const ShowAttendeeNames: Story = {
    args: {
        title: "Contact Support call center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"},{name: "Speaker 2", link: "https://salesforce/speaker-2"}],
        showAttendeeNames: true
    },
};

export const CustomAttendeeGradientColors: Story = {
    args: {
        title: "Contact Support call center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"},{name: "Speaker 2", link: "https://salesforce/speaker-2"}],
        showAttendeeNames: true,
        attendeesGradientColors: ["lightPink", "grey"]
    },
};

export const CustomStyling: Story = {
    args: {
        title: "Contact Support call center",
        dateTime: "2023-09-08T09:21:11.000Z",
        duration: "0:12:04",
        prospectCompany: "Prospect 1",
        callStage: "General",
        attendees: [{name: "Speaker 1", link: "https://salesforce/speaker-1"},{name: "Speaker 2", link: "https://salesforce/speaker-2"}],
        showAttendeeNames: false,
        attendeesGradientColors: ["grey", "brown"],
        classes: {
            container: "custom-meeting-header-container",
            meetingTitle: "custom-meeting-title",
            icons: {
                date: "svg-icon",
                time: "svg-icon",
                duration: "svg-icon",
                prospectCompany: "small-icon",
                callStage: "small-icon",
                attendees: "small-icon",
            },
            headerFields: {
                date: "custom-header-field",
                time: "custom-header-field",
                duration: "custom-header-field",
                prospectCompany: "custom-header-field",
                callStage: "custom-header-field",
                attendees: "custom--attendees-header-field",
            },
            attendeesDropdown: "custom-attendee-dropdown"
        }
    },
};