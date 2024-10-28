import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../app/features/PaginateSlice';

const Paginate = ({total}) => {
  const dispatch = useDispatch();
  
  const  handlePageChange = (selectedItem) => {
    dispatch(setCurrentPage(selectedItem.selected + 1));  
    
  }
  return (
            <ReactPaginate
                className='paginate'
                breakLabel="..."
                pageCount={Math.ceil(total / 12)}
                previousLabel="<<"
                nextLabel=">>"    
                breakClassName='paginate_break'
                activeLinkClassName='paginate_active'
                pageLinkClassName='paginate_link'
                nextClassName='paginate_btn'
                previousClassName='paginate_btn'
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
             />
  )
}

export default Paginate