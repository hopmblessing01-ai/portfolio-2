import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function SectionHeader({ title, color, Icon, open, onToggle }) {
  return (
    <button className="section-header" type="button" onClick={onToggle}>
      <span className="section-icon" style={{ backgroundColor: color }}>
        <Icon />
      </span>
      <span className={`section-title ${open ? 'active' : ''}`} style={open ? { backgroundColor: color } : undefined}>
        {title}
      </span>
      <span className="section-arrow">{open ? <FiChevronUp /> : <FiChevronDown />}</span>
    </button>
  )
}

export default SectionHeader
