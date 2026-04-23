import { CSSProperties } from "react";

interface SectionLayoutProps {
    children: React.ReactNode;
    style?: CSSProperties;
    className?: string;
}

const SectionLayout = ({ children, style, className }: SectionLayoutProps) => {
  return (
    <section style={style} className={`w-full px-16 ${className}`}>
        { children }
    </section>
  )
}

export default SectionLayout