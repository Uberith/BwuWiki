"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[7236],{73760:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var n=s(17624),o=s(4552),t=(s(11504),s(23940)),r=s(99188),c=s(9510);s(61462);const l=JSON.parse('[{"date":"2024-09-27","title":"v1.0.0","items":["Release"]}]'),a={title:"ArchGlacorNM",description:"Fights Arch Glacor",slug:"/ArchGlacorNM"},d=void 0,h={id:"Scripts/Combat/Boss Scripts/ArchGlacorNM/index",title:"ArchGlacorNM",description:"Fights Arch Glacor",source:"@site/docs/Scripts/Combat/Boss Scripts/ArchGlacorNM/index.md",sourceDirName:"Scripts/Combat/Boss Scripts/ArchGlacorNM",slug:"/ArchGlacorNM",permalink:"/ArchGlacorNM",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ArchGlacorNM",description:"Fights Arch Glacor",slug:"/ArchGlacorNM"},sidebar:"mainSidebar",previous:{title:"Aki HM Kerapac",permalink:"/Aki-HM-Kerapac"},next:{title:"Ervinas Dagannoths Kings Script",permalink:"/ervinas-dagannoth-kings"}},u={},p=[{value:"Cost",id:"cost",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Info",id:"info",level:2},{value:"Discord Webhook Tutorial",id:"discord-webhook-tutorial",level:2},{value:"GUI",id:"gui",level:2},{value:"Changelog",id:"changelog",level:2}];function b(e){const i={admonition:"admonition",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.c,{title:"ArchGlacorNM",version:"v1.0",author:"MonVardsDraguns & andri588",skill:"Necromancy"}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"cost",children:"Cost"})}),"\n",(0,n.jsx)(r.c,{title:"Cost",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"10 Coin / month (not including client access)"}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"features",children:"Features"})}),"\n",(0,n.jsx)(r.c,{title:"Features",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Completes up to 5 mechanics."}),"\n",(0,n.jsx)(i.li,{children:"Manages to complete kills with all styles."}),"\n",(0,n.jsx)(i.li,{children:"Toggle for eating food/using prayer."}),"\n",(0,n.jsx)(i.li,{children:"Manages loot, healing, and prayer use."}),"\n",(0,n.jsx)(i.li,{children:"Handles banking, world-hopping."}),"\n",(0,n.jsx)(i.li,{children:"Repairs Fury amulet of blood, Cinderbane gloves."}),"\n",(0,n.jsx)(i.li,{children:"Charges up Scripture of Wen."}),"\n",(0,n.jsx)(i.li,{children:"Grand Exchange integration for restocking supplies such as runes, food, and potions."}),"\n",(0,n.jsx)(i.li,{children:"Discord notifications via webhook."}),"\n",(0,n.jsx)(i.li,{children:"Customizable kill count before hopping worlds"}),"\n",(0,n.jsx)(i.li,{children:"Customizable kill count before banking"}),"\n",(0,n.jsx)(i.li,{children:"Simple GUI for easy control of all the bot settings"}),"\n",(0,n.jsx)(i.li,{children:"Removes treasure hunter keys that pop-up in the backpack"}),"\n",(0,n.jsx)(i.li,{children:"Option to eat food to make space for loot"}),"\n",(0,n.jsx)(i.li,{children:"Option to leave loot on ground"}),"\n",(0,n.jsx)(i.li,{children:"Uses War's retreat altar if its unlocked"}),"\n",(0,n.jsx)(i.li,{children:"Uses War's retreat adrenaline crystal if its unlocked"}),"\n",(0,n.jsx)(i.li,{children:"Toggle to open crystal chests with gathered crystal keys after a set amount"}),"\n",(0,n.jsx)(i.li,{children:"Supports curses/normal prayers"}),"\n",(0,n.jsx)(i.li,{children:"Uses bone shield for necromancy to use defensives on frost cannon mechanic"}),"\n",(0,n.jsx)(i.li,{children:"Uses a shield switch for Range/Melee/Mage to use defensives on frost cannon mechanic"}),"\n",(0,n.jsx)(i.li,{children:"Logic of all 4 styles to deal with Glacytes (Dragon breath, bombardment, cleave, other aoes)"}),"\n",(0,n.jsx)(i.li,{children:"Toggles Scripture of Wen"}),"\n",(0,n.jsx)(i.li,{children:"Supports Weapon poison +++"}),"\n",(0,n.jsx)(i.li,{children:"Supports restore/prayer potions"}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"requirements",children:"Requirements"})}),"\n",(0,n.jsx)(r.c,{title:"Requirements",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"War's retreat portal must be on action bar"}),"\n",(0,n.jsx)(i.li,{children:"Arch glacor portal must be unlocked and set in one of the 2 portals in War's retreat"}),"\n",(0,n.jsx)(i.li,{children:"All abilities/prayers that you want to use have to be on Actionbar (will use the best stat boosting prayer it can from the actionbar)"}),"\n",(0,n.jsx)(i.li,{children:"Eat Food must be on bar for food to be eaten"}),"\n",(0,n.jsx)(i.li,{children:"The script will load preset 1 to go fight the boss"}),"\n",(0,n.jsx)(i.li,{children:"To repair fury blood amulet you have to have blood runes in bank"}),"\n",(0,n.jsx)(i.li,{children:"To repair cinderbanes you must have whetstones in bank"}),"\n",(0,n.jsx)(i.li,{children:"To charge wen scripture you have to have wen pages in bank"}),"\n",(0,n.jsx)(i.li,{children:"Supports REVO++ bar, the fighting phase doesn't have custom ability rotations"}),"\n",(0,n.jsx)(i.li,{children:"Equipment interface has to be opened for item fixing to work"}),"\n",(0,n.jsx)(i.li,{children:"If using Necromancy bone shield has to be on for frost cannon mechanic"}),"\n"]}),"\n"]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"info",children:"Info"})}),"\n",(0,n.jsx)(r.c,{title:"Info",children:(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Buys 5000 of each rune/ectoplasm"}),"\n",(0,n.jsx)(i.li,{children:"Buys 3000 Rocktails"}),"\n",(0,n.jsx)(i.li,{children:"Buys 1000 of arrows/bolts"}),"\n",(0,n.jsx)(i.li,{children:"Buys 300 of Extreme Potions/super restore"}),"\n",(0,n.jsx)(i.li,{children:"Buys 100 Powerburst of vitality"}),"\n",(0,n.jsx)(i.li,{children:"Buys 50 Weapon poison +++"}),"\n",(0,n.jsx)(i.li,{children:"Buys 10 Manuscript of Wen/Whetstone"}),"\n"]}),"\n"]})}),"\n",(0,n.jsxs)(i.admonition,{type:"hidden",children:[(0,n.jsx)(i.h2,{id:"discord-webhook-tutorial",children:"Discord Webhook Tutorial"}),(0,n.jsxs)(r.c,{title:"Set up webhook",children:[(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Create a discord server"}),"\n"]}),"\n"]}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"discordwebhooktutorial1.PNG",src:s(82436).c+"",width:"444",height:"564"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial2.PNG",src:s(87588).c+"",width:"438",height:"397"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial3.PNG",src:s(69205).c+"",width:"436",height:"404"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial4.PNG",src:s(69740).c+"",width:"417",height:"323"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial5.PNG",src:s(27148).c+"",width:"1031",height:"466"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial6.PNG",src:s(82684).c+"",width:"1006",height:"377"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial7.PNG",src:s(89128).c+"",width:"951",height:"558"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhooktutorial8.PNG",src:s(52948).c+"",width:"584",height:"345"})]})]}),(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"gui",children:"GUI"})})]}),"\n",(0,n.jsx)(r.c,{title:"Set",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"ArchGlacorNMM1.PNG",src:s(21568).c+"",width:"589",height:"350"}),"\n",(0,n.jsx)(i.img,{alt:"ArchGlacorNM2.PNG",src:s(69136).c+"",width:"588",height:"349"}),"\n",(0,n.jsx)(i.img,{alt:"ArchGlacorNM3.PNG",src:s(95536).c+"",width:"585",height:"350"}),"\n",(0,n.jsx)(i.img,{alt:"ArchGlacorNM4.PNG",src:s(84132).c+"",width:"589",height:"350"}),"\n",(0,n.jsx)(i.img,{alt:"ArchGlacorNM5.PNG",src:s(25620).c+"",width:"586",height:"349"}),"\n",(0,n.jsx)(i.img,{alt:"discordwebhookexample.PNG",src:s(72).c+"",width:"345",height:"338"})]})}),"\n",(0,n.jsx)(i.admonition,{type:"hidden",children:(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"})}),"\n",(0,n.jsx)(c.c,{changes:l})]})}function g(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},69136:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/ArchGlacorNM2-4cb3d808143682f3aa289c39c3acdd6e.PNG"},95536:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/ArchGlacorNM3-fba3352b7a5ead6af6056d6400ee7430.PNG"},84132:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/ArchGlacorNM4-19feea30476b8749f1f5d1a808e4d0cd.PNG"},25620:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/ArchGlacorNM5-c4a968082886ca7c772d40adac9a5f94.PNG"},21568:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/ArchGlacorNMM1-13f44d54754cbde8ea53777493fbcd04.PNG"},72:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhookexample-4623e744a018e5b298878fd038939599.PNG"},82436:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial1-e2fae6de3be91c6bb0807f373d3fa1df.PNG"},87588:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial2-560326ceb72992c7e170c61e750ed2e0.PNG"},69205:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial3-c7a123c110b93e8a2c6a76bc84195c33.PNG"},69740:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial4-7b6df09bedef9547f6101815c32f89a9.PNG"},27148:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial5-ce0cde535bce5eea04f0a93469a75db9.PNG"},82684:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial6-db9bbdfb3336e9f7abb223397f3fc613.PNG"},89128:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial7-d05fd686549970a33858c68b778d63fe.PNG"},52948:(e,i,s)=>{s.d(i,{c:()=>n});const n=s.p+"assets/images/discordwebhooktutorial8-0d07ef68a90a041309c8b5fa10b94dca.PNG"}}]);