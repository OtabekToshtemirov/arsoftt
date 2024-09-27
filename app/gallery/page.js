'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

// In a real application, you would fetch this data from an API or CMS
const galleryItems = [
    { id: 1, src: 'https://via.placeholder.com/600/92c952', alt: 'Students in classroom', caption: 'Engaging classroom discussions', category: 'Academics' },
    { id: 2, src: 'https://via.placeholder.com/600/92c952', alt: 'Science lab', caption: 'State-of-the-art science facilities', category: 'Academics' },
    { id: 3, src: 'https://via.placeholder.com/600/92c952', alt: 'Sports field', caption: 'Encouraging athletic excellence', category: 'Sports' },
    { id: 4, src: 'https://via.placeholder.com/600/92c952', alt: 'Art class', caption: 'Nurturing creativity in our art studio', category: 'Arts' },
    { id: 5, src: 'https://via.placeholder.com/600/92c952', alt: 'Library', caption: 'Our well-stocked library', category: 'Facilities' },
    { id: 6, src: 'https://via.placeholder.com/600/92c952', alt: 'Music room', caption: 'Developing musical talents', category: 'Arts' },
    { id: 7, src: 'https://via.placeholder.com/600/92c952', alt: 'Cafeteria', caption: 'Enjoying nutritious meals together', category: 'Facilities' },
    { id: 8, src: 'https://via.placeholder.com/600/92c952', alt: 'Playground', caption: 'Fun and safe play areas', category: 'Facilities' },
]

const categories = ['All', ...new Set(galleryItems.map(item => item.category))]

export default function GalleryPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our School Gallery</h1>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item, index) => (
                    <Dialog key={item.id}>
                        <DialogTrigger asChild>
                            <div className="cursor-pointer transition-transform hover:scale-105">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={300}
                                    height={200}
                                    className="rounded-lg object-cover w-full h-48"
                                />
                                <p className="mt-2 text-sm text-center">{item.caption}</p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                            <div className="relative">
                                <Image
                                    src={filteredItems[currentImageIndex].src}
                                    alt={filteredItems[currentImageIndex].alt}
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-auto"
                                />
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    onClick={nextImage}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="mt-2 text-center">{filteredItems[currentImageIndex].caption}</p>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}