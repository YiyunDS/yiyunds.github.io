import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For GitHub Pages, you could integrate with a service like Formspree or Netlify Forms
    // For now, we'll just open the user's email client
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:yiyunzhouds@icloud.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new AI opportunities, research collaborations,
                or chatting about machine learning and innovative solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p className="text-muted-foreground">yiyunzhouds@icloud.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p className="text-muted-foreground">404-333-1288</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p className="text-muted-foreground">Philadelphia, PA</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}