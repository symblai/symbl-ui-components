import type { StorybookConfig } from "@storybook/react-vite";
import {mergeConfig} from "vite";
// import { configureSort } from 'storybook-multilevel-sort'
//
// configureSort({
//   storyOrder: {
//     example: {
//       '*': { default: null }
//     },
//     '**': { default: null }
//   }
// })

const config: StorybookConfig = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: 'react-docgen',
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json',
    },
  }
};
export default config;


// Replace your-framework with the framework you are using (e.g., react-webpack5, react-vite)
// import type { StorybookConfig } from '@storybook/react-vite';
//
// const config: StorybookConfig = {
//   framework: "@storybook/react-vite",
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   typescript: {
//     reactDocgen: 'react-docgen-typescript',
//     // Provide your own options if necessary.
//     // See https://storybook.js.org/docs/configure/typescript for more information.
//     reactDocgenTypescriptOptions: {},
//   },
// };
//
// export default config;