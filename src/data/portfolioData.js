/**
 * Google Drive — CV / resume
 * - Set resumeFileId to the Drive file id of the CV: the site button opens Drive’s
 *   viewer (reliable). Leave it empty and the resume button is simply not rendered.
 * - Direct uc?export=download often returns 403 unless the file is shared as
 *   “Anyone with the link” → Viewer (not “Restricted”), and even then Google may block it.
 * - For a true one-click download with no Drive page: add the PDF to /public (e.g. resume.pdf)
 *   and set resumeHostedUrl below.
 */
export const resumeFileId = ''

export const resumeViewUrl = resumeFileId
  ? `https://drive.google.com/file/d/${resumeFileId}/view`
  : null

/** Optional: e.g. '/resume.pdf' in public/ — used for one-click download when set */
export const resumeHostedUrl = null

export const resumeDownloadUrl = resumeFileId
  ? `https://drive.google.com/uc?export=download&id=${resumeFileId}`
  : null

export const profile = {
  name: 'Larisa Petrescu',
  role: 'Senior CRM Automation Engineer | Business System Consultant | AI Chat & Voice Agent Specialist',
  email: 'larisa.petrescu.automation@gmail.com',
  about:
    'Welcome to my portfolio. I am a senior CRM automation engineer and business systems consultant who helps growing companies replace manual, disconnected processes with reliable systems. I design and build lead capture, qualification, routing, follow-up, onboarding, retention, and reporting workflows across HubSpot, Zoho, GoHighLevel, Monday.com, and Airtable, and connect them to the rest of the business with n8n, Zapier, Make, REST APIs, webhooks, and GraphQL. Alongside classic CRM work I build AI chat and voice agents with OpenAI, Twilio, Vapi, Retell, and WhatsApp, so conversations are captured, qualified, and handed to a human at exactly the right moment. Every system ships with documentation, SOPs, monitoring, and administrator training, so the team that inherits it can run and extend it independently.',
}

export const resumeGroups = [
  {
    title: 'Education',
    items: [
      {
        title: 'POLITEHNICA Bucharest',
        subtitle: 'Bachelor’s Degree in Computer Science',
        period: '06.2012 - 08.2016',
        text: 'Built the software engineering, data, and systems-design foundations that underpin my integration and automation work today.',
        color: '#3b82f6',
      },
      {
        title: 'POLITEHNICA Bucharest',
        subtitle: 'Master’s Degree in Information Technology',
        period: '09.2016 - 05.2017',
        text: 'Specialised in information systems and integration architecture, focusing on how business platforms exchange and reconcile data.',
        color: '#2563eb',
      },
    ],
  },
  {
    title: 'Employment',
    items: [
      {
        title: 'Beans United',
        subtitle: 'Senior CRM Automation & AI Solutions Consultant',
        period: '01.2025 - 08.2026',
        text: 'Design and implement CRM, automation, and AI communication systems for growing businesses across Europe, the UK, and the US. Build lead capture, qualification, routing, follow-up, onboarding, retention, and reporting workflows across HubSpot, Zoho, GoHighLevel, and Monday.com, with maintainable integrations in n8n, Zapier, Make, REST APIs, webhooks, GraphQL, and custom scripts — each delivered with technical documentation, SOPs, monitoring controls, and administrator training.',
        color: '#22c55e',
      },
      {
        title: 'BBD Boom',
        subtitle: 'CRM & Operations Automation Consultant',
        period: '04.2022 - 12.2024',
        text: 'Designed a centralised recovery and retention CRM integrating RingCentral, Google Sheets, Zapier, and management reporting. Implemented record matching, deduplication, team assignment, transfer, approval, escalation, and call-tracking workflows, plus operational views and KPI reporting for sales, recovery, management, and multiple service-provider accounts.',
        color: '#14b8a6',
      },
      {
        title: 'Aggranda',
        subtitle: 'CRM Integration & Conversational AI Engineer',
        period: '01.2020 - 02.2022',
        text: 'Integrated Sierra Interactive, Airtable, Chatwoot, Zapier, Twilio, Whisper, and AI services into a unified lead-management workflow. Built voice-note transcription into structured CRM notes and tasks with routing, duplicate prevention, and human-handover rules, and audited a large automation environment to improve reliability, ownership visibility, and follow-up consistency.',
        color: '#06b6d4',
      },
      {
        title: 'Mindit.io',
        subtitle: 'Monday.com Automation Specialist',
        period: '02.2018 - 12.2019',
        text: 'Built connected project, portfolio, workload, dependency, and executive-reporting workflows in Monday.com. Used n8n and the Monday.com GraphQL API to automate project creation and synchronise items, subitems, owners, dates, and statuses, and documented the architecture and administrative processes for a clean handover.',
        color: '#3b82f6',
      },
    ],
  },
]

