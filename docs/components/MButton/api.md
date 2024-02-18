# MButton API

API defines props, events and others for the `MButton` component.

## MButton

`MButton` is an extension to standard button element with icons and theming.

::: tip Note that

Props of the `native html button` are also available.

:::

## Props

Defines valid properties in `MButton` component.

<div class="full-width d-table">

|      Name      |                                                        Type                                                         |                 Default                  |                  Description                   |
| :------------: | :-----------------------------------------------------------------------------------------------------------------: | :--------------------------------------: | :--------------------------------------------: |
|    `label`     |                                       <span class="text--green">String</span>                                       |  <span class="VPBadge tip">null</span>   |             Text of the `MButton`.             |
|     `icon`     |                                       <span class="text--green">String</span>                                       |  <span class="VPBadge tip">null</span>   |               Name of the icon.                |
| `iconPosition` |                                 <span class="text--green">"left" \| "right"</span>                                  |  <span class="VPBadge tip">left</span>   |             Position of the icon.              |
|   `variant`    |                          <span class="text--green">"filled" \| "text" \| "outlined"</span>                          | <span class="VPBadge tip">filled</span>  |    Defines the importance of the `MButton`.    |
|   `rounded`    |                                      <span class="text--green">Boolean</span>                                       |  <span class="VPBadge tip">false</span>  | Add a circular border radius to the `MButton`. |
|   `severity`   | <span class="text--green">"primary" \| "secondary" \| "success" \| "info" \| "warning" \| "help" \| "danger"</span> | <span class="VPBadge tip">primary</span> |       Defines the type of the `MButton`.       |
|   `loading`    |                                      <span class="text--green">Boolean</span>                                       |  <span class="VPBadge tip">false</span>  |   Whether the `MButton` is in loading state.   |
| `loadingIcon`  |                                       <span class="text--green">String</span>                                       |  <span class="VPBadge tip">null</span>   |       Icon to display in loading state.        |
|    `raised`    |                                      <span class="text--green">Boolean</span>                                       |  <span class="VPBadge tip">false</span>  |      Add a shadow to indicate elevation.       |
|     `size`     |                                <span class="text--green">"sm" \| "md" \| "lg"</span>                                |   <span class="VPBadge tip">md</span>    |       Defines the size of the `MButton`.       |

</div>

## Slots

Defines valid slots in `MButton` component.

<div class="full-width d-table">

|   Name    | Parameters |                                    ReturnType                                    |                                                           Description                                                            |
| :-------: | :--------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| `default` |            | <span class="VPBadge info">VNode<RendererNode, RendererElement, Object>[]</span> | Custom content can be placed inside `MButton` via the default slot. Note that when slot is used, label property is not included. |

</div>

## ButtonContext

Extended properties from the native html button.

<div class="full-width d-table">

|    Name     |                               Type                               |                 Default                 |                    Description                     |
| :---------: | :--------------------------------------------------------------: | :-------------------------------------: | :------------------------------------------------: |
| `disabled`  |             <span class="text--green">Boolean</span>             | <span class="VPBadge tip">false</span>  |        Current disabled state of `MButton`.        |
| `propagate` |             <span class="text--green">Boolean</span>             | <span class="VPBadge tip">false</span>  | Whether `MButton` click event propagate to parent. |
|   `type`    | <span class="text--green">"button" \| "submit" \| "reset"</span> | <span class="VPBadge tip">button</span> |         Defines the type of the `MButton`.         |

</div>
