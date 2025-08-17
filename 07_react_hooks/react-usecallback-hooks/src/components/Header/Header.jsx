import React from "react";

export default React.memo(function Header() {

    console.log('Header re-render!');

    return (
        <>
            <div className="w-full py-5 bg-gray-900 flex items-center justify-center">
                <h1 className="font-semibold text-2xl text-white">Header</h1>
            </div>
        </>
    )
})