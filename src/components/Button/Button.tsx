export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    isDisabled?: boolean;
    onClick?: () => void;
}

export function Button({ children, isDisabled, onClick, ...props }: ButtonProps) {
    return (
        <button disabled={isDisabled} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
