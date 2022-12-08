'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [input, setInput] = useState('');

    // Next.js 13 -> next/navigation | Next.js 12 -> next/router
    const router = useRouter(); 

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input) return;

        router.push(`/search/${input}`);
    }

    return (
    <form 
        onSubmit={handleSearch}
        className=" max-w-6xl mx-auto flex justify-between items-center px-5">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search Keywords..."
                className=" 
                    flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent
                    dark:text-orange-400 "
                />
            <button type="submit" disabled={!input} className=" text-rose-400 disabled:text-gray-400">
                Search
            </button>
    </form>
    );
}

export default SearchBox;