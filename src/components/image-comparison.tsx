'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Compare } from './ui/compare'
import { getCldImageUrl } from 'next-cloudinary';
import { useSearchParams } from 'next/navigation'
import { IconBowlSpoon, IconCoffin, IconGhost2, IconPumpkinScary, IconSpider, IconWand } from '@tabler/icons-react'
interface LoadingMessage {
  message: string;
  icon: JSX.Element;
}

export function ImageComparisonComponent() {
  const [generatedImage, setGeneratedImage] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState<LoadingMessage>({ message: 'Invocando espíritus digitales...', icon: <IconGhost2 /> })
  const [selectedFormat, setSelectedFormat] = useState<string>('')
  const searchParams = useSearchParams();

  const publicId = searchParams.get('publicId');
  const suggestionText = searchParams.get('suggestionText');

  const urlImageOriginal = getCldImageUrl({
    src: publicId || '',
    height: '600px',
    width: '800px',
    crop: 'fill'
  })
  const urlImageConverted = useMemo(() => {
    return getCldImageUrl({
      src: publicId || '',
      height: '600px',
      width: '800px',
      crop: 'fill',
      replaceBackground: suggestionText || ''
    });
  }, [publicId, suggestionText]);
  console.log(urlImageConverted)

  useEffect(() => {
    const loadingMessages = [
      { message: 'Invocando espíritus digitales...', icon: <IconGhost2 /> },
      { message: 'Mezclando pociones de píxeles...', icon: <IconBowlSpoon size={32} /> },
      { message: 'Conjurando sombras espeluznantes...', icon: <IconWand size={32} /> },
      { message: 'Despertando a los fantasmas de la máquina...', icon: <IconCoffin size={32} /> },
      { message: 'Tejiendo telarañas digitales...', icon: <IconSpider size={32} /> },
      { message: 'Invocando la magia de Halloween...', icon: <IconPumpkinScary size={32} /> }
    ];

    const messageInterval = setInterval(() => {
      const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setLoadingMessage(randomMessage);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    if (urlImageConverted) {
      setGeneratedImage(urlImageConverted);
      if (isLoading) {
        setIsLoading(false)
      }
    }
  }, [urlImageConverted, isLoading]); // Solo se ejecuta cuando urlImageConverted cambia


  const handleDownload = (id: string) => {
    if (!generatedImage || !selectedFormat) return

    const url = getCldImageUrl({ src: id, format: selectedFormat, preserveTransformations: true, flags: ["attachment"] });
    const a = document.createElement("a");
    a.href = url;
    a.download = `image.${selectedFormat}`;
    a.click()
  }
  if (typeof publicId !== 'string' || typeof suggestionText !== 'string') {
    return <div>Error: Los parámetros no son válidos</div>;
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-orange-400 hover:text-orange-300">
            <ArrowLeft className="mr-2" />
            Volver al editor
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-orange-400 mb-8">Comparación de Imágenes</h1>
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardContent className="p-4">
            <div className="relative h-[600px] overflow-hidden">

              {!isLoading && (
                <>
                  <Compare
                    firstImage={urlImageOriginal}
                    secondImage={generatedImage}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                  />
                </>
              )}
              {isLoading && (
                <>
                  <Image
                    src={urlImageOriginal}
                    alt="Imagen original"
                    fill
                    placeholder='empty'
                    className="rounded-lg"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-lg">
                    <p className="text-center loading text-gray-400 animate-pulse">{loadingMessage.message}</p> <span className='text-gray-400'>{loadingMessage.icon}</span>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Original</span>
              <span>Generada</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Select onValueChange={setSelectedFormat}>
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-100">
              <SelectValue placeholder="Seleccionar formato" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpg">JPG</SelectItem>
              <SelectItem value="webp">WebP</SelectItem>
              <SelectItem value="avif">AVIF</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => handleDownload(urlImageConverted)}
            className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-semibold"
            disabled={isLoading || !selectedFormat}
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar Imagen Generada
          </Button>
        </div>
      </main>
    </div>
  )
}