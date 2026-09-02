import { AnimatePresence, motion } from 'framer-motion'

function ProfileBanner({ profile, avatarSrc, isHidden }) {
  return (
    <AnimatePresence initial={false}>
      {!isHidden && (
        <motion.div
          key="profile-banner"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="profile-header">
            <div className="profile-left">
              <div>
                <div className="profile-avatar">
                  {avatarSrc ? <img className="profile-avatar-image" src={avatarSrc} alt={profile.name} /> : 'LP'}
                </div>
              </div>
              <div>
                <h1 className="profile-display-name">{profile.name}</h1>
                <p style={{ fontWeight: 'bolder' }}>
                  {profile.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfileBanner
