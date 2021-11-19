import React from 'react'

const AuthInput = (props) => {
    return (
        <div class='pt-2 pb-2 mx-auto my-auto'>
            <input
                class="rounded-lg focus:outline-none text-lg placeholder-gray-500"
                type="text"
                placeholder={props.placeholder}
                // later figure out how to automatically indent the placeholder text and the inputted text
            />
            
        </div>
    )
}

export default AuthInput
