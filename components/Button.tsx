interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({children, className, onClick}: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center gap-3 bg-primary text-sm md:text-base py-2 px-4 h-12 w-fit cursor-pointer ${className}`} onClick={onClick} >{children}</button>
  )
}

export default Button