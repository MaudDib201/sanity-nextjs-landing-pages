export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e427c6c805d9e2f66e2dfe6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g96roe7e',
                  apiId: 'b4ae0fab-08aa-4f99-b0b6-6e861bca0728'
                },
                {
                  buildHookId: '5e427c6c8476ef863155cc8a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iwhb5cdf',
                  apiId: 'e1e0f820-555e-4326-a683-e8476b569d2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaudDib201/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iwhb5cdf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
