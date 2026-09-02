import { AnimatePresence, motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'
import SectionHeader from './SectionHeader'

function ProfilePanel({ profile, avatarSrc, isOpen, onToggle }) {
  return (
    <section className="accordion profile-panel">
      <SectionHeader title="Profile" color="#4267de" Icon={FiUser} open={isOpen} onToggle={onToggle} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="section-content profile-content"
            key="profile-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="profile-body">
              <div className="profile-main">
                <div>
                  <div className="profile-avatar big">
                    {avatarSrc ? <img className="profile-avatar-image" src={avatarSrc} alt={profile.name} /> : 'LP'}
                  </div>
                </div>
                <div>
                  <h2 className="profile-display-name">{profile.name}</h2>
                  <p style={{ fontWeight: 'bolder' }}>{profile.role}</p>
                </div>
              </div>
              <div className="profile-details">
                <p>
                  <strong>Name:</strong><br /> <span className="profile-detail-value">{profile.name}</span>
                </p>
                <p>
                  <strong>Email:</strong><br /> <span className="profile-detail-value" style={{ color: 'rgb(255, 136, 0)'}}>{profile.email}</span> 
                </p>
              </div>
            </div>
            <p className="profile-about">{profile.about}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProfilePanel
