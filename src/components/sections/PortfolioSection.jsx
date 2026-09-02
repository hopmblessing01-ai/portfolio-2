import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

const DEFAULT_PORTFOLIO_IMAGE = '/portfolio-placeholder.svg'

const toImageArray = (image) => {
  if (Array.isArray(image)) {
    const filtered = image.filter(Boolean)
    return filtered.length ? filtered : [DEFAULT_PORTFOLIO_IMAGE]
  }
  if (typeof image === 'string' && image.trim()) return [image]
  return [DEFAULT_PORTFOLIO_IMAGE]
}

const handleImageError = (event) => {
  if (!event.currentTarget.src.endsWith(DEFAULT_PORTFOLIO_IMAGE)) {
    event.currentTarget.src = DEFAULT_PORTFOLIO_IMAGE
  }
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
}

function PortfolioSection({
  portfolioFilters,
  portfolioFilter,
  onFilterChange,
  visiblePortfolio,
  portfolioPage,
  portfolioTotalPages,
  onPortfolioPageChange,
}) {
  const pages = Array.from({ length: portfolioTotalPages }, (_, index) => index + 1)

  const [activeItem, setActiveItem] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)

  const activeImages = activeItem ? toImageArray(activeItem.image) : []

  const closeModal = useCallback(() => {
    setActiveItem(null)
    setActiveIndex(0)
    setSlideDirection(0)
  }, [])

  const openModal = (item) => {
    setActiveItem(item)
    setActiveIndex(0)
    setSlideDirection(0)
  }

  const goNext = useCallback(() => {
    if (!activeItem) return
    setSlideDirection(1)
    setActiveIndex((prev) => (prev + 1) % activeImages.length)
  }, [activeItem, activeImages.length])

  const goPrev = useCallback(() => {
    if (!activeItem) return
    setSlideDirection(-1)
    setActiveIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length)
  }, [activeItem, activeImages.length])

  useEffect(() => {
    if (!activeItem) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
      else if (event.key === 'ArrowRight') goNext()
      else if (event.key === 'ArrowLeft') goPrev()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [activeItem, closeModal, goNext, goPrev])

  return (
    <>
      <div className="filters">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={portfolioFilter === filter ? 'active' : ''}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${portfolioFilter}-${portfolioPage}`}
          className="portfolio-grid"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {visiblePortfolio.map((item, index) => {
            const images = toImageArray(item.image)
            const previewImage = images[0]
            return (
              <motion.article
                key={`${item.title}-${previewImage}`}
                className="portfolio-item"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.28, ease: 'easeOut', delay: index * 0.03 }}
                onClick={() => openModal(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openModal(item)
                  }
                }}
              >
                <img src={previewImage} alt={item.title} onError={handleImageError} />
                {images.length > 1 && (
                  <span className="portfolio-count-badge">{images.length} images</span>
                )}
                <div className="portfolio-caption">
                  <p>{item.title}</p>
                </div>
                <div className="overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </AnimatePresence>
      <div className="pager">
        <button
          type="button"
          onClick={() => onPortfolioPageChange(Math.max(1, portfolioPage - 1))}
          disabled={portfolioPage === 1}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={portfolioPage === page ? 'active' : ''}
            onClick={() => onPortfolioPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPortfolioPageChange(Math.min(portfolioTotalPages, portfolioPage + 1))}
          disabled={portfolioPage === portfolioTotalPages}
        >
          →
        </button>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
          >
            <motion.div
              className="portfolio-modal-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <FiX />
              </button>

              <div className="portfolio-modal-stage">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.img
                    key={activeIndex}
                    src={activeImages[activeIndex]}
                    alt={`${activeItem.title} - ${activeIndex + 1}`}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    onError={handleImageError}
                  />
                </AnimatePresence>

                {activeImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="portfolio-modal-nav prev"
                      onClick={goPrev}
                      aria-label="Previous image"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      type="button"
                      className="portfolio-modal-nav next"
                      onClick={goNext}
                      aria-label="Next image"
                    >
                      <FiChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div className="portfolio-modal-info">
                <h4>{activeItem.title}</h4>
                <p>{activeItem.description}</p>
                {activeImages.length > 1 && (
                  <div className="portfolio-modal-dots">
                    {activeImages.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        className={`portfolio-modal-dot ${dotIndex === activeIndex ? 'active' : ''}`}
                        onClick={() => {
                          setSlideDirection(dotIndex > activeIndex ? 1 : -1)
                          setActiveIndex(dotIndex)
                        }}
                        aria-label={`Go to image ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PortfolioSection
