import React from 'react';
import useFetchApi from '../customHooks/useFetchApi';

function FetchingWithHook() {
    const API = "https://jsonplaceholder.typicode.com/users";
    const {users,loading,error}= useFetchApi(API);
      return (
        <div className="App">
          {loading ?  <p>Loading...</p> : error ? <p>Error : Not Found</p> :users.map((item)=>{
            return(
              <>
                <p>{`${item.id})${item.name}`}</p>
              </>
            )
          }) }
        </div>
      );
}

export default FetchingWithHook;