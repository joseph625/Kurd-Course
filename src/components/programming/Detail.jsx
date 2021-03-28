import React from 'react'
import './detail.css'

import Vedio from '../detail/Vedio.jsx'
import Book from '../detail/Book.jsx'
import Learn from '../detail/Learn.jsx'
import Youtube from '../website/Youtube.jsx'
import java, {c, python, cSharp, dart} from './program.js'
import javaBook,{cbook, csharpbook, dartBook, pythonbook} from './bookProgram.js'
import javaLearn, { cLearn, csharpLearn, pythonLearn, dartLearn } from './learn.js'

function Detail(props) {

    let name=''
    let nameBook = ''
    let nameLearn = ''

    if (props.all === 'java') {
        name = java;
        nameBook = javaBook;
        nameLearn = javaLearn
    } else if(props.all === 'c'){
        name = c;
        nameBook = cbook;
        nameLearn = cLearn

    } else if(props.all === 'python'){
        name = python;
        nameBook = pythonbook;
        nameLearn = pythonLearn
    } else if(props.all === 'cSharp'){
        name = cSharp;
        nameBook = csharpbook;
        nameLearn = csharpLearn
    } else {
        name = dart;
        nameBook = dartBook;
        nameLearn = dartLearn;
    }

    return (
        <div className="detail-body">

            <Vedio />

            
            <div className="grid">
            {name.map((item) =>(
                
                        <Youtube
                        key= {item.id}
                        title ={item.title}
                        img={item.img}
                        playlist={item.playlist}
                        />
                    ))}
            </div>

                    <Book
                    book ={nameBook.map(book =>(
                        <a key={book.id} href={book.book} target="_blank" rel="noreferrer"><img src={book.img} alt=""/></a>
                    ))}
                    />

                    <Learn
                    learn ={nameLearn.map(url =>(
                        <a key={url.id} href={url.url} target="_blank" rel="noreferrer"><img src={url.img} alt=""/></a>
                    ))}
                    />

        </div>
    )
}

export default Detail
