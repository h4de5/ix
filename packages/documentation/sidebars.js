/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started',
        },
        {
          type: 'doc',
          id: 'getting-started-for-designer',
        },
      ],
    },
    {
      type: 'category',
      label: 'Icon Library',
      items: [
        {
          type: 'autogenerated',
          dirName: 'icon-library',
        },
      ],
    },
    {
      type: 'category',
      label: 'Language',
      items: [
        {
          type: 'autogenerated',
          dirName: 'language',
        },
      ],
    },
    {
      type: 'category',
      label: 'Theming & Styling',
      items: [
        {
          type: 'autogenerated',
          dirName: 'theming',
        },
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        {
          type: 'autogenerated',
          dirName: 'installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Controls',
      items: [
        {
          type: 'category',
          label: 'Grid (AG-Grid)',
          items: [
            {
              type: 'autogenerated',
              dirName: 'controls/grid',
            },
          ],
        },
        {
          type: 'autogenerated',
          dirName: 'controls',
        },
      ],
    },
  ],
};

module.exports = sidebars;
