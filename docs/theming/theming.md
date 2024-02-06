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

|       Name       |                Default                 |     Description     |
| :--------------: | :------------------------------------: | :-----------------: |
| `--text-primary` | <span class="text--green">white</span> | Primary text color. |

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

|            Name            |                         Default                          |              Description              |
| :------------------------: | :------------------------------------------------------: | :-----------------------------------: |
|        `--primary`         |         <span class="text--green">#3b82f6</span>         |        Primary element color.         |
|  `--primary-filled-hover`  |         <span class="text--green">#0b63f3</span>         |  Primary filled element hover color.  |
|   `--primary-text-hover`   | <span class="text--green">rgba(59, 130, 246, 0.2)</span> |   Primary text element hover color.   |
| `--primary-outlined-hover` | <span class="text--green">rgba(59, 130, 246, 0.2)</span> | Primary outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Secondary

</summary>
<div class="full-width d-table">

|             Name             |                         Default                         |               Description               |
| :--------------------------: | :-----------------------------------------------------: | :-------------------------------------: |
|        `--secondary`         |        <span class="text--green">#475569</span>         |        Secondary element color.         |
|  `--secondary-filled-hover`  |        <span class="text--green">#323c4b</span>         |  Secondary filled element hover color.  |
|   `--secondary-text-hover`   | <span class="text--green">rgba(71, 85, 105, 0.2)</span> |   Secondary text element hover color.   |
| `--secondary-outlined-hover` | <span class="text--green">rgba(71, 85, 105, 0.2)</span> | Secondary outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Success

</summary>
<div class="full-width d-table">

|            Name            |                         Default                         |              Description              |
| :------------------------: | :-----------------------------------------------------: | :-----------------------------------: |
|        `--success`         |        <span class="text--green">#22c55e</span>         |        Success element color.         |
|  `--success-filled-hover`  |        <span class="text--green">#1a9a49</span>         |  Success filled element hover color.  |
|   `--success-text-hover`   | <span class="text--green">rgba(34, 197, 94, 0.2)</span> |   Success text element hover color.   |
| `--success-outlined-hover` | <span class="text--green">rgba(34, 197, 94, 0.2)</span> | Success outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Info

</summary>
<div class="full-width d-table">

|          Name           |                         Default                         |            Description             |
| :---------------------: | :-----------------------------------------------------: | :--------------------------------: |
|        `--info`         |        <span class="text--green">#0099ff</span>         |        Info element color.         |
|  `--info-filled-hover`  |        <span class="text--green">#007acc</span>         |  Info filled element hover color.  |
|   `--info-text-hover`   | <span class="text--green">rgba(0, 153, 255, 0.2)</span> |   Info text element hover color.   |
| `--info-outlined-hover` | <span class="text--green">rgba(0, 153, 255, 0.2)</span> | Info outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Warning

</summary>
<div class="full-width d-table">

|            Name            |                         Default                         |              Description              |
| :------------------------: | :-----------------------------------------------------: | :-----------------------------------: |
|        `--warning`         |        <span class="text--green">#ffa400</span>         |        Warning element color.         |
|  `--warning-filled-hover`  |        <span class="text--green">#cc8300</span>         |  Warning filled element hover color.  |
|   `--warning-text-hover`   | <span class="text--green">rgba(255, 164, 0, 0.2)</span> |   Warning text element hover color.   |
| `--warning-outlined-hover` | <span class="text--green">rgba(255, 164, 0, 0.2)</span> | Warning outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Help

</summary>
<div class="full-width d-table">

|          Name           |                         Default                          |            Description             |
| :---------------------: | :------------------------------------------------------: | :--------------------------------: |
|        `--help`         |         <span class="text--green">#a855f7</span>         |        Help element color.         |
|  `--help-filled-hover`  |         <span class="text--green">#8f24f5</span>         |  Help filled element hover color.  |
|   `--help-text-hover`   | <span class="text--green">rgba(168, 85, 247, 0.2)</span> |   Help text element hover color.   |
| `--help-outlined-hover` | <span class="text--green">rgba(168, 85, 247, 0.2)</span> | Help outlined element hover color. |

</div>
</details>

<details class="custom-block collapse details">
<summary class="collapsible-header">

#### Danger

</summary>
<div class="full-width d-table">

|           Name            |                         Default                         |             Description              |
| :-----------------------: | :-----------------------------------------------------: | :----------------------------------: |
|        `--danger`         |        <span class="text--green">#ed2c2c</span>         |        Danger element color.         |
|  `--danger-filled-hover`  |        <span class="text--green">#d41212</span>         |  Danger filled element hover color.  |
|   `--danger-text-hover`   | <span class="text--green">rgba(237, 44, 44, 0.2)</span> |   Danger text element hover color.   |
| `--danger-outlined-hover` | <span class="text--green">rgba(237, 44, 44, 0.2)</span> | Danger outlined element hover color. |

</div>
</details>
