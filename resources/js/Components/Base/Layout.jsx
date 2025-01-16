'use client'

import Navigation from "@/Components/Base/Navigation.jsx";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({children}) {
    return (
        <>
            <div>
                <Navigation/>
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}
