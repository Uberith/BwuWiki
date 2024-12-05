---
title: UberChop
description: Optimize your woodcutting in game with precision and automation.
slug: /UberChop
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json';


<TopBanner title="UberChop" version="v1.0.0" author="Uberith" skill="Woodcutting">
</TopBanner>

---

## Cost

<ContentBlock title="Cost">

 - **Cost**: 8 Coins / Month (not including client access)

</ContentBlock>

---

## Features

<ContentBlock title="Features">

> - Automatic navigation to precise coordinate-based locations to ensure accurate navigation to tree locations and banks, minimizing inefficiencies in movement.
> - Persistent settings save user preferences such as the selected location, tree type, and nest-pickup options, ensuring settings are restored across sessions.
> - Randomized delays simulate human-like behavior with fuzzy random delay functions, adding variability to interactions and navigation timings to avoid detection.
> - Banking automation intelligently detects when the player's inventory is full, automatically navigates to the nearest bank, deposits the logs, and returns to continue chopping.
> - Log box integration interacts with wood boxes in the player's inventory, filling them with logs to free up additional inventory space and extend chopping sessions.
> - Dynamic tree selection supports various tree types, including regular trees, Oaks, Willows, Yews, Maples, Elder Trees, Teak, Mahogany, and Acadia.
> - Nest collection automation detects and picks up bird nests that drop during woodcutting, ensuring valuable resources are not overlooked.
> - Location-specific adaptation ensures optimized navigation for 11 locations:
>   - Burthorpe
>   - Draynor Village
>   - Edgeville
>   - Falador
>   - Kharazi Jungle
>   - Lumbridge
>   - Menaphos
>   - Seer's Village
>   - Tai Bwo Wannai
>   - Uzer
>   - Varrock
> - Skill progression tracking provides insights into experience and levels gained during woodcutting sessions.
> - Comprehensive debugging and feedback provides real-time updates on the script's actions, including current location, inventory status, and next planned action.
> - Efficient resource management balances inventory handling, travel distances, and chopping speed for optimal results.



##### Supported Logs

> - Logs
> - Oak
> - Willow
> - Yew
> - Teak
> - Maple Tree
> - Magic Tree
> - Elder

##### Unsupported Trees

=========
> - Bloodwood


</ContentBlock>

---

## Menu Screens

<ContentBlock title="Menu Screens">

### Main Configuration Screen
![Main Configuration Screen](./01UberChop.png)

### Statistics Panel
![Main Configuration Screen](./02UberChop.png)

### Advanced Settings Panel
![Main Configuration Screen](./03UberChop.png)

### Debug Panel
![Main Configuration Screen](./04UberChop.png)

</ContentBlock>


---

## Requirements

<ContentBlock title="Requirements">
    - Must be equipped with an axe appropriate for the trees.
    - If using a wood box, it must be compatible with the selected trees.
</ContentBlock>

---

## Product Roadmap

<ContentBlock title="Product Roadmap">
> - **Player Suggestion:** Add support to have secondary actions if chopping high level trees (e.g. Elder Tree) to then do something else. Based on user input, it could begin chopping another tree (e.g. Yew), or teleport to another location to chop the high level tree.
> - Add support for lightform/crystalize
> - **Player Suggestion:** 
>   - Add Support for Ancient Elven Ritual Shard (for useage with lightform/crystalize)
>   - Add Support for Perfect JUJU Potions
>   - Add support for Destroy special mahogany logs
>   - Add support for Beaver pouches
>   - Add support for Incense Sticks
> - Add support for bank presets
> - Implement anomaly detection systems that monitor the script's behavior in real-time and adjust the actions if they seem too consistent or predictable. Randomize actions such as:
>   - Small variations in movement speed
>   - Occasional breaks or pauses
>   - Random interactions with other game objects (like inspecting a nearby item or interacting with another player).
</ContentBlock>

---

<Changelog changes={changes} />
