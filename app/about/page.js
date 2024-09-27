import Image from 'next/image'
import schoolPhoto from '@/src/img.png'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Maktabimiz tarixi</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <p className="text-lg mb-4">
                        1950-yilda tashkil etilgan maktabimiz yetmish yildan ortiq vaqt davomida ta'lim va innovatsiyalar markazi bo'lib kelmoqda. Biz kichik mahalliy maktabdan taniqli muassasaga aylandik, har doim mukammallik va jamoatchilik bilan aloqani saqlab qoldik.
                    </p>
                    <p className="text-lg">
                        Bizning sayohatimiz doimiy takomillashtirish bilan belgilanadi, ta&#39limning o'zgaruvchan ehtiyojlariga moslashib, halollik, ijodkorlik va inklyuzivlik kabi asosiy qadriyatlarimizni saqlab qolamiz.
                    </p>
                </div>
                <div className="relative h-64 md:h-full">
                    <Image
                        src={schoolPhoto}
                        alt="Maktabimizning tarixiy surati"
                        fill
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>

            <h2 className="text-3xl font-semibold mb-6">Asosiy yutuqlar</h2>
            <div className="space-y-4 mb-12">
                {[
                    { year: 1950, event: "Maktab 50 nafar o'quvchi bilan tashkil etildi" },
                    { year: 1975, event: "Kampus kengaytirildi, ilmiy laboratoriyalar qo'shildi" },
                    { year: 1990, event: "Kompyuter fanlari dasturi joriy etildi" },
                    { year: 2005, event: "Yangi sport majmuasi ochildi" },
                    { year: 2020, event: "Raqamli ta'lim tashabbusi ishga tushirildi" }
                ].map((milestone, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{milestone.year}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{milestone.event}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <h2 className="text-3xl font-semibold mb-6">Bizning yutuqlarimiz</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Milliy fan yarmarkasi g'oliblari", count: 15 },
                    { title: "Davlat sport chempionatlari", count: 22 },
                    { title: "Fortune 500 kompaniyalarida ishlaydigan bitiruvchilar", count: 500 }
                ].map((achievement, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold text-center">{achievement.count}+</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center">{achievement.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}