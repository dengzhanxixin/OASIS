import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Overview',
      href: getPermalink('/#Overview'),
    },
    // {
    //   text: 'Call for Papers',
    //   href: getPermalink('/#Call-For-Papers'),
    // },
    // {
    //   text:'Speakers',
    //   href:getPermalink('/#Speakers')
    // },
    // {
    //   text: 'People',
    //   href: getPermalink('/#Organizers'),
    // },
    // {
    //   text:'Challenge',
    //   href:'https://chenyi99.github.io/ego_plan_challenge/'
    // }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
