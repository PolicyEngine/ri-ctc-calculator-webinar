export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  speakerIds?: string[]; // IDs from the speakers registry
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
  hasQA?: boolean; // Whether to include Q&A slide at end
}

export const agenda: AgendaItem[] = [
  { time: '2:00 PM - 2:45 PM', title: 'Rhode Island Child Tax Credit Calculator Webinar', speakerIds: ['david-trimmer', 'pavel-makarchuk'], slideshowId: 'ri-ctc-webinar-2026', type: 'talk', hasQA: true },
];
