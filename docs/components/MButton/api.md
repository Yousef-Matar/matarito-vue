---
outline: deep
prev: "Features"
---

# MButton API

API defines helper props, events and others for the matarito MButton module.

## MButton

`MButton` is an extension to standard button element with icons and theming.

## Props

Defines valid properties in MButton component.

|      Name      |                                                       Type                                                        |                    Default                     |                 Description                 |
| :------------: | :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------: | :-----------------------------------------: |
|    `label`     |                                       <span class="prop-type">String</span>                                       |     <span class="VPBadge tip">null</span>      |             Text of the button.             |
|     `icon`     |                                       <span class="prop-type">String</span>                                       |     <span class="VPBadge tip">null</span>      |              Name of the icon.              |
| `iconPosition` |                                 <span class="prop-type">"left" \| "right"</span>                                  |     <span class="VPBadge tip">left</span>      |            Position of the icon.            |
|   `variant`    |                          <span class="prop-type">"filled" \| "text" \| "outlined"</span>                          |    <span class="VPBadge tip">filled</span>     |    Defines the importance of the button.    |
|   `rounded`    |                                      <span class="prop-type">boolean</span>                                       |     <span class="VPBadge tip">false</span>     | Add a circular border radius to the button. |
|   `severity`   | <span class="prop-type">"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "help" \| "danger"</span> |    <span class="VPBadge tip">primary</span>    |      Defines the style of the button.       |
|   `loading`    |                                      <span class="prop-type">boolean</span>                                       |     <span class="VPBadge tip">false</span>     |   Whether the button is in loading state.   |
| `loadingIcon`  |                                       <span class="prop-type">String</span>                                       | <span class="VPBadge tip">pi pi-spinner</span> |      Icon to display in loading state.      |
|    `raised`    |                                      <span class="prop-type">boolean</span>                                       |     <span class="VPBadge tip">false</span>     |     Add a shadow to indicate elevation.     |
|     `size`     |                                <span class="prop-type">"sm" \| "md" \| "lg"</span>                                |      <span class="VPBadge tip">md</span>       |       Defines the size of the button.       |

## Slots

Defines valid slots in MButton component.

|   Name    | Parameters |                                    ReturnType                                    |                                                            Description                                                            |
| :-------: | :--------: | :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| `default` |            | <span class="VPBadge info">VNode<RendererNode, RendererElement, Object>[]</span> | Custom content can be placed inside the button via the default slot. Note that when slot is used, label property is not included. |

## ButtonContext

Extended properties from native button.

|    Name     |                              Type                              |                 Default                 |                     Description                     |
| :---------: | :------------------------------------------------------------: | :-------------------------------------: | :-------------------------------------------------: |
| `disabled`  |             <span class="prop-type">boolean</span>             | <span class="VPBadge tip">false</span>  | Current disabled state of the element as a boolean. |
| `propagate` |             <span class="prop-type">boolean</span>             | <span class="VPBadge tip">false</span>  | Whether the button click event propagate to parent. |
|   `type`    | <span class="prop-type">"button" \| "submit" \| "reset"</span> | <span class="VPBadge tip">button</span> |           Defines the type of the button.           |
