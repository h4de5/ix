"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88377],{48548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(97458),s=t(16436);const r={},i=void 0,o={id:"auto-generated/previews/react/echarts",title:"echarts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/echarts.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/echarts",permalink:"/docs/auto-generated/previews/react/echarts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/echarts.md",tags:[],version:"current",frontMatter:{}},c={},m=[];function h(e){const n={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, { useEffect, useState } from 'react';\nimport { convertThemeName, registerTheme } from '@siemens/ix-echarts';\nimport { themeSwitcher } from '@siemens/ix';\nimport ReactEcharts from 'echarts-for-react';\nimport * as echarts from 'echarts/core';\nimport { EChartsOption } from 'echarts';\n\nexport default function Echarts() {\n  registerTheme(echarts);\n\n  const [theme, setTheme] = useState(\n    convertThemeName(themeSwitcher.getCurrentTheme())\n  );\n\n  useEffect(() => {\n    themeSwitcher.themeChanged.on((theme: string) => {\n      setTheme(convertThemeName(theme));\n    });\n  }, []);\n\n  const options: EChartsOption = {\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {\n        type: 'shadow',\n      },\n    },\n    legend: {},\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true,\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n    ],\n    yAxis: [\n      {\n        type: 'value',\n      },\n    ],\n    series: [\n      {\n        name: 'Direct',\n        type: 'bar',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [320, 332, 301, 334, 390, 330, 320],\n      },\n      {\n        name: 'Email',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 90, 230, 210],\n      },\n      {\n        name: 'Union Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [220, 182, 191, 234, 290, 330, 310],\n      },\n      {\n        name: 'Video Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [150, 232, 201, 154, 190, 330, 410],\n      },\n      {\n        name: 'Search Engine',\n        type: 'bar',\n        data: [862, 1018, 964, 1026, 1679, 1600, 1570],\n        emphasis: {\n          focus: 'series',\n        },\n        markLine: {\n          lineStyle: {\n            type: 'dashed',\n          },\n          data: [[{ type: 'min' }, { type: 'max' }]],\n        },\n      },\n      {\n        name: 'Baidu',\n        type: 'bar',\n        barWidth: 5,\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [620, 732, 701, 734, 1090, 1130, 1120],\n      },\n      {\n        name: 'Google',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 290, 230, 220],\n      },\n      {\n        name: 'Bing',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [60, 72, 71, 74, 190, 130, 110],\n      },\n      {\n        name: 'Others',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [62, 82, 91, 84, 109, 110, 120],\n      },\n    ],\n  };\n\n  return (\n    <ReactEcharts\n      option={options}\n      theme={theme}\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n        paddingTop: '1rem',\n      }}\n    />\n  );\n}\n\n"})})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(52983);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);