export type SiteConfig = typeof siteConfig

const links = {
  twitter: 'https://twitter.com/@assafEnrique',
  github: 'https://github.com/JorgeAssaf/JA',
  githubAccount: 'https://github.com/jorgeassaf',
  threads: 'https://threads.net/@jorgeassaf_dev',
}

export const siteConfig = {
  name: 'Nicholas Wekesa',
  description:
    'Personal portfolio of Nicholas Wekesa',
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: 'https://jorgeassaf/opengraph-image.png',
  sourceCode: links.github,
  mainNav: [
    {
      title: 'Home',
      href: '/',
      items: [],
    },
    {
      title: 'About',
      href: '/about',
      items: [],
    },
    {
      title: 'Projects',
      href: '/projects',
      items: [],
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    //   items: [],
    // },

  ],
  footerNav: [
    {
      title: 'Social',
      items: [
        // {
        //   title: 'Twitter',
        //   href: links.twitter,
        //   external: true,
        // },
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true,
        },
        // {
        //   title: 'Threads',
        //   href: links.threads,
        //   external: true,
        // },
      ],
    },
    {
      title: 'Lofi',
      items: [
        {
          title: 'beats to study to',
          href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          external: true,
        },
        {
          title: 'beats to chill to',
          href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
          external: true,
        },
        {
          title: 'a fresh start',
          href: 'https://www.youtube.com/watch?v=rwionZbOryo',
          external: true,
        },
        {
          title: 'coffee to go',
          href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
          external: true,
        },
      ],
    },
  ],
}
