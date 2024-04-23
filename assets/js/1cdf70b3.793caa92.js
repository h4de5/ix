"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81715],{95818:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(97458),s=t(16436);const r={},i=void 0,o={id:"auto-generated/previews/angular/echarts.ts",title:"echarts.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/echarts.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/echarts.ts",permalink:"/docs/auto-generated/previews/angular/echarts.ts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/echarts.ts.md",tags:[],version:"current",frontMatter:{}},c={},m=[];function h(n){const e={code:"code",pre:"pre",...(0,s.a)(),...n.components};return(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, OnInit } from '@angular/core';\nimport { convertThemeName, registerTheme } from '@siemens/ix-echarts';\nimport { themeSwitcher } from '@siemens/ix';\nimport * as echarts from 'echarts/core';\nimport { EChartsOption } from 'echarts';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './echarts.html',\n})\nexport default class Echarts implements OnInit {\n  theme = convertThemeName(themeSwitcher.getCurrentTheme());\n\n  options: EChartsOption = {\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {\n        type: 'shadow',\n      },\n    },\n    legend: {},\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true,\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n    ],\n    yAxis: [\n      {\n        type: 'value',\n      },\n    ],\n    series: [\n      {\n        name: 'Direct',\n        type: 'bar',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [320, 332, 301, 334, 390, 330, 320],\n      },\n      {\n        name: 'Email',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 90, 230, 210],\n      },\n      {\n        name: 'Union Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [220, 182, 191, 234, 290, 330, 310],\n      },\n      {\n        name: 'Video Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [150, 232, 201, 154, 190, 330, 410],\n      },\n      {\n        name: 'Search Engine',\n        type: 'bar',\n        data: [862, 1018, 964, 1026, 1679, 1600, 1570],\n        emphasis: {\n          focus: 'series',\n        },\n        markLine: {\n          lineStyle: {\n            type: 'dashed',\n          },\n          data: [[{ type: 'min' }, { type: 'max' }]],\n        },\n      },\n      {\n        name: 'Baidu',\n        type: 'bar',\n        barWidth: 5,\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [620, 732, 701, 734, 1090, 1130, 1120],\n      },\n      {\n        name: 'Google',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 290, 230, 220],\n      },\n      {\n        name: 'Bing',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [60, 72, 71, 74, 190, 130, 110],\n      },\n      {\n        name: 'Others',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [62, 82, 91, 84, 109, 110, 120],\n      },\n    ],\n  };\n\n  ngOnInit() {\n    registerTheme(echarts);\n\n    themeSwitcher.themeChanged.on((theme: string) => {\n      this.theme = convertThemeName(theme);\n    });\n  }\n}\n\n"})})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},16436:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>i});var a=t(52983);const s={},r=a.createContext(s);function i(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);