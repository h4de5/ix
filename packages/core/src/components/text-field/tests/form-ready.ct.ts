/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getFormValue, preventFormSubmission, test } from '@utils/test';
import { expect } from '@playwright/test';

test(`form-ready - ix-text-field`, async ({ mount, page }) => {
  await mount(
    `<form><ix-text-field name="my-field-name"></ix-text-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-text-field').locator('input');
  await input.fill('my example');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('my example');
});

test(`form-ready - ix-number-field`, async ({ mount, page }) => {
  await mount(
    `<form><ix-number-field name="my-field-name"></ix-number-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-number-field').locator('input');
  await input.fill('123');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('123');
});

test(`form-ready - ix-textarea-field`, async ({ mount, page }) => {
  await mount(
    `<form><ix-textarea-field name="my-field-name"></ix-textarea-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-textarea-field').locator('textarea');
  await input.fill('Some longer text');
  await input.blur();

  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('Some longer text');
});

//
test(`form-ready - ix-text-field with initial value`, async ({
  mount,
  page,
}) => {
  await mount(
    `<form><ix-text-field name="my-field-name" value="initial value"></ix-text-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('initial value');
});

test(`form-ready - ix-number-field with initial value`, async ({
  mount,
  page,
}) => {
  await mount(
    `<form><ix-number-field name="my-field-name" value="1337"></ix-number-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('1337');
});

test(`form-ready - ix-textarea-field with initial value`, async ({
  mount,
  page,
}) => {
  await mount(
    `<form><ix-textarea-field name="my-field-name" value="initial value"></ix-textarea-field></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const formData = await getFormValue(formElement, 'my-field-name');
  expect(formData).toBe('initial value');
});
