---
prev: false
---

<script setup>
   import { MButton } from "matarito-vue";
</script>

# M-Button

Buttons allow users to take actions, and make choices, with a single tap.

## Single module import

```js
import { MButton } from "matarito-vue";
```

## Usage

```vue
<MButton />
<M-Button />
<m-button />
```

## Basic

Text to display on a button is defined with the label property or the predefined default slot.

<DemoContainer>
		<MButton label="Submit" />
		<MButton>Submit </MButton>
</DemoContainer>

```vue
<MButton label="Submit" />
<MButton>Submit</MButton>
```

## Icons

Icon of a button is specified with icon property and position is configured using iconPosition attribute.

<DemoContainer>
		<MButton icon="icon" />
		<MButton icon="icon" label="Submit" />
      <MButton icon="icon" iconPosition="right" label="Submit" />
</DemoContainer>

```vue
<MButton icon="icon" />
<MButton icon="icon" label="Submit" />
<MButton icon="icon" iconPosition="right" label="Submit" />
```

## Loading

When loading is present only the loading icon will appear, the element cannot be focused and cursor is loading.
<DemoContainer>
<MButton loading />
<MButton loadingIcon="loading Icon" label="Submit" loading/>
</DemoContainer>

```vue
<MButton loading />
<MButton loadingIcon="loading Icon" label="Submit" loading />
```

## Disabled

When disabled is present, the element cannot be focused and cursor is not allowed.
<DemoContainer>
<MButton disabled />
<MButton label="Submit" disabled/>
</DemoContainer>

```vue
<MButton loading />
<MButton loadingIcon="loading Icon" label="Submit" loading />
```

## Severity

Severity defines the type of button.
<DemoContainer>
<MButton label="Primary" />
<MButton label="Secondary" severity="secondary" />
<MButton label="Success" severity="success" />
<MButton label="Info" severity="info"/>
<MButton label="Warning" severity="warning"/>
<MButton label="help" severity="help"/>
<MButton label="danger" severity="danger"/>
</DemoContainer>

```vue
<MButton label="Primary" />
<MButton label="Secondary" severity="secondary" />
<MButton label="Success" severity="success" />
<MButton label="Info" severity="info" />
<MButton label="Warning" severity="warning" />
<MButton label="help" severity="help" />
<MButton label="danger" severity="danger" />
```

## Rounded

Rounded buttons have a circular border radius.
<DemoContainer>
<MButton label="Primary" variant="rounded" />
<MButton label="Secondary" severity="secondary" variant="rounded"/>
<MButton label="Success" severity="success" variant="rounded" />
<MButton label="Info" severity="info" variant="rounded"/>
<MButton label="Warning" severity="warning" variant="rounded"/>
<MButton label="help" severity="help" variant="rounded"/>
<MButton label="danger" severity="danger" variant="rounded"/>
</DemoContainer>

```vue
<MButton label="Primary" variant="rounded" />
<MButton label="Secondary" severity="secondary" variant="rounded" />
<MButton label="Success" severity="success" variant="rounded" />
<MButton label="Info" severity="info" variant="rounded" />
<MButton label="Warning" severity="warning" variant="rounded" />
<MButton label="help" severity="help" variant="rounded" />
<MButton label="danger" severity="danger" variant="rounded" />
```
## Text

Text buttons are displayed as textual elements.
<DemoContainer>
<MButton label="Primary" variant="text" />
<MButton label="Secondary" severity="secondary" variant="text"/>
<MButton label="Success" severity="success" variant="text" />
<MButton label="Info" severity="info" variant="text"/>
<MButton label="Warning" severity="warning" variant="text"/>
<MButton label="help" severity="help" variant="text"/>
<MButton label="danger" severity="danger" variant="text"/>
</DemoContainer>

```vue
<MButton label="Primary" variant="text" />
<MButton label="Secondary" severity="secondary" variant="text" />
<MButton label="Success" severity="success" variant="text" />
<MButton label="Info" severity="info" variant="text" />
<MButton label="Warning" severity="warning" variant="text" />
<MButton label="help" severity="help" variant="text" />
<MButton label="danger" severity="danger" variant="text" />
```
## Outlined

Outlined buttons display a border without a background initially.
<DemoContainer>
<MButton label="Primary" variant="outlined" />
<MButton label="Secondary" severity="secondary" variant="outlined"/>
<MButton label="Success" severity="success" variant="outlined" />
<MButton label="Info" severity="info" variant="outlined"/>
<MButton label="Warning" severity="warning" variant="outlined"/>
<MButton label="help" severity="help" variant="outlined"/>
<MButton label="danger" severity="danger" variant="outlined"/>
</DemoContainer>

```vue
<MButton label="Primary" variant="outlined" />
<MButton label="Secondary" severity="secondary" variant="outlined" />
<MButton label="Success" severity="success" variant="outlined" />
<MButton label="Info" severity="info" variant="outlined" />
<MButton label="Warning" severity="warning" variant="outlined" />
<MButton label="help" severity="help" variant="outlined" />
<MButton label="danger" severity="danger" variant="outlined" />
```