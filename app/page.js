import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap, MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"
import mainPhoto from '/src/img.png'
import Link from "next/link"

export default function MainPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Qahramon bo'limi */}
            <section className="relative h-[400px]">
                <Image src={mainPhoto} alt="Maktab binosi" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-4">74-Maktabga xush kelibsiz</h2>
                        <p className="text-xl mb-6">Chust tumanida aqlni kuchaytirish</p>
                        <Button size="lg">Ko'proq bilib oling</Button>
                    </div>
                </div>
            </section>

            {/* Tezkor ma'lumot bo'limi */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <CalendarDays className="mr-2" />
                                    Yaqinlashayotgan tadbirlar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li>Ota-ona va o'qituvchi uchrashuvi - 15-may</li>
                                    <li>Fan yarmarkasi - 1-iyun</li>
                                    <li>Yozgi ta'til boshlanishi - 20-iyun</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <GraduationCap className="mr-2" />
                                    Akademik mukammallik
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Maktabimiz Chust tumanida doimiy ravishda eng yuqori o'rinlarda turadi, to'liq ta'lim va shaxsiy o'sishga e'tibor qaratadi.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <MapPin className="mr-2" />
                                    Bizning joylashuvimiz
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>74-Maktab Chust tumanining markazida joylashgan bo'lib, jamoat transporti orqali osonlik bilan yetib borish mumkin.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Foto galereya */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Maktab galereyasi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="relative h-48 overflow-hidden rounded-lg">
                                <Image
                                    src={mainPhoto}
                                    alt={`Maktab surati ${item}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Yangiliklar va e'lonlar */}
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">So'nggi yangiliklar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <Card key={item}>
                                <CardHeader>
                                    <CardTitle>Maktab yangiliklari {item}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Button variant="outline">Ko'proq o'qing <ChevronRight className="ml-2 h-4 w-4" /></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background text-primary py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Biz bilan bog'laning</h3>
                            <address className="not-italic">
                                <p className="flex items-center mb-2"><MapPin className="mr-2 h-4 w-4" /> 123 Maktab ko'chasi, Chust tumani</p>
                                <p className="flex items-center mb-2"><Phone className="mr-2 h-4 w-4" /> +998 12 345 6789</p>
                                <p className="flex items-center"><Mail className="mr-2 h-4 w-4" /> info@74school.uz</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Tezkor havolalar</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:underline">Maktab taqvimi</Link></li>
                                <li><Link href="#" className="hover:underline">Qabul</Link></li>
                                <li><Link href="#" className="hover:underline">Talabalar portali</Link></li>
                                <li><Link href="#" className="hover:underline">Ota-onalar resurslari</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Aloqada bo'ling</h3>
                            <p className="mb-4">So'nggi yangiliklar va e'lonlar uchun bizni ijtimoiy tarmoqlarda kuzatib boring.</p>
                            <div className="flex space-x-4">
                                {/* Ijtimoiy tarmoqlar ikonkalari/havolalarini qo'shing */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2024 74-Maktab. Barcha huquqlar himoyalangan.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}