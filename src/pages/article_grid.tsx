import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head, Headline,ArticleGrid,convertEdgesToArticles } from '@dailybruin/lux'
import * as uniq from 'lodash.uniq'
import capitalizeSection from '../utils/capitalizeSection'
import { css } from 'react-emotion'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    allGoogleSheetRow {
      edges {
        node {
          section
          iscolumn
          headline
          byline
          imageurl
          imagecredits
          imagedescription
          link
        }
      }
    }
  }
`

export default function ArticleGridPage({data}){
  const sections=uniq(
    data.allGoogleSheetRow.edges.map(edge=>
    capitalizeSection(edge.node.section))
  )

  const articleGrids=sections.map((section,i) => {
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section.toLowerCase())
    return <ArticleGrid key={i} heading={section} articles={articles} />
  })

  return(
  <>
  <div
    style={{
      margin:'0 auto',
      maxWidth:1080,
      padding:'0px 1.0875rem 1.45 rem',
      paddingTop:0,
    }}
    >
  <Head {...data.site.siteMetadata} />
  <div
    style={{
      paddingTop:45,
      width: '100%',
      textAlign: 'center',
    }}
    >
    
   
  <Headline text="Article Grid Gatsby Starter Page"/>
  </div>
    {articleGrids}
  </div>
    <Footer developers="Karl Huang" copyrightYear={2018} />
  </>
)
}
