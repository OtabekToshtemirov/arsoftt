import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import newsPhoto from '/src/rektor.png'

export default function NewsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">School News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Featured Story</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={newsPhoto}
                                alt="Featured news image"
                                width={600}
                                height={300}
                                className="rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">Annual Science Fair Winners Announced</h2>
                            <p className="text-muted-foreground mb-4">
                                Congratulations to all participants in this year&#39;s Science Fair. The creativity and innovation displayed were truly impressive...
                            </p>
                            <Button>Read More <ChevronRight className="ml-2 h-4 w-4" /></Button>
                        </CardContent>
                    </Card>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <Card key={item}>
                                <CardHeader>
                                    <CardTitle className="text-lg">News Title {item}</CardTitle>
                                    <CardDescription>March {item + 10}, 2023</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Brief description of the news item. This could be the first few lines of the article...
                                    </p>
                                    <Link href="#" className="text-primary hover:underline">
                                        Read more
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {[
                                    { date: "Apr 15", event: "Parent-Teacher Conference" },
                                    { date: "Apr 22", event: "Earth Day Celebration" },
                                    { date: "May 1", event: "Spring Concert" },
                                    { date: "May 10", event: "Sports Day" },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium mr-2">{item.date}:</span>
                                        <span className="text-sm text-muted-foreground">{item.event}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Academics</Badge>
                                <Badge variant="secondary">Sports</Badge>
                                <Badge variant="secondary">Arts</Badge>
                                <Badge variant="secondary">Events</Badge>
                                <Badge variant="secondary">Community</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}