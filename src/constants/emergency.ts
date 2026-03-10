import { AlertTriangle, Wind, TreePine, Trash2 } from 'lucide-react';

export const emergencyServices = [
  {
    icon: AlertTriangle,
    title: 'Fallen Trees on Structures',
    description:
      'Homes, fences, sheds, and garages — we assess the load and remove safely without causing secondary damage.',
  },
  {
    icon: Wind,
    title: 'Hanging & Suspended Limbs',
    description:
      '"Widow makers" left after a storm are among the most dangerous hazards on a property. We identify and clear them fast.',
  },
  {
    icon: TreePine,
    title: 'Root-Ball Failures & Uproots',
    description:
      'Uprooted trees threatening foundations or utility lines require immediate, controlled removal — not guesswork.',
  },
  {
    icon: Trash2,
    title: 'Post-Storm Debris Clearing',
    description:
      'Full yard and access-path cleanup after primary hazards are handled, so you can get back to normal.',
  },
] as const;
