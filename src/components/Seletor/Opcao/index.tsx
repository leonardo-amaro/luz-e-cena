import React from "react";

interface OpcaoProps extends React.OptgroupHTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
}

const Opcao = ({ value, label, ...rest }: OpcaoProps) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
}

export default Opcao;
