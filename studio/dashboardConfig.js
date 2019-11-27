export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dddc6b8a0b2fca3d85fc9c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c7njgida',
                  apiId: 'b79b2915-b3db-4c4c-8c75-4a44c50d0d2b'
                },
                {
                  buildHookId: '5dddc6b8e975ca0b73a749ff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1kif7md4',
                  apiId: '88979bd4-54e1-4050-9ef7-5e09ebde8477'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cosmiceric/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1kif7md4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
