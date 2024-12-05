---
title: UberFletch
description: Automate your fletching skill with efficiency, customization, and ease of use.
slug: /UberFletch
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="UberFletch" version="v0.0.1" author="Uberith" skill="Fletching">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

 - **Cost**: 5 Coins / Month (not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - **Automatic Material Detection**: Scans the player's inventory for logs, unstrung bows, or other fletching materials and selects the appropriate task.  
> - **Support for All Fletching Tasks**: Handles a variety of fletching tasks, including cutting logs into arrow shafts, stringing bows, making bolts, and fletching arrows.  
> - **Location Independence**: Allows users to fletch anywhere, from banks to favorite skilling spots, ensuring uninterrupted progress.  
> - **Banking Automation**: Automatically banks finished products and withdraws required materials when inventory is full, maintaining workflow.  
> - **Skill Tracking and Progression**: Displays real-time statistics, including experience gained, items crafted, and estimated time to level up.  
> - **Crafting Queue System**: Lets users queue multiple fletching tasks, automating transitions from one to another seamlessly.  
> - **Randomized Delays for Anti-Detection**: Implements human-like delays between actions to avoid detection during extended sessions.  
> - **Customizable Behavior**: Allows users to prioritize specific items or tasks, such as high-profit or high-experience fletching products.  
> - **Support for Combination Tasks**: Includes options to craft combination items, like headless arrows or ammo combinations, for maximum efficiency.  
> - **User-Friendly Debugging**: Provides a debug panel for real-time insights into script actions and inventory management.  

### Supported Fletching Tasks

> - Cutting logs into arrow shafts  
> - Making bows (unstrung and strung)  
> - Crafting crossbow stocks and bolts  
> - Fletching arrows and darts  
> - Creating headless arrows  
> - Crafting combination ammo  

### Supported Materials

> - Logs (regular, oak, willow, maple, yew, magic, and elder)  
> - Bowstrings  
> - Arrow shafts and feathers  
> - Broad arrowheads and bolt tips  
> - Rune essence (for Runecrafting-related fletching)  

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

> - Materials (e.g., logs, arrow shafts, feathers, etc.) must be available in the inventory or bank.  
> - The player must have the necessary fletching level for the desired tasks.  
> - If crafting combination items, ensure all required components are accessible.  

</ContentBlock>

---

## Menu Screens

<ContentBlock title="Menu Screens">

### Main Configuration Screen
![Main Configuration Screen](./UberFletch01.png)

### Statistics Panel
![Main Configuration Screen](./UberFletch02.png)

### Advanced Settings Panel
![Main Configuration Screen](./UberFletch03.png)

### Debug Panel
![Main Configuration Screen](./UberFletch04.png)

</ContentBlock>

---

## Product Roadmap

<ContentBlock title="Product Roadmap">
> - **Player Suggestion**: Add support for making broad arrows and bolts for Slayer tasks.  
> - Add integration for crystal bowstring creation and combination.  
> - Introduce support for rune pouch and rune-based fletching to facilitate hybrid skilling methods.  
> - Implement advanced anti-detection patterns, including occasional pauses and random interactions with the environment.  
> - Enhance material prioritization logic to recommend the most profitable or efficient crafting items based on user goals.  

</ContentBlock>

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
