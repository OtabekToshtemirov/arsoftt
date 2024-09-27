'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contacts() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', { name, email, message })
        // Reset form fields
        setName('')
        setEmail('')
        setMessage('')
        // You might want to show a success message to the user here
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="my-12">
                <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Get in Touch</h2>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary"/>
                        <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary"/>
                        <a href="mailto:info@schoolname.edu" className="hover:underline">info@schoolname.edu</a>
                    </div>
                    <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1"/>
                        <address className="not-italic">
                            123 Education Lane<br/>
                            Learningville, ST 12345<br/>
                            United States
                        </address>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" className="text-primary hover:text-primary/80">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="w-6 h-6"/>
                        </Link>
                        <Link href="https://twitter.com" className="text-primary hover:text-primary/80">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="w-6 h-6"/>
                        </Link>
                        <Link href="https://instagram.com" className="text-primary hover:text-primary/80">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="w-6 h-6"/>
                        </Link>
                        <Link href="https://linkedin.com" className="text-primary hover:text-primary/80">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.4837602941811!2d71.25514450805134!3d40.99602872644344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb2bc3838b6151%3A0xdc388da405f819fc!2s74%20Maktab.%20Shkola!5e0!3m2!1sen!2s!4v1727433296309!5m2!1sen!2s"
                        width="600"
                        height="550"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="School Location"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}