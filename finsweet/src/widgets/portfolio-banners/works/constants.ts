import { WorkTypes } from '@finsweet/shared';
import { WorkPreviewCardProps } from './work-preview-card/work-preview-card';

type WorksPreviewType = {
  type: WorkTypes;
} & WorkPreviewCardProps;

export const ourWorksPreview: WorksPreviewType[] = [
  {
    name: 'Tamplate 1',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 1',
    type: WorkTypes.FIGMA_DESIGN,
    linkHref: '/case1',
    imageSrc: '/portfolio/tamplate_1.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#F4EDE1_16.74%,_#98B1C6_103.17%)]',
  },

  {
    name: 'Tamplate 2',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 2',
    type: WorkTypes.FIGMA_DESIGN,
    linkHref: '/case2',
    imageSrc: '/portfolio/tamplate_2.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#FFD3AF_16.74%,_#4F56FF_103.17%)]',
  },

  {
    name: 'Tamplate 3',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 3',
    type: WorkTypes.UI_DESIGN,
    linkHref: '/case3',
    imageSrc: '/portfolio/tamplate_3.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#EEBCA7_16.74%,_#C8C8C8_103.17%)]',
  },
  {
    name: 'Tamplate 4',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 4',
    type: WorkTypes.UI_DESIGN,
    linkHref: '/case4',
    imageSrc: '/portfolio/tamplate_4.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#C2E7F2_16.74%,_#98A4FF_103.17%)]',
  },
  {
    name: 'Tamplate 5',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 5',
    type: WorkTypes.UI_DESIGN,
    linkHref: '/case5',
    imageSrc: '/portfolio/tamplate_5.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#C5BCFF_16.74%,_#9BF6D5_103.17%)]',
  },
  {
    name: 'Tamplate 6',
    description:
      'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
    imageAlt: 'Work example 6',
    type: WorkTypes.WEBFLOW_DESIGN,
    linkHref: '/case6',
    imageSrc: '/portfolio/tamplate_6.png',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#D2D6FD_16.74%,_#D6ACEA_103.17%)]',
  },
];

export type WorksCasesType = {
  workCaseId: string;
  name: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageBgClassName: string;
  client: string;
  service: string;
  deliverable: string;
  projectDescription: string;
  projectDescriptionSteps: string[];
  projectDescriptionImageSrc: string;
  projectDescriptionImageAlt: string;
  explanation: string;
  explanationSteps: string[];
  keywords: string[];
};
export const ourWorksCases: WorksCasesType[] = [
  {
    workCaseId: 'case1',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_1.png',
    imageAlt: 'Case 1 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#F4EDE1_16.74%,_#98B1C6_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
  {
    workCaseId: 'case2',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_2.png',
    imageAlt: 'Case 2 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#FFD3AF_16.74%,_#4F56FF_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
  {
    workCaseId: 'case3',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_3.png',
    imageAlt: 'Case 3 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#EEBCA7_16.74%,_#C8C8C8_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
  {
    workCaseId: 'case4',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_4.png',
    imageAlt: 'Case 4 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#C2E7F2_16.74%,_#98A4FF_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
  {
    workCaseId: 'case5',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_5.png',
    imageAlt: 'Case 5 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#C5BCFF_16.74%,_#9BF6D5_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
  {
    workCaseId: 'case6',
    name: 'Web design and development',
    title: '@finsweet Design case studies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    imageSrc: '/portfolio/tamplate_6.png',
    imageAlt: 'Case 6 example',
    imageBgClassName:
      'bg-[linear-gradient(131.34deg,_#D2D6FD_16.74%,_#D6ACEA_103.17%)]',
    client: 'facebook.com',
    service: 'Product Design',
    deliverable: 'UI Screens, UX Flow & Prototype',
    projectDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectDescriptionSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    projectDescriptionImageSrc: '/portfolio/tamplate_1/example_1.png',
    projectDescriptionImageAlt: 'Work example 2',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    explanationSteps: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
    keywords: [
      'Design',
      'UI/UX',
      'Wireframing',
      'Branding',
      'Development',
      'webflow',
    ],
  },
];
