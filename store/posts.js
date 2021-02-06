// https://vuex.vuejs.org/guide/state.html
export const state = () => ({
  loadedPosts: [],
});

// https://vuex.vuejs.org/guide/mutations.html
// Must be synchronous
export const mutations = {
  setPosts: (state, posts) => {
    state.loadedPosts = posts;
  },
  addPost: (state, post) => {
    state.loadedPosts.push(post);
  },
  editPost: (state, editedPost) => {
    const postIndex = state.loadedPosts.findIndex(
      (post) => post.id === editedPost.id
    );
    state.loadedPosts[postIndex] = editedPost;
  },
};

// Actions commit mutations, actions are used for async operations
export const actions = {
  // setPosts: (vuexContext, payload) - used destructuring to get the commit function from the context
  setPosts({ commit }, posts) {
    commit('setPosts', posts);
  },
  async addPost({ commit }, post) {
    try {
      const createdPost = {
        ...post,
        updatedDate: new Date(),
      };

      const data = await this.$axios.$post('/posts.json', createdPost);
      // data.name = the id in firebase
      commit('addPost', {
        ...createdPost,
        id: data.name,
      });
      return;
    } catch (e) {
      throw new Error(
        'Error occurred when attempting to create a new post:',
        e
      );
    }
  },
  async editPost({ commit }, editedPost) {
    try {
      await this.$axios.$put(`/posts/${editedPost.id}.json`, editedPost);
      commit('editPost', editedPost);
      return;
    } catch (e) {
      throw new Error(
        `Error occurred when attempting to edit the postId: ${editedPost.id}`,
        e
      );
    }
  },
};

// https://vuex.vuejs.org/guide/getters.html
export const getters = {
  loadedPosts: (state) => {
    return state.loadedPosts;
  },
};

// import Vuex from 'vuex';

// Function created because if it was just a plain object, then every user
// would get that same object, instead every user will get their own store
// const createStore = () => {
//   return new Vuex.Store({
//     // Whenever Vuex state is mutated outside of mutation handlers, an error will be thrown - https://vuex.vuejs.org/guide/strict.html#strict-mode
//     // This will be an issue with using v-model so have computed prop with getter and setter - https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
//     strict: process.env.NODE_ENV !== 'production',
//     // https://vuex.vuejs.org/guide/state.html
//     state: {
//       loadedPosts: [],
//     },
//     // https://vuex.vuejs.org/guide/mutations.html
//     // Must be synchronous
//     mutations: {
//       setPosts: (state, posts) => {
//         state.loadedPosts = posts;
//       },
//     },
//     // Actions commit mutations, actions are used for async operations
//     actions: {
//       // setPosts: (vuexContext, payload) - used destructuring to get the commit function from the context
//       setPosts: ({ commit }, posts) => {
//         commit('setPosts', posts);
//       },
//     },
//     // https://vuex.vuejs.org/guide/getters.html
//     getters: {
//       loadedPosts: (state) => {
//         return state.loadedPosts;
//       },
//     },
//   });
// };

// export default createStore;
