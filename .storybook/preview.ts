import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // storySort: (a, b) => {
      //   console.log("!!!!!!!! ", a.type)
      //   return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
      // },

      storySort: {
        order: ['v0.0.0', ["MeetingSummary", "MeetingHeader"], ["CallStage", 'AttendeeChip'], "Example", 'Button', "Page", "Header"]
      },

      // storySort: (story1, story2) => {
      //   console.log("!!!!!!! ", story1.id)
      //   return globalThis['storybook-multilevel-sort:storySort'](story1, story2)
      // },
      typeOrder: ['docs', 'story']
    },
  },
};

export default preview;
