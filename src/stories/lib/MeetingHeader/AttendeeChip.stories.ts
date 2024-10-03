import type { Meta, StoryObj } from '@storybook/react';
import { AttendeeChip } from '../../../../lib/components/MeetingHeader/AttendeeChip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/AttendeeChip',
    component: AttendeeChip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { name: "Speaker 1", index: 1, noBorders: true }
} satisfies Meta<typeof AttendeeChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
    args: {name: "Speaker 1", index: 1, noBorders: false },
};

export const WithLink: Story = {
    args: {name: "Speaker 1", index: 1, link: "https://storybook.js.org/docs/" },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutBorders: Story = {
    args: {name: "Speaker 1", index: 1, noBorders: true },
};

export const CustomAttendeeColorPallet: Story = {
    args: {name: "Speaker 1", index: 1, noBorders: true, attendeesGradientColors: ["lightPink", "brown", "gray"] },
};

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
