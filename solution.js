function createArticle() {

	let titleName = document.getElementById("createTitle")
	let textArea = document.getElementById("createContent")
	let articles = document.getElementById('articles')

	let textTitle = titleName.value
	let textAreaContent = textArea.value
	if (textTitle && textAreaContent) {
		let newTitle = document.createElement('h3')
		let newContent = document.createElement('p')
		let newArticle = document.createElement('article')

		newTitle.textContent = textTitle
		newContent.textContent = textAreaContent



		newArticle.appendChild(newTitle)
		newArticle.appendChild(newContent)
		articles.appendChild(newArticle)
		titleName.value = ''
		textArea.value = ''
	}
}