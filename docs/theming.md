---
outline: deep
---

# Components Theming

## Variables

::: warning Applicable to `all components`

Note that these variables are shared across all components in order to theme a certain component see it's theming configuration.

:::

These variables are predefined with default values.

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Colors

</summary>
<div class="full-width d-table">

|       Name       |                                     Default                                      |     Description     |
| :--------------: | :------------------------------------------------------------------------------: | :-----------------: |
| `--text-primary` | <div style="background-color:white"><span style="color:black">white</span></div> | Primary text color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Typography

</summary>
<div class="full-width d-table">

|    Name     |                  Default                   |    Description    |
| :---------: | :----------------------------------------: | :---------------: |
| `--sm-font` | <span class="text--green">0.875 rem</span> | Small font size.  |
| `--sm-font` |   <span class="text--green">1 rem</span>   | Normal font size. |
| `--lg-font` | <span class="text--green">1.125 rem</span> | Large font size.  |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Paddings

</summary>
<div class="full-width d-table">

|      Name      |                  Default                   |       Description       |
| :------------: | :----------------------------------------: | :---------------------: |
| `--sm-padding` | <span class="text--green">0.375 rem</span> | Small element padding.  |
| `--sm-padding` |  <span class="text--green">0.5 rem</span>  | Normal element padding. |
| `--lg-padding` | <span class="text--green">0.625 rem</span> | Large element padding.  |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Sizes

</summary>
<div class="full-width d-table">

|    Name     |                 Default                  |                                     Description                                     |
| :---------: | :--------------------------------------: | :---------------------------------------------------------------------------------: |
| `--sm-size` | <span class="text--green">1.5 rem</span> | Small element minimum size <span class="VPBadge tip">min-height & min-width</span>  |
| `--sm-size` |  <span class="text--green">2 rem</span>  | Normal element minimum size <span class="VPBadge tip">min-height & min-width</span> |
| `--lg-size` | <span class="text--green">2.5 rem</span> | Large element minimum size <span class="VPBadge tip">min-height & min-width</span>  |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Border-radius

</summary>
<div class="full-width d-table">

|        Name        |                  Default                  |          Description           |
| :----------------: | :---------------------------------------: | :----------------------------: |
| `--border-radius`  | <span class="text--green">0.25 rem</span> | Default element border-radius. |
| `--rounded-radius` |  <span class="text--green">2 rem</span>   | Rounded element border-radius. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Box-shadow

</summary>
<div class="full-width d-table">

|       Name        |                               Default                               |        Description         |
| :---------------: | :-----------------------------------------------------------------: | :------------------------: |
| `--raised-shadow` | <span class="text--green">1px 1px 3px 2px rgba(0, 0, 0, 0.3)</span> | Raised element box-shadow. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

### Opacities

</summary>
<div class="full-width d-table">

|         Name         |               Default                |        Description        |
| :------------------: | :----------------------------------: | :-----------------------: |
| `--disabled-opacity` | <span class="text--green">0.6</span> | Disabled element opacity. |
| `--loading-opacity`  | <span class="text--green">0.8</span> | Loading element opacity.  |

</div>
</details>

### Variants

<details class="custom-block collapse details" open>
<summary class="collapsible-header">

#### Primary

</summary>
<div class="full-width d-table">

|            Name            |                                             Default                                              |              Description              |
| :------------------------: | :----------------------------------------------------------------------------------------------: | :-----------------------------------: |
|        `--primary`         |       <div style="background-color:#3b82f6"><span style="color:white">#3b82f6</span></div>       |        Primary element color.         |
|  `--primary-filled-hover`  |       <div style="background-color:#0b63f3"><span style="color:white">#0b63f3</span></div>       |  Primary filled element hover color.  |
|   `--primary-text-hover`   | <div style="background-color:rgba(59, 130, 246, 0.2)"><span>rgba(59, 130, 246, 0.2)</span></div> |   Primary text element hover color.   |
| `--primary-outlined-hover` | <div style="background-color:rgba(59, 130, 246, 0.2)"><span>rgba(59, 130, 246, 0.2)</span></div> | Primary outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Secondary

</summary>
<div class="full-width d-table">

|             Name             |                                            Default                                             |               Description               |
| :--------------------------: | :--------------------------------------------------------------------------------------------: | :-------------------------------------: |
|        `--secondary`         |      <div style="background-color:#475569"><span style="color:white">#475569</span></div>      |        Secondary element color.         |
|  `--secondary-filled-hover`  |      <div style="background-color:#323c4b"><span style="color:white">#323c4b</span></div>      |  Secondary filled element hover color.  |
|   `--secondary-text-hover`   | <div style="background-color:rgba(71, 85, 105, 0.2)"><span>rgba(71, 85, 105, 0.2)</span></div> |   Secondary text element hover color.   |
| `--secondary-outlined-hover` | <div style="background-color:rgba(71, 85, 105, 0.2)"><span>rgba(71, 85, 105, 0.2)</span></div> | Secondary outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Success

