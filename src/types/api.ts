export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: LogoProps
}

export type sectionAboutProjectProps = {
  title: string
  description: string
  media: {
    url: string
    alternativeText: string
  }
}

export type sectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: SectionConceptsProps
}
