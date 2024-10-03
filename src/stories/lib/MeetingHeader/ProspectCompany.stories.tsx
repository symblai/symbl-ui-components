import type { Meta, StoryObj } from '@storybook/react';
import { ProspectCompany } from '../../../../lib/components/MeetingHeader/ProspectCompany';
import "./meetingHeader.css";
import CompanyIcon from "../../assets/Company.svg?react"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'v0.0.0/MeetingHeader/ProspectCompany',
    component: ProspectCompany,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {prospectCompany: "Prospect 1"}
} satisfies Meta<typeof ProspectCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        prospectCompany: "Prospect 1"
    },
};
export const CustomIcon: Story = {
    args: {
        prospectCompany: "Prospect 1",
        icon: <CompanyIcon style={{width: "20px", height: "20px"}}/>
    },
};

export const CustomStyling: Story = {
    args: {
        prospectCompany: "Prospect 1",
        classes: {
            icon: 'small-icon',
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
