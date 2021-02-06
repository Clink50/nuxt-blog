// Root Module
// Your state value should always be a function to avoid unwanted shared state on the server side.
export const state = () => ({});

export const mutations = {};

export const actions = {
  nuxtServerInit: async ({ commit }, { $axios, error }) => {
    // Means that we are running the code on the server
    // if (!process.client) {
    //   console.log(req);
    // }
    try {
      const data = await $axios.$get('/posts.json');
      const postsArray = [];
      for (const key in data) {
        postsArray.push({ ...data[key], id: key });
      }
      commit('posts/setPosts', postsArray);
    } catch (e) {
      console.log(`Error occurred in nuxtServerInit: ${e}`);
      error('Error on [nuxtServerInit] action.');
    }
  },
};

export const getters = {};
