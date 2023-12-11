import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type MarkProps = {
  text: string;
  className: string;
};

const Mark: FC<MarkProps> = ({ className, text }) => (
  <div
    className={twMerge(
      className,
      'pt-[2xp] pb-[2px] pl-2 pr-2 border-[1px] rounded-full'
    )}
  >
    {text}
  </div>
);

export const Categories: FC = () => (
  <div className="grid grid-cols-2 tabletS:grid-cols-3 tabletM:grid-cols-4 dectopS:grid-cols-6 flex-wrap gap-8">
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Product</span>
      <span>Overview</span>
      <span>Features</span>
      <span className="flex gap-4 items-center">
        Solutions
        <Mark
          className="border-green-200  bg-green-50 text-green-700"
          text="New"
        />
      </span>
      <span>Tutorials</span>
      <span>Pricing</span>
      <span>Releases</span>
    </div>
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Company</span>
      <span>About us</span>
      <span>Careers</span>
      <span>Press</span>
      <span>News</span>
      <span>Media kit</span>
      <span>Contact</span>
    </div>
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Resources</span>
      <span>Blog</span>
      <span>Newsletter</span>
      <span>Events</span>
      <span>Help centre</span>
      <span>Tutorials</span>
      <span>Support</span>
    </div>
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Use Cases</span>
      <span>Startups</span>
      <span>Enterprise</span>
      <span>Government</span>
      <span>SaaS centre</span>
      <span>Marketplaces</span>
      <span>Ecommerce</span>
    </div>
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Social</span>
      <span>Twitter</span>
      <span>LinkedIn</span>
      <span>Facebook</span>
      <span>GitHub</span>
      <span>AngelList</span>
      <span>Dribbble</span>
    </div>
    <div className="flex flex-col text-medium-semibold-secondary text-gray-blue-700 gap-3">
      <span className="text-small-semibold text-gray-400 mb-1">Legal</span>
      <span>Terms</span>
      <span>Privacy</span>
      <span>Cookies</span>
      <span>Licenses</span>
      <span>Settings</span>
      <span>Contact</span>
    </div>
  </div>
);