</summary>
<div class="full-width d-table">

|            Name            |                                            Default                                             |              Description              |
| :------------------------: | :--------------------------------------------------------------------------------------------: | :-----------------------------------: |
|        `--success`         |      <div style="background-color:#22c55e"><span style="color:white">#22c55e</span></div>      |        Success element color.         |
|  `--success-filled-hover`  |      <div style="background-color:#1a9a49"><span style="color:white">#1a9a49</span></div>      |  Success filled element hover color.  |
|   `--success-text-hover`   | <div style="background-color:rgba(34, 197, 94, 0.2)"><span>rgba(34, 197, 94, 0.2)</span></div> |   Success text element hover color.   |
| `--success-outlined-hover` | <div style="background-color:rgba(34, 197, 94, 0.2)"><span>rgba(34, 197, 94, 0.2)</span></div> | Success outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Info

</summary>
<div class="full-width d-table">

|          Name           |                                            Default                                             |            Description             |
| :---------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------: |
|        `--info`         |      <div style="background-color:#0099ff"><span style="color:white">#0099ff</span></div>      |        Info element color.         |
|  `--info-filled-hover`  |      <div style="background-color:#007acc"><span style="color:white">#007acc</span></div>      |  Info filled element hover color.  |
|   `--info-text-hover`   | <div style="background-color:rgba(0, 153, 255, 0.2)"><span>rgba(0, 153, 255, 0.2)</span></div> |   Info text element hover color.   |
| `--info-outlined-hover` | <div style="background-color:rgba(0, 153, 255, 0.2)"><span>rgba(0, 153, 255, 0.2)</span></div> | Info outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Warning

</summary>
<div class="full-width d-table">

|            Name            |                                            Default                                             |              Description              |
| :------------------------: | :--------------------------------------------------------------------------------------------: | :-----------------------------------: |
|        `--warning`         |      <div style="background-color:#ffa400"><span style="color:white">#ffa400</span></div>      |        Warning element color.         |
|  `--warning-filled-hover`  |      <div style="background-color:#cc8300"><span style="color:white">#cc8300</span></div>      |  Warning filled element hover color.  |
|   `--warning-text-hover`   | <div style="background-color:rgba(255, 164, 0, 0.2)"><span>rgba(255, 164, 0, 0.2)</span></div> |   Warning text element hover color.   |
| `--warning-outlined-hover` | <div style="background-color:rgba(255, 164, 0, 0.2)"><span>rgba(255, 164, 0, 0.2)</span></div> | Warning outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Help

</summary>
<div class="full-width d-table">

|          Name           |                                             Default                                              |            Description             |
| :---------------------: | :----------------------------------------------------------------------------------------------: | :--------------------------------: |
|        `--help`         |       <div style="background-color:#a855f7"><span style="color:white">#a855f7</span></div>       |        Help element color.         |
|  `--help-filled-hover`  |       <div style="background-color:#8f24f5"><span style="color:white">#8f24f5</span></div>       |  Help filled element hover color.  |
|   `--help-text-hover`   | <div style="background-color:rgba(168, 85, 247, 0.2)"><span>rgba(168, 85, 247, 0.2)</span></div> |   Help text element hover color.   |
| `--help-outlined-hover` | <div style="background-color:rgba(168, 85, 247, 0.2)"><span>rgba(168, 85, 247, 0.2)</span></div> | Help outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Danger

</summary>
<div class="full-width d-table">

|           Name            |                                            Default                                             |             Description              |
| :-----------------------: | :--------------------------------------------------------------------------------------------: | :----------------------------------: |
|        `--danger`         |      <div style="background-color:#ed2c2c"><span style="color:white">#ed2c2c</span></div>      |        Danger element color.         |
|  `--danger-filled-hover`  |      <div style="background-color:#d41212"><span style="color:white">#d41212</span></div>      |  Danger filled element hover color.  |
|   `--danger-text-hover`   | <div style="background-color:rgba(237, 44, 44, 0.2)"><span>rgba(237, 44, 44, 0.2)</span></div> |   Danger text element hover color.   |
| `--danger-outlined-hover` | <div style="background-color:rgba(237, 44, 44, 0.2)"><span>rgba(237, 44, 44, 0.2)</span></div> | Danger outlined element hover color. |

</div>
</details>
