import gql from "graphql-tag";

export const typeDefs = gql`
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }
        
    "A track is a group of modules that teaches about a specific topic."
    type Track {
        id: ID!
        
        "The track's title"
        title: String!
        
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String

        "The track's approximate length to complete, in minutes"
        length: Int

        "The track's number of modules"
        modulesCount: Int

        "The track's main author"
        author: Author!
    }
    
    "Author of a complete track"
    type Author{
        id: ID!

        "The author's first name and last name"
        name: String!

        "The author's main picture to display"
        photo: String
    }
`;