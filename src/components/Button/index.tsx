// NavButton.tsx
import React, { ReactNode } from 'react';
import styles from './index.module.css'; // Adjust the import path as needed

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  fontSize?: number; // Added fontSize prop
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fontSize = 1, // Default font size
  style,
  onClick,
  ...rest
}: ButtonProps) => {
  const containerStyle: React.CSSProperties = {
    fontSize: `${fontSize}rem`,
  };

  return (
    <div className={styles.buttonContainer} style={containerStyle}>
      <button
        className={`${styles.button} ${className || ''}`}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
