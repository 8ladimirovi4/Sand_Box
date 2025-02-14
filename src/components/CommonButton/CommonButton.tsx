import React from "react";
import { ButtonProps } from "./types";

// Кнопка - это переиспользуемый компонент
// React.memo предотвращать повторный рендер компонента, если его props не изменились
const CommonButton = React.memo(({ onClick, children }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
));

export default CommonButton;
