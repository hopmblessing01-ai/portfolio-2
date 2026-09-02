import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiDownload, FiExternalLink, FiMail, FiMenu, FiMessageSquare, FiShoppingBag } from 'react-icons/fi'
import ProfileBanner from './components/ProfileBanner'
import ProfilePanel from './components/ProfilePanel'
import SectionHeader from './components/SectionHeader'
import SiteHeader from './components/SiteHeader'
import ContactsSection from './components/sections/ContactsSection'
import PortfolioSection from './components/sections/PortfolioSection'
import ResumeSection from './components/sections/ResumeSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import avatarImage from './assets/myphoto.png'
import {
  dots,
  languageSkills,
  portfolioFilters,
  portfolioItems,
  profile,
  programmingSkills,
  resumeGroups,
  resumeHostedUrl,
  resumeViewUrl,
  sectionMeta,
  sectionOrder,
  testimonials,
} from './data/portfolioData'

const emptySections = {
  profile: false,
  resume: false,
  portfolio: false,
  testimonials: false,
  contacts: false,
}

const sectionIcons = {
  resume: FiMenu,
  portfolio: FiShoppingBag,
  testimonials: FiMessageSquare,
  contacts: FiMail,
}

const THEME_STORAGE_KEY = 'portfolio-theme'

function App() {
  const portfolioItemsPerPage = 6
  const testimonialsPerPage = 3
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem(THEME_STORAGE_KEY) || 'light'
  })
  const [openSections, setOpenSections] = useState({
    profile: false,
    resume: false,
    portfolio: false,
    testimonials: false,
    contacts: false,
  })
  const [portfolioFilter, setPortfolioFilter] = useState('Show All')
  const [portfolioPage, setPortfolioPage] = useState(1)
  const [testimonialPage, setTestimonialPage] = useState(1)

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === 'Show All') return portfolioItems
    return portfolioItems.filter((item) => item.category === portfolioFilter)
  }, [portfolioFilter])

  const portfolioTotalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredPortfolio.length / portfolioItemsPerPage))
  }, [filteredPortfolio.length])

  const visiblePortfolio = useMemo(() => {
    const start = (portfolioPage - 1) * portfolioItemsPerPage
    return filteredPortfolio.slice(start, start + portfolioItemsPerPage)
  }, [filteredPortfolio, portfolioPage])

  const testimonialTotalPages = useMemo(() => {
    return Math.max(1, Math.ceil(testimonials.length / testimonialsPerPage))
  }, [testimonials.length, testimonialsPerPage])

  const visibleTestimonials = useMemo(() => {
    const start = (testimonialPage - 1) * testimonialsPerPage
    return testimonials.slice(start, start + testimonialsPerPage)
  }, [testimonialPage, testimonials.length, testimonialsPerPage])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleSection = (key) => {
    setOpenSections((prev) => {
      const willOpen = !prev[key]
      if (!willOpen) return emptySections

      return {
        profile: key === 'profile',
        resume: key === 'resume',
        portfolio: key === 'portfolio',
        testimonials: key === 'testimonials',
        contacts: key === 'contacts',
      }
    })
  }

  const renderSectionContent = (sectionKey) => {
    switch (sectionKey) {
      case 'resume':
        return (
          <ResumeSection
            resumeGroups={resumeGroups}
            programmingSkills={programmingSkills}
            languageSkills={languageSkills}
            dots={dots}
          />
        )
      case 'portfolio':
        return (
          <PortfolioSection
            portfolioFilters={portfolioFilters}
            portfolioFilter={portfolioFilter}
            onFilterChange={(filter) => {
              setPortfolioFilter(filter)
              setPortfolioPage(1)
            }}
            visiblePortfolio={visiblePortfolio}
            portfolioPage={portfolioPage}
            portfolioTotalPages={portfolioTotalPages}
            onPortfolioPageChange={setPortfolioPage}
          />
        )
      case 'testimonials':
        return (
          <TestimonialsSection
            visibleTestimonials={visibleTestimonials}
            testimonialPage={testimonialPage}
            testimonialTotalPages={testimonialTotalPages}
            onPageChange={setTestimonialPage}
          />
        )
      case 'contacts':
        return <ContactsSection profile={profile} />
      default:
        return null
    }
  }

  return (
    <>
      <SiteHeader
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      />
      <div className="shift-wrapper">
        <div className="sheet">
        <ProfileBanner
          profile={profile}
          avatarSrc={avatarImage}
          isHidden={openSections.profile}
        />
        <ProfilePanel
          profile={profile}
          avatarSrc={avatarImage}
          isOpen={openSections.profile}
          onToggle={() => toggleSection('profile')}
        />

        {sectionOrder.map((sectionKey) => {
          const meta = sectionMeta[sectionKey]
          const Icon = sectionIcons[sectionKey]

          const accordionInner = (
            <>
              <SectionHeader
                title={meta.title}
                color={meta.color}
                Icon={Icon}
                open={openSections[sectionKey]}
                onToggle={() => toggleSection(sectionKey)}
              />
              <AnimatePresence initial={false}>
                {openSections[sectionKey] && (
                  <motion.div
                    className="section-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    {renderSectionContent(sectionKey)}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )

          if (sectionKey === 'resume') {
            return (
              <div key={sectionKey} className="resume-accordion-shell">
                <section className="accordion">{accordionInner}</section>
                <AnimatePresence>
                  {openSections.resume && (resumeHostedUrl || resumeViewUrl) && (
                    <motion.a
                      key="resume-download-fab"
                      className="resume-download-btn"
                      href={resumeHostedUrl || resumeViewUrl}
                      {...(resumeHostedUrl
                        ? { download: true }
                        : { target: '_blank', rel: 'noopener noreferrer' })}
                      aria-label={
                        resumeHostedUrl
                          ? 'Download resume'
                          : 'Open resume in Google Drive (use Download there)'
                      }
                      title={resumeHostedUrl ? 'Download resume' : 'Open resume in Google Drive'}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 14 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {resumeHostedUrl ? (
                        <FiDownload size={22} strokeWidth={2.25} />
                      ) : (
                        <FiExternalLink size={22} strokeWidth={2.25} />
                      )}
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
            )
          }

          return (
            <section key={sectionKey} className="accordion">
              {accordionInner}
            </section>
          )
        })}
        </div>
        <footer className="footnote">
          Made by <span>Larisa</span>
        </footer>
      </div>
    </>
  )
}

export default App
