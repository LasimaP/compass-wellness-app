import React from "react";

const Button = ({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}) => {
  const Component = href ? "a" : "button";
  const variantStyles = {
    primary: "bg-clay text-linen hover:bg-clay-dark",
    ghost: "bg-transparent text-moss border border-bark/20 hover:border-moss",
  };
  return (
    <Component
      href={href}
      className={`inline-flex items-center gap-2 rounded-[3px] px-[22px] py-3 font-body font-semibold text-sm ${variantStyles[variant]} ${className} transition-all duration-300`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
