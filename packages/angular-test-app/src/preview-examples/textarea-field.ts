/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-textarea-field
      resizeBehavior='dimensions'
      textareaHeight='100px'
      textareaWidth='300px'
    ></ix-textarea-field>`,
})
export default class TextareaField {}
