export const checkbox_default = `const [checked, setChecked] = React.useState(false);

<Checkbox
  checked={checked}
  onChange={() => setChecked((prevState) => !prevState)}
>
  Option
</Checkbox>`;

export const checkbox_disabled = `<Checkbox disabled checked={false}>
  Disabled
</Checkbox>
<Checkbox disabled checked={true}>
  Disabled & checked
</Checkbox>`;
