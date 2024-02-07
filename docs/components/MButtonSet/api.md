---
prev: "Features"
---

# MButtonSet API

API defines props, events and others for the `MButtonSet` component.

::: tip Note that

`MButtonSet API` is based on the [`MButton Api`](../MButton/api)

:::

## Additional Props

Defines valid properties in `MButtonSet` component.

|    Name     |                        Type                        |               Default                |         Description          |
| :---------: | :------------------------------------------------: | :----------------------------------: | :--------------------------: |
| `direction` | <span class="text--green">"row" \| "column"</span> | <span class="VPBadge tip">row</span> | `MButtonSet` flex direction. |

## Slots

Defines valid slots in `MButtonSet` component.

|   Name    | Parameters |                                    ReturnType                                    |                                          Description                                           |
| :-------: | :--------: | :------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| `default` |            | <span class="VPBadge info">VNode<RendererNode, RendererElement, Object>[]</span> | `MButtons` to be grouped using `MButtonSet`. Any other element will be ignored by `MButtonSet`. |
