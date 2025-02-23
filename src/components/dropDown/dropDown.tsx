import styled from "styled-components";

const StyledDropDown = styled.select<{ disabled?: boolean }>`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  background-color: white;
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
`

export interface DropDownProps {
  label?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const DropDown = ({ label, options, disabled = false, onChange }: DropDownProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <StyledDropDown disabled={disabled} onChange={(e) => onChange && onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledDropDown>
    </div>
  );
};
