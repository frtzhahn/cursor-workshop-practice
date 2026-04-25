export type Category = 'school project' | 'config' | 'tool';

export interface Project {
  name: string;
  url: string;
  category: Category;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "RandFacts",
    url: "https://github.com/frtzhahn/RandFacts",
    category: "school project",
    description: "AI-powered random facts generator built for Computer Programming II finals. Uses the Gemini API with structured prompts and strict anti-hallucination engineering. Includes a history log, saved facts, and an analytics dashboard.",
    tech: ["Java 17", "JavaFX", "Gemini API", "SQLite", "Maven", "Gson"],
  },
  {
    name: "BSCS-archive-project",
    url: "https://github.com/frtzhahn/BSCS-archive-project",
    category: "school project",
    description: "Local web system for archiving and managing class photos — a digital time capsule for the BSCS batch. Features a responsive gallery with modal views and an admin dashboard for entry approval, editing, and deletion.",
    tech: ["Node.js", "Express", "SQLite3", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "nvim-setup",
    url: "https://github.com/frtzhahn/nvim-setup",
    category: "config",
    description: "Personal Neovim configuration built from scratch with aikhe. Fully modular with lazy.nvim, LSP support via Mason, Telescope for fuzzy finding, and Cord.nvim for Discord RPC. Includes a custom floating terminal and theme switcher.",
    tech: ["Lua", "Neovim", "lazy.nvim", "Mason", "Telescope"],
  },
  {
    name: "linux-config-files",
    url: "https://github.com/frtzhahn/linux-config-files",
    category: "config",
    description: "Personal backup and showcase of Linux dotfiles across distros. Covers a CachyOS/Sway Wayland setup with custom Cava GLSL shaders and Discord RPC scripts, alongside an Ubuntu/X11 setup with Picom and i3.",
    tech: ["Shell", "Lua", "GLSL", "CachyOS", "Sway", "Ubuntu"],
  },
  {
    name: "pomo-kde",
    url: "https://github.com/frtzhahn/pomo-kde",
    category: "tool",
    description: "Pomodoro timer scripts for Linux. Integrates natively with KDE KClock via D-Bus (qdbus6) for system tray timers, with a fallback terminal-only countdown for any desktop environment.",
    tech: ["Bash", "KDE Plasma", "D-Bus", "libnotify"],
  },
  {
    name: "custom-discord-rich-presence",
    url: "https://github.com/frtzhahn/custom-discord-rich-presence",
    category: "tool",
    description: "Custom Discord Rich Presence statuses triggered directly from the terminal on Linux. Covers multiple contexts — CachyOS Sway WM, KDE Plasma, Gemini CLI, Kdenlive, and Tinkercad — each with unique app IDs and art assets configured via the Discord Developer Portal.",
    tech: ["Bash", "CachyOS", "Discord RPC", "linux-discord-rich-presence"],
  },
];
