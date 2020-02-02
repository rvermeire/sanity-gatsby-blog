export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e370278e461b6d8fd8bd935',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fu8vnk64',
                  apiId: '0121d91e-fc08-478b-9156-03c4ab74550e'
                },
                {
                  buildHookId: '5e3702781c77183003d40fd4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eccchpc6',
                  apiId: 'a60fa1de-6b35-41aa-8a1f-9ed9bfd961f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rvermeire/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eccchpc6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