export const programmingSkills = [
  { name: 'CRM Platforms and Business Systems', value: 99, color: '#4566dc' },
  { name: 'Automation and Workflow Engineering', value: 99, color: '#25b9cf' },
  { name: 'AI Chat and Voice Agents', value: 95, color: '#f2be4e' },
  { name: 'APIs, Webhooks and Integrations', value: 95, color: '#ff6b4a' },
]

export const languageSkills = [
  { name: 'Romanian', level: 5, color: '#4566dc' },
  { name: 'English', level: 5, color: '#25b9cf' },
]

export const portfolioFilters = [
  'Show All',
  'CRM Systems',
  'Automation',
  'AI Comms',
  'Project Ops',
  'Tools',
]

export const portfolioItems = [
  {
    title: 'Mobile Auto Repair CRM & Automation | Voice & Chatbot Agent',
    category: 'CRM Systems',
    image: ['/portfolio/fieldd/1.png', '/portfolio/fieldd/2.png', '/portfolio/fieldd/3.png', '/portfolio/fieldd/4.png'],
    description: 'Built an integrated operations and customer communication system for a Dubai-based mobile auto repair business using Fieldd, Google Workspace, Google Calendar, Zapier, QuickBooks, Stripe, WhatsApp automation, and a Vapi voice agent. The solution covered technician scheduling, booking workflows, lead capture, AI chatbot and voice assistant integration, customer event notifications, and internal support processes to streamline field service operations and improve response speed.',
  },
  {
    title: 'Seamless Persona Registration & Zoho Lead Integration on WordPress',
    category: 'CRM Systems',
    description: 'Implemented a seamless lead capture system on a WordPress website by embedding a custom Persona registration form. When customers register, their data is automatically structured in Zoho CRM to create new leads, ensuring smooth tracking and management of incoming users.',
    image: ['/portfolio/persona/1.png', '/portfolio/persona/2.png', '/portfolio/persona/3.png', '/portfolio/persona/4.png', '/portfolio/persona/5.png'],
  },
  {
    title: 'Monday.com Workflows and Automation',
    category: 'CRM Systems',
    description: 'Created job boards that are linked to update information from one board to another without the need for back and forth and manual data entery. Created automations for the workflows, and integrations of monday to google apps relevant to the company',
    image: ['/portfolio/monday/1.png', '/portfolio/monday/2.png']
  },
  {
    title: 'Teams Meeting Note Taker | N8N',
    category: 'Automation',
    description: 'Automated Microsoft Teams meeting notes workflow that manages meetings end-to-end with no manual effort. It monitors Outlook for new meetings, auto-accepts invites, joins Teams meetings at the scheduled time, retrieves transcripts after the meeting, and uses AI to generate structured summaries, decisions, and action items. Final notes are automatically shared with all attendees, with built-in validation, error handling, and logging to prevent duplicates and failures.',
    image: ['/portfolio/notetaker/1.png', '/portfolio/notetaker/2.png', '/portfolio/notetaker/3.png', '/portfolio/notetaker/4.png', '/portfolio/notetaker/5.png', '/portfolio/notetaker/6.png', '/portfolio/notetaker/7.png', '/portfolio/notetaker/8.png', '/portfolio/notetaker/9.png'],
  },
  {
    title: 'Automated Response to Unanswered Questions | N8N',
    category: 'Automation',
    image: ['/portfolio/automated-response/1.png'],
    description: 'Daily 4 PM Microsoft Teams follow-up automation that detects and responds to unanswered messages automatically. The workflow scans all relevant Teams and primary channels, reviews messages from the past week, and identifies items without replies. Each message is analyzed by an AI agent, which generates a context-aware response using predefined templates and posts the reply in the correct channel—ensuring no client or support message is missed while keeping communication consistent and timely.',
  },
  {
    title: 'Monthly Checkin Workflow | N8N',
    category: 'Automation',
    image: ['/portfolio/monthly-checkin/1.png'],
    description: 'AI-powered Microsoft Teams check-in system built with n8n and Microsoft Graph. The automation detects project phase directly from Team names, monitors activity by analyzing recent channel messages, and sends monthly, phase-appropriate client check-ins only when needed. It prevents duplicate outreach, requires no manual tracking or databases, and runs fully on a schedule - delivering consistent, accurate client communication at scale with zero ongoing management.',
  },
  {
    title: 'Workflows in Taxdome',
    category: 'CRM Systems',
    image: ['/portfolio/taxdome/1.png', '/portfolio/taxdome/2.png', '/portfolio/taxdome/3.png'],
    description: 'Created and managed workflows for a finance company in Taxdome.',
  },
  {
    title: 'AI Triage Assistant for Client Support',
    category: 'AI Comms',
    image: '',
    description: 'Built an AI assistant that categorizes requests and guides users to the right channel instantly.',
  },
  {
    title: 'Voice Agent with Twilio and WhatsApp',
    category: 'AI Comms',
    image: '',
    description: 'Implemented voice and message automation for booking, follow-up, and client communication handoff.',
  },
  {
    title: 'Portfolio RAID Dashboard and Governance',
    category: 'Project Ops',
    image: '',
    description: 'Built portfolio controls with RAID visibility, action ownership, and recurring reporting cadence.',
  },
  {
    title: 'SOP Library and Workflow Mapping Rollout',
    category: 'Project Ops',
    image: '',
    description: 'Created SOP structures and process maps that improved handovers and operational consistency.',
  },
  {
    title: 'Cross-Team Workspace in Notion and ClickUp',
    category: 'Tools',
    image: '',
    description: 'Set up centralized project and knowledge workspaces for tracking tasks, risks, and team collaboration.',
  },
  {
    title: 'Executive Reporting with Miro and Dashboards',
    category: 'Tools',
    image: '',
    description: 'Delivered leadership-ready visual reporting for delivery status, resource planning, and priorities.',
  },
]

/**
 * Testimonials — add Larisa’s own client testimonials here.
 * Shape: { name, date, text, initials, color, image? }
 * `image` is a path under /public (e.g. "testimonials/name.jpg"); omit it to fall
 * back to the `initials` avatar. While this array is empty the Testimonials
 * section is hidden from the site automatically (see sectionOrder below).
 */
export const testimonials = []

export const sectionMeta = {
  resume: { title: 'Resume', color: '#28c2db' },
  portfolio: { title: 'Portfolio', color: '#f7c247' },
  testimonials: { title: 'Testimonials', color: '#ff7443' },
  contacts: { title: 'Contacts', color: '#ff4a53' },
}

/** Testimonials is skipped while there are none to show. */
export const sectionOrder = ['resume', 'portfolio', 'testimonials', 'contacts'].filter(
  (key) => key !== 'testimonials' || testimonials.length > 0
)

export const dots = [1, 2, 3, 4, 5]
