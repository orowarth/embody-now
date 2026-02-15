import qigongBanner from '../assets/somatic-qi-gong.jpg';
import cranioPage from '../assets/cranio-page.jpg';
import somaticPage from '../assets/som-enq.jpg'

export interface ServicePageData {
  title: string;
  quote: {
    text: string;
    author: string;
  };
  imagePlaceholder?: string;
  imageSrc?: string
  sections: {
    title: string;
    buttonText?: string;
    paragraphs: string[];
  }[];
  videos?: {
    id: string;
    title: string;
  }[];
  prices?: {
    title: string;
    items: string[];
  }[];
}

export const services: Record<string, ServicePageData> = {
  'biodynamic-craniosacral-therapy': {
    title: 'Biodynamic Craniosacral Therapy',
    quote: {
      text: 'I discovered a stillness so deep it felt like coming home. After a few Craniosacral sessions, my body began to release long-held patterns and memories, revealing clarity, balance, and a renewed sense of direction. Sometimes I became the ocean; other times, a vast open space. This work is subtle yet profoundly transformative—an awakening to the incredible intelligence of the body and nature',
      author: 'Daniel',
    },
    imageSrc: cranioPage,
    sections: [
      {
        title: 'What is Biodynamic Craniosacral Therapy?',
        buttonText: 'Book Now',
        paragraphs: [
          'Biodynamic Craniosacral Therapy (BCST) is a gentle, hands-on therapy that supports your body’s natural ability to find balance, release stress, and heal. Rooted in both osteopathic principles and the latest understanding of the nervous system, it offers a unique space of stillness and safety—where your body can soften, your mind can quiet, and deep change can occur.',
          'Rather than focusing on symptoms or pathology, BCST listens for health. Even in the midst of pain or overwhelm, your body holds an underlying intelligence—a quiet rhythm and order that guides healing. This therapy helps you reconnect with that inner resource and supports your nervous system to shift into repair mode.',
          'BCST uses a soft, non-invasive touch, often experienced as deeply calming. As a practitioner, I offer a grounded, respectful presence and follow your body’s natural pace. With no pressure or manipulation, your system is invited—not forced—into change. Many people find this creates a profound sense of safety, allowing them to release long-held tension.',
          'People come to BCST for many reasons: physical discomfort, exhaustion, poor sleep, stress, or a general sense of disconnection. Others are simply drawn to the feeling of being more grounded, alive, and present. Over time, clients often notice lasting changes—not just in the body, but emotionally and energetically too.',
          'During a session, you’ll remain fully clothed, lying or sitting comfortably. I’ll take time to hear what’s important to you, then gently place my hands on areas like your shoulders, sacrum, feet or head. As your awareness deepens, you may begin to notice sensations—such as warmth, pulsing, small movements, or a feeling of release.',
          'BCST can also support the resolution of difficult experiences held in the body. When we’ve lived through something overwhelming, our system may get stuck in fight-or-flight. Through this work, the body can gradually unwind those patterns—without needing to revisit the original story.',
          'Clients often describe feeling calmer, more energised, and more connected after sessions. With regular support, BCST can help you feel less reactive, more resilient, and more at ease in your body and your life.',
        ],
      },
    ],
    prices: [
      {
        title: 'Treatment Fees',
        items: [
          'Initial: $130 (allow 75 minutes)',
          'Follow up: $115 (allow 60 minutes)',
          '3 x Session Package: $300 (3 x 60 minutes)',
          '6 x Session Package: $585 (6 x 60 minutes)',
          'Mobile Service: Auckland Central (additional $45 per session)',
        ],
      },
    ],
  },
  'somatic-flow-qi-gong': {
    title: 'Somatic Flow Qi Gong',
    quote: {
      text: 'When I discovered Qi Gong, I connected with a beauty inside myself I had never known before. Moving with elegance and grace, I felt deeply aligned with the natural flow of life. Through regular practice, I’ve released tension and emotional holding, and I can always shift my state to one of renewed energy and positivity.',
      author: 'Michelle',
    },
    imageSrc: qigongBanner,
    sections: [
      {
        title: 'What is Somatic Flow Qi Gong?',
        buttonText: 'Book Now',
        paragraphs: [
          'Somatic Flow Qi Gong is a gentle, trauma-informed movement practice that blends the ancient principles of traditional Qi Gong with the embodied presence of Biodynamic Craniosacral Therapy and insights from Polyvagal Theory (the science of the vagus nerve). It offers a space to slow down, connect with your body, and support your nervous system in finding balance and ease.',
          'Each weekly online class (held at 9:30am NZT) is shaped by the group itself. At the beginning of each session, I invite participants to share what they’re noticing in their bodies and what they’d like support with. From there, I tune into the field and receive guidance on which forms to offer and how to guide the practice. Movements are offered slowly, with deep respect for individual needs—there’s no pressure to push, perform, or get it “right.”',
          'Practising from the comfort of their own home, many students have said they feel more present, less self-conscious, and free to move at their own pace. This sense of safety and privacy allows for a deeper level of embodiment and self-awareness.',
          'The practice gently supports nervous system regulation, emotional grounding, and the natural flow of energy through the body. It’s especially nourishing for those experiencing stress, fatigue, or overwhelm—or anyone seeking a more conscious, compassionate relationship with themselves.',
          'Whether you’re new to Qi Gong or simply curious to move with more awareness, you are warmly welcome. No experience is necessary, just an open heart and a willingness to listen within. (Please see videos below for an idea of the class style and format).',
        ],
      },
    ],
    videos: [
      { id: '5AO_sEQXYO0', title: 'Somatic Flow Qi Gong - Metal Element, Lungs' },
      { id: '_zlh-45_He8', title: 'Somatic Flow Qi Gong - Become the Element' },
    ],
    prices: [
      {
        title: 'Online Somatic Flow Qi Gong',
        items: [
          '4 Sessions $45 (45 mins)',
          'Casual drop in class $20',
        ],
      },
    ],
  },
  'somatic-enquiry': {
    title: 'Somatic Enquiry',
    quote: {
      text: 'I didn’t realise how disconnected I’d become from my own body. Large parts of me felt numb or absent, and that disconnection seeped into my daily life — I was only half-present, not fully inhabiting life. Through Somatic Enquiry, I was gently guided back into my body. It felt like my mind had shut away parts of me that felt uncomfortable, protecting me from facing them. Now, I have a whole new relationship with my body—its wisdom, energy, and intelligence. I’m able to calm myself more easily and be truly present with my family, friends, and in my life',
      author: 'Steve',
    },
    imageSrc: somaticPage,
    sections: [
      {
        title: 'What is Somatic Enquiry?',
        buttonText: 'Book Now',
        paragraphs: [
          'Somatic Enquiry is a gentle, body-led process that helps you reconnect with your inner experience. It’s easy to spend much of life in your head—thinking, planning, reacting to the world around you—while the body’s quieter signals are overlooked or forgotten. This work offers a space to slow down and shift attention inward.',
          'Held online, in the comfort of your own space, Somatic Enquiry supports you to notice what’s happening beneath the surface. Using principles drawn from Biodynamic Craniosacral Therapy, somatic awareness practices, and Polyvagal Theory, I guide you to gently explore sensation, breath, and subtle patterns within your body. As awareness deepens, long-held tension can begin to soften, bringing a sense of ease, clarity, and grounding.',
          'Each session unfolds in real time, led by what you’re noticing in the moment. There’s no need to “figure anything out”—we simply listen together, allowing your body to guide the process at its own pace.',
          'Clients often say they feel calmer, more spacious, and more connected to themselves—less caught in thought, and more anchored in presence. Over time, this can support a deeper sense of clarity, regulation, and wellbeing.',
          'Somatic Enquiry is for anyone seeking to build a more trusting relationship with their body and inner world. No previous experience is needed—just an openness to slow down, listen, and be gently guided back to yourself.',
        ],
      },
    ],
    prices: [
      {
        title: 'Online Somatic Enquiry',
        items: [
          'Initial: $95 (allow 60 minutes)',
          'Follow up: $80 (allow 45 minutes)',
          '3 x Session Package: $210 (3 x 45 minutes)',
          '6 x Session Package: $395 (6 x 45 minutes)',
        ],
      },
    ],
  },
  'retreats-workshops': {
    title: 'Workshops and Retreats',
    quote: {
      text: 'Almost everything will work again if you unplug it for a few minutes, including you.',
      author: 'Anne Lamott',
    },
    sections: [
      {
        title: '',
        paragraphs: ['Coming soon....'],
      },
    ],
  },
};