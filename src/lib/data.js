import ApolloClient, { gql } from 'apollo-boost';
import config from './config';

export const createClient = (fetch) => new ApolloClient({
  fetch,
  uri: config.drupal_base_url + '/graphql',
});

export const FrontPageQuery = gql`
query FrontPage($limit: Int = 10, $offset: Int = 0) {
  nodeQuery(
    limit: $limit,
    offset: $offset,
    filter: {
      conditions: [
        {field: "status", operator:EQUAL, value:["1"]},
        {field: "promote", operator:EQUAL, value:["1"]}
      ]
    },
    sort: [
      {field: "sticky", direction: DESC},
      {field: "changed", direction: DESC}
    ]) {
    count
    entities {
      ... on NodeArticle {
        nid,
        created,
        changed,
        type {
          targetId
        },
        status,
        uid {
          entity {
            ... on User {
              uid,
              name,
              mail,
              userPicture {
                url
              }
            }
          }
        }
        title,
        body {
          value,
          format,
          processed,
          summary,
          summaryProcessed
        }
        promote,
        sticky,
        path {
          alias
        }
      }
    }
  }
}
`;

export function getUserURL(entity) {
  const path = entity.path && entity.path.alias || `/user/${entity.uid}`
  return config.drupal_base_url + path;
}

export function getNodeURL(entity) {
  const path = entity.path && entity.path.alias || `/node/${entity.nid}`
  return path;
}