import type { ButtonHTMLAttributes } from "react";
import "./button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "yellow" | "black";
};

export const Button = ({
  variant = "primary",
  className = "",
  ...props
}: Props) => {
  return <button className={`btn ${variant} ${className}`} {...props} />;
};
