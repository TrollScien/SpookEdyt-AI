# 🎃 SpookEdit AI: Halloween Image Editor

**SpookEdit AI** es una herramienta de edición de imágenes impulsada por inteligencia artificial, diseñada para darle un toque espeluznante a tus fotos. Convierte imágenes ordinarias en obras de arte de Halloween, añadiendo fantasmas, nieblas misteriosas y mucho más. Perfecto para quienes buscan añadir un toque de magia de Halloween a sus recuerdos.

## ✨ Características

- **Transformaciones de Halloween:** Añade efectos espeluznantes y transforma objetos con solo unos clics.
- **Interfaz Intuitiva:** Fácil de usar para todos, desde principiantes hasta expertos en edición de imágenes.

## 🚀 Comenzando

### Prerrequisitos

- Node.js y pnpm instalados
- Cuenta de Cloudinary para gestionar la subida y transformación de imágenes

### Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/spookedit-ai.git
    cd spookedit-ai
    ```

2. Instala las dependencias:

    ```bash
    pnpm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. Inicia la aplicación:

    ```bash
    pnpm run dev
    ```

5. Abre tu navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.

## 📚 Uso

### Subir y Transformar Imágenes

1. **Sube una Imagen:**
   - Haz clic en el botón "Subir Imagen".
   - Selecciona la imagen desde tu dispositivo.

2. **Aplica Sugerencias de Transformación:**
   - Elige entre una variedad de sugerencias terroríficas para transformar tu imagen.

3. **Descripción de Transformación:**
   - Describe la transformación que deseas aplicar (por ejemplo, "Añade una niebla espeluznante y convierte los árboles en siluetas de monstruos").

4. **Transformar con IA:**
   - Haz clic en "Transformar con Magia de Halloween" y observa cómo tu imagen se transforma mágicamente.

## 🛠️ Tecnologías Utilizadas

- **Next.js:** Framework para aplicaciones React.
- **Cloudinary:** Gestión y transformación de imágenes.
- **Tailwind CSS:** Estilización de la interfaz de usuario.
- **Framer Motion:** Animaciones fluidas e interactivas.

## 🙌 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/tu-nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube la rama (`git push origin feature/tu-nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
