export interface NichePeak {
  month: string;
  monthNumber: number;
  intensity: number;
  peakDate: string;
}

export interface NicheData {
  id: string;
  name: string;
  icon: string;
  description: string;
  peaks: NichePeak[];
}

export const NICHE_DATA: Record<string, NicheData> = {
  hvac: {
    id: "hvac",
    name: "HVAC",
    icon: "Thermometer",
    description: "Heating, Cooling & HVAC Services",
    peaks: [
      { month: "July", monthNumber: 7, intensity: 0.95, peakDate: "July 15" },
      { month: "December", monthNumber: 12, intensity: 0.92, peakDate: "Dec 20" },
    ],
  },
  landscaping: {
    id: "landscaping",
    name: "Landscaping",
    icon: "TreeDeciduous",
    description: "Landscaping & Outdoor Services",
    peaks: [
      { month: "March", monthNumber: 3, intensity: 0.88, peakDate: "Mar 20" },
      { month: "April", monthNumber: 4, intensity: 0.90, peakDate: "Apr 15" },
    ],
  },
  "tax-prep": {
    id: "tax-prep",
    name: "Tax Preparation",
    icon: "Calculator",
    description: "Tax & Accounting Services",
    peaks: [
      { month: "January", monthNumber: 1, intensity: 0.85, peakDate: "Jan 27" },
      { month: "March", monthNumber: 3, intensity: 0.98, peakDate: "Mar 31" },
    ],
  },
  roofing: {
    id: "roofing",
    name: "Roofing",
    icon: "Home",
    description: "Roofing & Restoration",
    peaks: [
      { month: "June", monthNumber: 6, intensity: 0.87, peakDate: "Jun 15" },
      { month: "September", monthNumber: 9, intensity: 0.85, peakDate: "Sep 10" },
    ],
  },
  plumbing: {
    id: "plumbing",
    name: "Plumbing",
    icon: "Droplets",
    description: "Plumbing & Water Services",
    peaks: [
      { month: "July", monthNumber: 7, intensity: 0.82, peakDate: "Jul 10" },
      { month: "January", monthNumber: 1, intensity: 0.88, peakDate: "Jan 15" },
    ],
  },
  "home-remodeling": {
    id: "home-remodeling",
    name: "Home Remodeling",
    icon: "Hammer",
    description: "Home Remodeling & Renovation",
    peaks: [
      { month: "February", monthNumber: 2, intensity: 0.85, peakDate: "Feb 20" },
      { month: "September", monthNumber: 9, intensity: 0.83, peakDate: "Sep 15" },
    ],
  },
  fitness: {
    id: "fitness",
    name: "Fitness & Wellness",
    icon: "Dumbbell",
    description: "Gym & Fitness Services",
    peaks: [
      { month: "January", monthNumber: 1, intensity: 0.95, peakDate: "Jan 10" },
      { month: "September", monthNumber: 9, intensity: 0.75, peakDate: "Sep 5" },
    ],
  },
  "moving-services": {
    id: "moving-services",
    name: "Moving Services",
    icon: "Truck",
    description: "Moving & Relocation Services",
    peaks: [
      { month: "June", monthNumber: 6, intensity: 0.90, peakDate: "Jun 15" },
      { month: "August", monthNumber: 8, intensity: 0.88, peakDate: "Aug 10" },
    ],
  },
};
