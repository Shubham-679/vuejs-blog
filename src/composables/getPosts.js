import { ref } from "vue";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      // await new Promise(resolve => {
      //   setTimeout(resolve, 2000)
      // })
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no available data");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  // load()
  return { posts, error, load };
};
