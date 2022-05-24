import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Table from "./Table";

const SavedNews=()=> {

const { favourite } = useSelector((state)=> state.news);  
console.log(favourite);
  const columns = React.useMemo(
    () => [
      {
        Header: "Source",
        Cell: ({ row }) => {
          return (
            <div>
                <p>
                    {row.original.author}
                </p>
                <a href={row.original.url}>
                News Page
                </a>
            </div>  
            
          );
        }
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Description",
        accessor: "description"
      }
    ],
    []
  );
  return (
    <div className="savedNews">
      <h1>Saved</h1>
      <Table columns={columns} data={favourite} />
    </div>
  );
}

export default SavedNews;
