import React from 'react'

const Pagination = ({totalPost, postPerPage, setCurrentPage,currentPage}) => {

    let pages = [];

    for( let i = 1; i <= Math.ceil(totalPost/postPerPage); i++ ) {
    pages.push(i)
    }

  return (
    <div>
        {
            pages.map((page, index) => {
                return <button className={`${page == currentPage ? "active" : ""} bg-white mr-5 w-10 h-10 font-bold mt-10 mb-10`} key={index} onClick={() => setCurrentPage(page)} >{page}</button>
            })
        }
    </div>
  )
}

export default Pagination;