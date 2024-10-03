import type { Meta, StoryObj } from '@storybook/react';
import { MeetingHeader } from '../../../../lib/components/WithAPI/MeetingHeaderWithAPI';
import {ACCESS_TOKEN, CONVERSATION_ID, INVALID_CONVERSATION_ID} from "../contants.ts";
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
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID
    },
} satisfies Meta<typeof MeetingHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SampleMeetingHeader: Story = {
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

export const WithMeetingLink: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID,
        meetingLink: "https://salesforce/contact-support-call-center",
        showAttendeeNames: false
    },
};

export const ShowAttendeeNames: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID,
        showAttendeeNames: true
    },
};

export const CustomAttendeeGradientColors: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID,
        showAttendeeNames: true,
        attendeesGradientColors: ["lightPink", "grey"]
    },
};

export const CustomStyling: Story = {
    args: {
        accessToken: ACCESS_TOKEN,
        conversationId: CONVERSATION_ID,
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