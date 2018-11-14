query namedQuery {
  posts {
    id
  }

}

mutation addPost {
  createPost(data: {
    status: PUBLISHED,
    title: "New New Posty Post",
    body: "This is some body copy"
  }) {
    title
    body
    id
  }
}
