"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Phone, Search } from "lucide-react"
import { useState } from "react"

// This would typically come from an API or database
const staffData = [
    { id: 1, name: "John Doe", profession: "Director", phone: "123-456-7890", image: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Jane Smith", profession: "Math Teacher", phone: "234-567-8901", image: "" },
    { id: 3, name: "Bob Johnson", profession: "Science Teacher", phone: "345-678-9012", image: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Alice Brown", profession: "English Teacher", phone: "456-789-0123", image: "" },
    { id: 5, name: "Charlie Davis", profession: "Physical Education", phone: "567-890-1234", image: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Eva Wilson", profession: "Art Teacher", phone: "678-901-2345", image: "" },
    { id: 7, name: "Frank Miller", profession: "History Teacher", phone: "789-012-3456", image: "/placeholder.svg?height=40&width=40" },
    { id: 8, name: "Grace Taylor", profession: "Music Teacher", phone: "890-123-4567", image: "" },
    { id: 9, name: "Henry Clark", profession: "Librarian", phone: "901-234-5678", image: "/placeholder.svg?height=40&width=40" },
    { id: 10, name: "Ivy Martinez", profession: "School Counselor", phone: "012-345-6789", image: "" },
]

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

export default function EmployersPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredStaff = staffData.filter((staff) =>
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.profession.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">School Staff</h1>
            <div className="mb-6 relative">
                <Input
                    type="text"
                    placeholder="Search by name or profession"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStaff.map((staff) => (
                    <Card key={staff.id}>
                        <CardHeader>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    {staff.image ? (
                                        <AvatarImage src={staff.image} alt={staff.name} />
                                    ) : (
                                        <AvatarFallback>{getInitials(staff.name)}</AvatarFallback>
                                    )}
                                </Avatar>
                                <CardTitle>{staff.name}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-2">{staff.profession}</p>
                            <div className="flex items-center text-sm">
                                <Phone className="mr-2 h-4 w-4" />
                                <span>{staff.phone}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {filteredStaff.length === 0 && (
                <p className="text-center text-muted-foreground mt-8">No staff members found matching your search.</p>
            )}
        </div>
    )
}