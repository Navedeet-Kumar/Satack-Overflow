import React from 'react'

import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

  const tagsList = [{
    id: 1,
    tagName: "javascript",
    tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java."
  },{
    id: 2,
    tagName: "python",
    tagDesc: "Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
  },{
    id: 3,
    tagName: "c#",
    tagDesc: "C# (pronounced 'see sharp') is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times."
  },{
    id: 4,
    tagName: "java",
    tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself."
  },{
    id: 5,
    tagName: "php",
    tagDesc: "PHP is an open source, multi-paradigm, dynamically-typed and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP language."
  },{
    id: 6,
    tagName: "html",
    tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
  },{
    id: 7,
    tagName: "android",
    tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
  },{
    id: 8,
    tagName: "css",
    tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements. "
  },{
    id: 9,
    tagName: "mysql",
    tagDesc: "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data."
  },{
    id: 10,
    tagName: "sql",
    tagDesc: "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used."
  }]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
              {
                tagsList.map((tag) => (
                  <TagsList tag={tag} key={TagsList.id}/>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Tags
