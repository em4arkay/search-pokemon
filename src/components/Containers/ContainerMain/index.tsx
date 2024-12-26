import React, { ElementType, ReactNode } from "react";

interface ContainerMainProps {
  as?: ElementType; 
  children: ReactNode; 
  className?: string; 
  [key: string]: any; 
}

const ContainerMain: React.FC<ContainerMainProps> = ({
  as: Element = "div",
  children,
  className = "",
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={`px-5 w-full m-auto ${className}`}
    >
      {children}
    </Element>
  );
};

export default ContainerMain;
