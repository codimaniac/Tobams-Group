interface SectionLayoutProps {
    children: React.ReactNode;
}

const SectionLayout = ({children}: SectionLayoutProps) => {
  return (
    <section className="px-16">
        { children }
    </section>
  )
}

export default SectionLayout