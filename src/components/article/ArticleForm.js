import React, { useContext, useState, useEffect } from "react"
import { ArticleContext } from "../article/ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from 'react-router-dom';

export const ArticleForm = () => {
    const { addArticle, getArticleById, updateArticle } = useContext(ArticleContext)


    //for edit, hold on to state of article in this view
    const [article, setArticles] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { articleId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newArticle = { ...article }
        //article is an object with properties. 
        //set the property to the new value
        newArticle[event.target.name] = event.target.value
        //update state
        setArticles(newArticle)
    }

    // If articleId is in the URL, getArticleById
    useEffect(() => {
        if (articleId) {
            getArticleById(articleId)
                .then(article => {
                    setArticles(article)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructArticleObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (articleId) {
            //PUT - update
            updateArticle({
                date: article.date,
                id: article.id,
                title: article.title,
                content: article.content,
                source: article.source,
                userId: parseInt(localStorage.nutshell_user)

            })
                .then(() => history.push(`/articles/detail/${article.id}`))
        } else {
            //POST - add
            addArticle({
                date: article.date,
                title: article.title,
                content: article.content,
                source: article.source,
                userId: parseInt(localStorage.nutshell_user)
            })
                .then(() => history.push("/"))
        }
    }
    // Function for cancel button
    const Cancel = () => {
        history.push("/")
    }


    return (
        <form className="articleForm">
            <h2 className="articleForm__title">{articleId ? <>Edit Article</> : <>New Article</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleDate">Article Date:</label>
                    <input type="date" id="articleDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={article.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleTitle">Article Title: </label>
                    <input type="text" id="articleTitle" name="title" required autoFocus className="form-control"
                        placeholder="Title"
                        onChange={handleControlledInputChange}
                        defaultValue={article.title} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleContent">Article Synopsis: </label>
                    <input type="text" id="articleContent" name="content" required autoFocus className="form-control"
                        placeholder="Synopsis"
                        onChange={handleControlledInputChange}
                        defaultValue={article.content} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleSource">Article Url: </label>
                    <input type="text" id="articleSource" name="source" required autoFocus className="form-control"
                        placeholder="URL"
                        onChange={handleControlledInputChange}
                        defaultValue={article.source} />
                </div>
            </fieldset >


            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructArticleObject()
                }}>
                {articleId ? <>Save Article</> : <>Add Article</>}</button>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    Cancel()

                }}>Cancel</button>
        </form >
    )
}