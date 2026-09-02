import { AnimatePresence, motion } from 'framer-motion'

function TestimonialsSection({ visibleTestimonials, testimonialPage, testimonialTotalPages, onPageChange }) {
  const pages = Array.from({ length: testimonialTotalPages }, (_, index) => index + 1)

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`testimonial-page-${testimonialPage}`}
          className="testimonial-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
        >
          {visibleTestimonials.map((item) => (
            <article key={item.name} className="testimonial-item">
              <div className="testimonial-meta">
                <div className="line" style={{ background: item.color }} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="testimonial-body">
                <div>
                  <div className="avatar-mini">
                    {item.image ? (
                      <img className="avatar-mini-image" src={item.image} alt={item.name} />
                    ) : (
                      item.initials
                    )}
                  </div>
                </div>
                <p className="testimonial-quote-text">{item.text}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="pager">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, testimonialPage - 1))}
          disabled={testimonialPage === 1}
        >
          ←
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={testimonialPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(testimonialTotalPages, testimonialPage + 1))}
          disabled={testimonialPage === testimonialTotalPages}
        >
          →
        </button>
      </div>
    </>
  )
}

export default TestimonialsSection
