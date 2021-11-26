import React from 'react';

const SearchBar = () => {
    return (
        <div class="pt-2 mx-auto text-gray-600">
             <input class="border-2 border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-300
             h-10 px-5 pr-4 w-full rounded-lg text-sm focus:outline-none"
          type="search" name="search" id = "searchString" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar
