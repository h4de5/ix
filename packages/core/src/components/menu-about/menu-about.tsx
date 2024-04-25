/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { MenuTabs } from '../utils/menu-tabs/menu-tabs-fc';
import {
  CustomCloseEvent,
  initialize,
  setTab,
} from '../utils/menu-tabs/menu-tabs-utils';

@Component({
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  shadow: true,
})
export class MenuAbout {
  @Element() hostElement!: HTMLIxMenuAboutElement;

  /**
   * Active tab
   */
  @Prop() activeTabLabel?: string;

  /**
   * Label of first tab
   */
  @Prop() label = 'About & legal information';

  /**
   * Internal
   */
  @Prop() show = false;

  /**
   * About and Legal closed
   */
  @Event() close!: EventEmitter<CustomCloseEvent>;

  @State() items: HTMLIxMenuAboutItemElement[] = [];

  @Watch('activeTabLabel')
  updateTab(label: string) {
    setTab(this, label);
  }

  componentWillLoad() {
    initialize(this);
  }

  componentDidLoad() {
    forceUpdate(this.hostElement);
  }

  render() {
    return <MenuTabs context={this} />;
  }
}
