'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Ghost, Skull, Cloud, Candy, Wand2, PenTool, Sparkles } from 'lucide-react'
import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary'
import { CardsCarouselDemo } from './ui/cards-demo'
import { useRouter } from 'next/navigation'
import { IconPumpkinScary } from '@tabler/icons-react'
export function HalloweenImageEditor() {
  const [prompt, setPrompt] = useState('')
  const [resource, setResource] = useState<string | undefined>(undefined);
  const router = useRouter()


  const suggestions = [
    { icon: <Ghost className="size-4" />, text: "Añadir fantasmas espeluznantes" },
    { icon: <Skull className="size-4" />, text: "Transformar en esqueleto" },
    { icon: <Cloud className="size-4" />, text: "Agregar nubes tenebrosas" },
    { icon: <Candy className="size-4" />, text: "Convertir objetos en dulces de Halloween" },
    { icon: <PenTool className="size-4" />, text: "Aplicar efectos espeluznantes" },
    { icon: <Sparkles className="size-4" />, text: "Generar creaciones escalofriantes con IA" },
  ]
  const handleSuggestionClick = (suggestionText: string) => {
    setPrompt(prev => (prev ? `${prev} ${suggestionText}` : suggestionText).trim())
  }


  const handleTransform = () => {
    if (resource) {
      const publicId = resource
      router.push(`/photo/${publicId}?publicId=${encodeURIComponent(publicId)}&suggestionText=${encodeURIComponent(prompt)}`)
    }
  }


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className='flex gap-2'>
            <h1 className="text-3xl font-bold text-orange-400">SpookEdyt AI </h1>
            <span className='text-orange-400'><IconPumpkinScary size={38} /></span>
          </div>
          <p className="mt-2 text-gray-300">Transforma tus imágenes con el poder de la IA y el espíritu de Halloween</p>
        </div>
      </header>



      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">Transforma tu Imagen</h2>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-4">
                <CldUploadWidget
                  uploadPreset="upload-unsigned-images"
                  onSuccess={(result: CloudinaryUploadWidgetResults) => {
                    if (result.info && typeof result.info !== 'string' && result.info.public_id) {
                      const publicId = result.info.public_id;
                      setResource(publicId);
                    }
                  }}
                  onQueuesEnd={(result, { widget }) => {
                    widget.close();
                  }}
                  options={{
                    sources: ["local"],
                    multiple: false,
                    maxFiles: 1,
                    language: "es",
                    text: {
                      es: {
                        or: "O",

                        menu: {
                          files: "Subir desde tu dispositivo",
                        },
                        local: {
                          browse: "Seleccionar",
                          dd_title_single: "Arrastra tu imagen aquí",
                        },
                      },
                    },
                    styles: {
                      palette: {
                        window: "#191515",
                        sourceBg: "#1F1D1D",
                        windowBorder: "#8E9FBF",
                        tabIcon: "#FFFFFF",
                        inactiveTabIcon: "#8E9FBF",
                        menuIcons: "#FF8000",
                        link: "#FF8000",
                        action: "#336BFF",
                        inProgress: "#00BFFF",
                        complete: "#33ff00",
                        error: "#EA2727",
                        textDark: "#000000",
                        textLight: "#FFFFFF"
                      },
                      fonts: {
                        default: null,
                        "'Creepster', monospace": {
                          url: "https://fonts.googleapis.com/css?family=Creepster",
                          active: true
                        }
                      }
                    }
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      setResource(undefined);
                      open();
                    }
                    return (
                      <button onClick={handleOnClick} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full py-8 bg-orange-600 hover:bg-orange-700 text-gray-100 font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-95" data-id="18"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload w-6 h-6 mr-2" data-id="19"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>Subir Imagen</button>
                    );
                  }}
                </CldUploadWidget>
              </div>
              <div className="mt-6 space-y-4">
                <Label htmlFor="prompt" className="block mb-2 text-gray-200">Describe tu transformación</Label>
                <Textarea
                  id="prompt"
                  placeholder="Ej: Añade una niebla espeluznante y convierte los árboles en siluetas de monstruos"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="mb-4 bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                />
                <Button onClick={handleTransform} className="w-full bg-orange-500 hover:bg-orange-600 text-gray-100 font-semibold">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Transformar con IA
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">Sugerencias Terroríficas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-3 px-4 bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-700 hover:border-gray-600"
                onClick={() => handleSuggestionClick(suggestion.text)}
              >
                <div className="flex items-center">
                  <div className="text-orange-400 mr-3">{suggestion.icon}</div>
                  <span className="text-sm text-left">{suggestion.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </section>

        <section>
          <CardsCarouselDemo />
        </section>
      </main>
    </div>
  )
}