"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7635],{7635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var s=n(7896),o=(n(2784),n(30876));const a={},r=void 0,c={unversionedId:"auto-generated/previews/react/theme-switcher",id:"auto-generated/previews/react/theme-switcher",title:"theme-switcher",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/theme-switcher.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/theme-switcher",permalink:"/version-dev/docs/auto-generated/previews/react/theme-switcher",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/theme-switcher.md",tags:[],version:"current",frontMatter:{}},m={},i=[],h={toc:i};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxSelectCustomEvent, themeSwitcher } from \'@siemens/ix\';\nimport {\n  IxButton,\n  IxCol,\n  IxLayoutGrid,\n  IxRow,\n  IxSelect,\n  IxSelectItem,\n} from \'@siemens/ix-react\';\nimport React, { ChangeEvent, useState } from \'react\';\nimport \'./styles/theme-switcher.css\';\n\nexport default () => {\n  const [themes] = useState([\'theme-classic-light\', \'theme-classic-dark\']);\n  const [selectedTheme, setSelectedTheme] = useState(themes[1]);\n\n  const selectionChange = (event: IxSelectCustomEvent<string | string[]>) => {\n    const newTheme = event.detail[0];\n    themeSwitcher.setTheme(newTheme);\n    setSelectedTheme(newTheme);\n  };\n\n  const toggle = () => {\n    themeSwitcher.toggleMode();\n  };\n\n  const systemChange = ({ target }: ChangeEvent<HTMLInputElement>) => {\n    if (target.checked) {\n      themeSwitcher.setVariant();\n      return;\n    }\n\n    themeSwitcher.setTheme(selectedTheme);\n  };\n\n  return (\n    <IxLayoutGrid className="ThemeSwitcher">\n      <IxRow>\n        <IxCol size="2">\n          <span>Light/Dark</span>\n        </IxCol>\n        <IxCol>\n          <IxButton onClick={toggle}>Toggle mode</IxButton>\n        </IxCol>\n      </IxRow>\n\n      <IxRow>\n        <IxCol size="2">Theme</IxCol>\n        <IxCol>\n          <IxSelect\n            value={selectedTheme}\n            onValueChange={selectionChange}\n            placeholder="Select a theme"\n          >\n            {themes.map((theme) => (\n              <IxSelectItem\n                key={theme}\n                label={theme}\n                value={theme}\n              ></IxSelectItem>\n            ))}\n          </IxSelect>\n        </IxCol>\n      </IxRow>\n\n      <IxRow>\n        <IxCol size="2">Use System</IxCol>\n        <IxCol>\n          <input type="checkbox" id="system" onChange={systemChange} />\n          <label htmlFor="system"></label>\n        </IxCol>\n      </IxRow>\n    </IxLayoutGrid>\n  );\n};\n')))}l.isMDXComponent=!0}}]);