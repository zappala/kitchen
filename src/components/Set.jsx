const Set = (props) => {
  const posts = props.searchList;
  console.log("favorites", posts);

  return (
    <ul className="list-none">
      {posts &&
        posts.map((post) => (
          <li className="py-2">
            <a
              className="text-lg text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
              href={`/recipes/${post.slug}`}
            >
              {post.data.title}
            </a>
            <p className="text-sm text-gray-800">{post.data.body}</p>
          </li>
        ))}
    </ul>
  );
};

export default Set;
