import { LayoutGrid, ClipboardList, Code2, Mail, type LucideIcon } from "lucide-react"

export type TabId = "home" | "projects" | "skills" | "contact"

export interface TabDef {
  id: TabId
  label: string
  icon: LucideIcon
}

export const TABS: TabDef[] = [
  { id: "home", label: "Home", icon: LayoutGrid },
  { id: "projects", label: "Projects", icon: ClipboardList },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
]
