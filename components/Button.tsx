interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button = ({children, className}: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center gap-3 bg-primary py-2 px-4 h-12 cursor-pointer ${className}`} >{children}</button>
  )
}

export default Button