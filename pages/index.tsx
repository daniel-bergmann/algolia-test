import { GetStaticProps } from "next"

export default function Home({ posts }: any) {
  return (
    <>
      {posts.map((i: any) => {
        return <div key={i.id}>{i.title}</div>
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )
  return {
    props: {
      posts,
    },
  }
}
