import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		todos: []
	},
	getters: {
		// Simply returning everything inside our state todos array.
		// In the app where we call this, we use the computed property.
		allTodos: (state) => state.todos
	},
	mutations: {
		setTodos: (state, todosPayload) => (state.todos = todosPayload)
	},
	actions: {
		// Remember: context is an instance of the store itself
		// To make use for actions in the component where which we call this, we use methods.
		async fetchTodos(context) {
			const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
			try {
				let data = response.data;
				console.log(data);
				context.commit("setTodos", data);
			} catch (error) {
				console.warn(error);
			}
		}
	},
	modules: {}
});
