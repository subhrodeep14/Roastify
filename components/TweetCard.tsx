export default function TweetCard() {

    return (
        <div className="max-w-lg w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <a href="" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                    </a>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1">
                            <a href="" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:underline truncate" >
                                Alex Johnson
                            </a>
                            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                            </svg>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline" >
                            @userhandle
                        </a>
                    </div>
                </div>
                <a href="" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-blue-400 hover:text-blue-600 transition-colors" >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>

            {/* Content */}
            <div className="mb-3">
                <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
                    Just deployed my new portfolio website! 🚀 Built with React and Tailwind CSS. Check out the clean design and
                    smooth animations ✨ #webdev #portfolio
                </p>
            </div>

            {/* Image */}
            <div className="mb-3">
                <div className="rounded-xl overflow-hidden border border-gray-200">
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/template/placeholder_01.svg" alt="" className="w-full h-64 object-cover"
                    />
                </div>
            </div>

            {/* Timestamp */}
            <div className="text-gray-500 text-xs">1:15 PM · Dec 20, 2024</div>
        </div>
    )
}