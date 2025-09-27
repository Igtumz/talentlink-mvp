export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  headline?: string
  summary?: string
  location?: string
  profile_picture?: string
  created_at: string
}

export interface HardSkill {
  id: string
  user_id: string
  skill_name: string
  proficiency_level: number
  years_experience: number
}

export interface SoftSkills {
  id: string
  user_id: string
  communication: number
  teamwork: number
  leadership: number
  critical_thinking: number
  professionalism: number
}

export interface Intelligences {
  id: string
  user_id: string
  linguistic: number
  logical_mathematical: number
  spatial_visual: number
  bodily_kinesthetic: number
  musical: number
  interpersonal: number
  intrapersonal: number
  naturalistic: number
  existential: number
}