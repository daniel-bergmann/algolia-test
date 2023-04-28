export default function Post({ post }: any) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>id: {post.id}</p>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )

  const paths = res.map((post: any) => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ).then((res) => res.json())

  return {
    // Passed to the page component as props
    props: { post: data },
  }
}
