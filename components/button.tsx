import React, { useState, memo } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "tertiary" | "outline";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
}

const Button = memo<ButtonProps>(
    ({
        variant = "primary",
        size = "small",
        disabled = false,
        onClick,
        children,
        type = "button",
        style,
        ...props
    }) => {
        const [isLoading, setIsLoading] = useState(false);

        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                style={style}
                className=""
                {...props}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
