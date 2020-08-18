import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		todos: []
	},
	getters: {
		allTodos: (state) => state.todos
	},
	mutations: {
		setTodos: (state, todosPayload) => (state.todos = todosPayload),
		newTodo: (state, newTodoPayload) => (state.todos = [ newTodoPayload, ...state.todos ]),
		removeTodo: (state, idPayload) =>
			(state.todos = state.todos.filter((currentTodo) => currentTodo.id !== idPayload)),
		editTodo: (state, updatedTodoPayload) => {
			const index = state.todos.findIndex(
				(currentTodo) => currentTodo.id === updatedTodoPayload.id
			);
			if (index !== -1) {
				state.todos.splice(index, 1, updatedTodoPayload);
			}
		}
	},
	actions: {
		/**
		 * 
		 * @param {*} context 
		 * Remember: context is an instance of the store itself
		 * To make use for actions in the component where which we call this, we use methods.
		 */
		async fetchTodos(context) {
			try {
				const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
				let data = response.data;
				// console.log(data);
				// console.table(data);
				context.commit("setTodos", data);
			} catch (error) {
				console.warn(error);
			}
		},
		async createTodo(context, title) {
			try {
				const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
					title: title,
					completed: false
				});
				context.commit("newTodo", response.data);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
		async deleteTodo(context, id) {
			try {
				await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
				context.commit("removeTodo", id);
			} catch (error) {
				console.log(error);
			}
		},
		async updateTodo(context, updatedTodo) {
			const response = await axios.put(
				`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
				updatedTodo
			);
			console.log(response.data);
			context.commit("editTodo", response.data);
		}
	},
	modules: {}
});
