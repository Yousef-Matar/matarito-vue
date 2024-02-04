# MButton Theming

## Variables

List of css variables used.

<div class="full-width d-table">

|    Name     |                               Type                               |                 Default                 |
| :---------: | :--------------------------------------------------------------: | :-------------------------------------: |
| `disabled`  |             <span class="text--green">boolean</span>             | <span class="VPBadge tip">false</span>  |
| `propagate` |             <span class="text--green">boolean</span>             | <span class="VPBadge tip">false</span>  |
|   `type`    | <span class="text--green">"button" \| "submit" \| "reset"</span> | <span class="VPBadge tip">button</span> |

</div>

## Elements

List of element class selectors.

<div class="full-width d-table">

|                           Name                            |           Element           |
| :-------------------------------------------------------: | :-------------------------: |
|         <span class="text--green">m-button</span>         |       Button element        |
|       <span class="text--green">m-button-set</span>       |    Button set container     |
|    <span class="text--green">m-button\_\_label</span>     |     Button element text     |
|     <span class="text--green">m-button\_\_icon</span>     |     Button element icon     |
| <span class="text--green">m-button\_\_loading-icon</span> | Button element loading icon |

</div>

## Modifiers

List of Modifiers class selectors. They are applied to the component's elements when specific states are triggered.

<div class="full-width d-table">

|                                Name                                |                                    State                                     |
| :----------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|       <span class="text--green">m-button--${severity}</span>       |                              `severity="value"`                              |
|         <span class="text--green">m-button--${size}</span>         |                                `size="value"`                                |
|       <span class="text--green">m-button--${variant}</span>        |                              `variant="value"`                               |
|         <span class="text--green">m-button--rounded</span>         |                              `:rounded="true"`                               |
|        <span class="text--green">m-button--disabled</span>         |                              `:disabled="true"`                              |
|         <span class="text--green">m-button--loading</span>         |                              `:loading="true"`                               |
|         <span class="text--green">m-button--raised</span>          |                               `:raised="true"`                               |
|        <span class="text--green">m-button--icon-only</span>        | Applied if `label` & `default slot` do not have a value & `icon` has a value |
| <span class="text--green">m-button\_\_icon--${iconPosition}</span> |                            `iconPosition="value"`                            |

</div>
