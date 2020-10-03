### Slugify
* Guarda Slugify - https://www.npmjs.com/package/slugify

### camelcase-keys
* Da npm
* Trasforma nomi proprietà in camelcase
* Esempio con Axios's transformResponse
```js
getUsers({ commit }) {
  return axios.get('https://demo3878003.mockable.io', {
    transformResponse: [
      (data) => {
        return camelcaseKeys(JSON.parse(data), { deep: true })
      }
    ]
  })
    .then(res => {
      commit('SET_USERS', res.data.users)
    })
}
```

### Edit Post
```js
editPost(state, editPost) {
  const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
  state.loadedPost[postIndex] = editedPost
}
```
#### Method-style Getter
```js
getTodoById: (state) => (id) => {
  return state.todos.find(todo => todo.id === id)
}
```
### Deep Clone
```js
JSON.parse(JSON.stringify(data))
```

### Javascript Map range of number to another range
```js
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
/*
var num = 5;
console.log(num.map(0, 10, -50, 50)); // 0
console.log(num.map(-20, 0, -100, 100)); // 150
*/
```

### Highlight text using javascript
```js
function highlight(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

// oppure
"the fox jumped over the other fox".replace(/fox/g,"<span>fox</span>");

```

### Circa Aggiornare array in Vue
* https://stackoverflow.com/questions/51149729/updating-state-of-vuex-array-when-one-item-has-some-changes/51153076

## Array
### Pushare in un array senza mutarlo
* `const newNumber = [...oldNumbe, 6]`